package snapshot

import (
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"github.com/stretchr/testify/require"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apiserver/pkg/endpoints/request"

	dashV0 "github.com/grafana/grafana/apps/dashboard/pkg/apis/dashboard/v0alpha1"
	grafanarequest "github.com/grafana/grafana/pkg/services/apiserver/endpoints/request"
	"github.com/grafana/grafana/pkg/services/dashboardsnapshots"
)

// newStoreForTest creates a SnapshotLegacyStore with a mock service for testing.
func newStoreForTest(t *testing.T, svc dashboardsnapshots.Service) *SnapshotLegacyStore {
	t.Helper()
	return &SnapshotLegacyStore{
		ResourceInfo: dashV0.SnapshotResourceInfo,
		Service:      svc,
		Namespacer:   grafanarequest.GetNamespaceMapper(nil),
	}
}

// ctxWithNamespace builds a context with the given namespace set, simulating
// an authenticated request scoped to that org.
func ctxWithNamespace(ns string) context.Context {
	return request.WithNamespace(context.Background(), ns)
}

func TestSnapshotLegacyStore_Delete_CrossOrgBlocked(t *testing.T) {
	svc := dashboardsnapshots.NewMockService(t)
	svc.On("GetDashboardSnapshot", mock.Anything, mock.MatchedBy(func(q *dashboardsnapshots.GetDashboardSnapshotQuery) bool {
		return q.Key == "snap-key-1"
	})).Return(&dashboardsnapshots.DashboardSnapshot{
		Key:       "snap-key-1",
		DeleteKey: "del-key-1",
		OrgID:     1, // snapshot belongs to org 1
	}, nil)

	store := newStoreForTest(t, svc)

	t.Run("same org succeeds", func(t *testing.T) {
		svc.On("DeleteDashboardSnapshot", mock.Anything, mock.AnythingOfType("*dashboardsnapshots.DeleteDashboardSnapshotCommand")).Return(nil).Once()
		ctx := ctxWithNamespace("default") // org 1
		_, _, err := store.Delete(ctx, "snap-key-1", nil, &metav1.DeleteOptions{})
		require.NoError(t, err)
	})

	t.Run("different org returns NotFound", func(t *testing.T) {
		ctx := ctxWithNamespace("org-2") // org 2 — should be blocked
		_, _, err := store.Delete(ctx, "snap-key-1", nil, &metav1.DeleteOptions{})
		require.Error(t, err)
		assert.Contains(t, err.Error(), "not found")
	})
}

func TestSnapshotLegacyStore_Get_CrossOrgBlocked(t *testing.T) {
	svc := dashboardsnapshots.NewMockService(t)
	svc.On("GetDashboardSnapshot", mock.Anything, mock.MatchedBy(func(q *dashboardsnapshots.GetDashboardSnapshotQuery) bool {
		return q.Key == "snap-key-2"
	})).Return(&dashboardsnapshots.DashboardSnapshot{
		Key:       "snap-key-2",
		DeleteKey: "del-key-2",
		OrgID:     1, // snapshot belongs to org 1
		Name:      "test snapshot",
	}, nil)

	store := newStoreForTest(t, svc)

	t.Run("same org succeeds", func(t *testing.T) {
		ctx := ctxWithNamespace("default") // org 1
		obj, err := store.Get(ctx, "snap-key-2", &metav1.GetOptions{})
		require.NoError(t, err)
		require.NotNil(t, obj)
	})

	t.Run("different org returns NotFound", func(t *testing.T) {
		ctx := ctxWithNamespace("org-2") // org 2 — should be blocked
		obj, err := store.Get(ctx, "snap-key-2", &metav1.GetOptions{})
		require.Error(t, err)
		assert.Nil(t, obj)
		assert.Contains(t, err.Error(), "not found")
	})

	t.Run("different org 3 returns NotFound", func(t *testing.T) {
		ctx := ctxWithNamespace("org-3") // org 3 — should be blocked
		obj, err := store.Get(ctx, "snap-key-2", &metav1.GetOptions{})
		require.Error(t, err)
		assert.Nil(t, obj)
		assert.Contains(t, err.Error(), "not found")
	})
}

func TestSnapshotLegacyStore_Delete_SameOrgAllowed(t *testing.T) {
	svc := dashboardsnapshots.NewMockService(t)

	// Snapshot belonging to org 2
	svc.On("GetDashboardSnapshot", mock.Anything, mock.MatchedBy(func(q *dashboardsnapshots.GetDashboardSnapshotQuery) bool {
		return q.Key == "snap-key-org2"
	})).Return(&dashboardsnapshots.DashboardSnapshot{
		Key:       "snap-key-org2",
		DeleteKey: "del-key-org2",
		OrgID:     2,
	}, nil)
	svc.On("DeleteDashboardSnapshot", mock.Anything, mock.AnythingOfType("*dashboardsnapshots.DeleteDashboardSnapshotCommand")).Return(nil)

	store := newStoreForTest(t, svc)

	ctx := ctxWithNamespace("org-2") // caller is org 2 — same as snapshot
	_, _, err := store.Delete(ctx, "snap-key-org2", nil, &metav1.DeleteOptions{})
	require.NoError(t, err)
}

func TestSnapshotLegacyStore_Get_SameOrgAllowed(t *testing.T) {
	svc := dashboardsnapshots.NewMockService(t)

	// Snapshot belonging to org 2
	svc.On("GetDashboardSnapshot", mock.Anything, mock.MatchedBy(func(q *dashboardsnapshots.GetDashboardSnapshotQuery) bool {
		return q.Key == "snap-key-org2"
	})).Return(&dashboardsnapshots.DashboardSnapshot{
		Key:       "snap-key-org2",
		DeleteKey: "del-key-org2",
		OrgID:     2,
		Name:      "org2 snapshot",
	}, nil)

	store := newStoreForTest(t, svc)

	ctx := ctxWithNamespace("org-2") // caller is org 2 — same as snapshot
	obj, err := store.Get(ctx, "snap-key-org2", &metav1.GetOptions{})
	require.NoError(t, err)
	require.NotNil(t, obj)
}
