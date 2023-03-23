package notifier

import (
	"context"
	"testing"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/stretchr/testify/require"

	"github.com/grafana/grafana/pkg/infra/db"
	"github.com/grafana/grafana/pkg/infra/log"
	"github.com/grafana/grafana/pkg/services/dashboards"
	"github.com/grafana/grafana/pkg/services/ngalert/metrics"
	"github.com/grafana/grafana/pkg/services/ngalert/store"
	"github.com/grafana/grafana/pkg/services/secrets/database"
	secretsManager "github.com/grafana/grafana/pkg/services/secrets/manager"
	"github.com/grafana/grafana/pkg/setting"
)

func setupAMTest(t *testing.T) *Alertmanager {
	dir := t.TempDir()
	cfg := &setting.Cfg{
		DataPath: dir,
	}

	m := metrics.NewAlertmanagerMetrics(prometheus.NewRegistry())
	sqlStore := db.InitTestDB(t)
	s := &store.DBstore{
		Cfg: setting.UnifiedAlertingSettings{
			BaseInterval:                  10 * time.Second,
			DefaultRuleEvaluationInterval: time.Minute,
		},
		SQLStore:         sqlStore,
		Logger:           log.New("alertmanager-test"),
		DashboardService: dashboards.NewFakeDashboardService(t),
	}

	kvStore := NewFakeKVStore(t)
	secretsService := secretsManager.SetupTestService(t, database.ProvideSecretsStore(sqlStore))
	decryptFn := secretsService.GetDecryptedValue
	am, err := newAlertmanager(context.Background(), 1, cfg, s, kvStore, &NilPeer{}, decryptFn, nil, m)
	require.NoError(t, err)
	return am
}

func TestAlertmanager_newAlertmanager(t *testing.T) {
	am := setupAMTest(t)
	require.False(t, am.Ready())
}

// Tests cleanup of expired Silences. We rely on prometheus/alertmanager for
// our alert silencing functionality, so we rely on its tests. However, we
// implement a custom maintenance function for silences, because we snapshot
// our data differently, so we test that functionality.
func TestSilenceCleanup(t *testing.T) {
	// TODO: This test intermittently fails. Un-skip me!
	// https://github.com/grafana/grafana/issues/47470
	t.Skip("intermittent test")

	require := require.New(t)

	oldRetention := retentionNotificationsAndSilences
	retentionNotificationsAndSilences = 30 * time.Millisecond
	oldMaintenance := silenceMaintenanceInterval
	silenceMaintenanceInterval = 15 * time.Millisecond
	t.Cleanup(
		func() {
			retentionNotificationsAndSilences = oldRetention
			silenceMaintenanceInterval = oldMaintenance
		})

	am := setupAMTest(t)
	now := time.Now()
	dt := func(t time.Time) strfmt.DateTime { return strfmt.DateTime(t) }

	makeSilence := func(comment string, createdBy string,
		startsAt, endsAt strfmt.DateTime, matchers models.Matchers) *apimodels.PostableSilence {
		return &apimodels.PostableSilence{
			ID: "",
			Silence: models.Silence{
				Comment:   &comment,
				CreatedBy: &createdBy,
				StartsAt:  &startsAt,
				EndsAt:    &endsAt,
				Matchers:  matchers,
			},
		}
	}

	tru := true
	testString := "testName"
	matchers := models.Matchers{&models.Matcher{Name: &testString, IsEqual: &tru, IsRegex: &tru, Value: &testString}}
	// Create silences - one in the future, one currently active, one expired but
	// retained, one expired and not retained.
	silences := []*apimodels.PostableSilence{
		// Active in future
		makeSilence("", "tests", dt(now.Add(5*time.Hour)), dt(now.Add(6*time.Hour)), matchers),
		// Active now
		makeSilence("", "tests", dt(now.Add(-5*time.Hour)), dt(now.Add(6*time.Hour)), matchers),
		// Expiring soon
		makeSilence("", "tests", dt(now.Add(-5*time.Hour)), dt(now.Add(2*time.Second)), matchers),
		// Expiring *very* soon
		makeSilence("", "tests", dt(now.Add(-5*time.Hour)), dt(now.Add(20*time.Millisecond)), matchers),
	}

	for _, s := range silences {
		_, err := am.CreateSilence(s)
		require.NoError(err)
	}

	// Let enough time pass for the maintenance window to run.
	require.Eventually(func() bool {
		// So, what silences do we have now?
		found, err := am.ListSilences(nil)
		require.NoError(err)
		return len(found) == 3
	}, 1500*time.Millisecond, 150*time.Millisecond)

	// Wait again for another silence to expire.
	require.Eventually(func() bool {
		found, err := am.ListSilences(nil)
		require.NoError(err)
		return len(found) == 2
	}, 2*time.Second, 150*time.Millisecond)
}
