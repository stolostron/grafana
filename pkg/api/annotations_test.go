package api

import (
	"context"
	"io"
	"net/http"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"github.com/stretchr/testify/require"

	"github.com/grafana/grafana/pkg/services/accesscontrol"
	"github.com/grafana/grafana/pkg/services/accesscontrol/acimpl"
	"github.com/grafana/grafana/pkg/services/annotations"
	"github.com/grafana/grafana/pkg/services/annotations/annotationstest"
	"github.com/grafana/grafana/pkg/services/dashboards"
	"github.com/grafana/grafana/pkg/services/featuremgmt"
	"github.com/grafana/grafana/pkg/services/folder"
	"github.com/grafana/grafana/pkg/services/folder/foldertest"
	"github.com/grafana/grafana/pkg/services/guardian"
	"github.com/grafana/grafana/pkg/setting"
	"github.com/grafana/grafana/pkg/web/webtest"
)

func TestAPI_Annotations(t *testing.T) {
	dashUID := "test-dash"
	folderUID := "test-folder"

	type testCase struct {
		desc         string
		path         string
		method       string
		body         string
		expectedCode int
		featureFlags []any
		permissions  []accesscontrol.Permission
	}

	tests := []testCase{
		{
			desc:         "should be able to fetch annotations with correct permission",
			path:         "/api/annotations",
			method:       http.MethodGet,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsRead, Scope: accesscontrol.ScopeAnnotationsAll}},
		},
		{
			desc:         "should not be able to fetch annotations without correct permission",
			path:         "/api/annotations",
			method:       http.MethodGet,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{},
		},
		{
			desc:         "should be able to fetch annotation by id with correct permission",
			path:         "/api/annotations/1",
			method:       http.MethodGet,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsRead, Scope: accesscontrol.ScopeAnnotationsAll}},
		},
		{
			desc:         "should not be able to fetch annotation by id without correct permission",
			path:         "/api/annotations/1",
			method:       http.MethodGet,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{},
		},
		{
			desc:         "should be able to fetch dashboard annotation by id with correct dashboard scope with annotationPermissionUpdate enabled",
			path:         "/api/annotations/2",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			method:       http.MethodGet,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsRead, Scope: dashboards.ScopeDashboardsProvider.GetResourceScopeUID(dashUID)}},
		},
		{
			desc:         "should be able to fetch dashboard annotation by id with correct folder scope with annotationPermissionUpdate enabled",
			path:         "/api/annotations/2",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			method:       http.MethodGet,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsRead, Scope: dashboards.ScopeFoldersProvider.GetResourceScopeUID(folderUID)}},
		},
		{
			desc:         "should not be able to fetch dashboard annotation by id with the old dashboard scope when annotationPermissionUpdate enabled",
			path:         "/api/annotations/2",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			method:       http.MethodGet,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsRead, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should be able to fetch annotation tags with correct permission",
			path:         "/api/annotations/tags",
			method:       http.MethodGet,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsRead}},
		},
		{
			desc:         "should not be able to fetch annotation tags without correct permission",
			path:         "/api/annotations/tags",
			method:       http.MethodGet,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{},
		},
		{
			desc:         "should be able to update dashboard annotation with correct permission",
			path:         "/api/annotations/2",
			method:       http.MethodPut,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should not be able to update dashboard annotation without correct permission",
			path:         "/api/annotations/2",
			method:       http.MethodPut,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{},
		},
		{
			desc:         "should be able to update dashboard annotation with correct dashboard scope with annotationPermissionUpdate enabled",
			path:         "/api/annotations/2",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			method:       http.MethodPut,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsWrite, Scope: dashboards.ScopeDashboardsProvider.GetResourceScopeUID(dashUID)}},
		},
		{
			desc:         "should be able to update dashboard annotation with correct folder scope with annotationPermissionUpdate enabled",
			path:         "/api/annotations/2",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			method:       http.MethodPut,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsWrite, Scope: dashboards.ScopeFoldersProvider.GetResourceScopeUID(folderUID)}},
		},
		{
			desc:         "should not be able to update dashboard annotation with the old dashboard scope when annotationPermissionUpdate enabled",
			path:         "/api/annotations/2",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			method:       http.MethodPut,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should be able to update organization annotation with correct permission",
			path:         "/api/annotations/1",
			method:       http.MethodPut,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsTypeOrganization}},
		},
		{
			desc:         "should not be able to update organization annotation without correct permission",
			path:         "/api/annotations/1",
			method:       http.MethodPut,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should be able to patch dashboard annotation with correct permission",
			path:         "/api/annotations/2",
			method:       http.MethodPatch,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should not be able to patch dashboard annotation without correct permission",
			path:         "/api/annotations/2",
			method:       http.MethodPatch,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{},
		},
		{
			desc:         "should be able to patch dashboard annotation with correct dashboard scope with annotationPermissionUpdate enabled",
			path:         "/api/annotations/2",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			method:       http.MethodPatch,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsWrite, Scope: dashboards.ScopeDashboardsProvider.GetResourceScopeUID(dashUID)}},
		},
		{
			desc:         "should be able to patch dashboard annotation with correct folder scope with annotationPermissionUpdate enabled",
			path:         "/api/annotations/2",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			method:       http.MethodPatch,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsWrite, Scope: dashboards.ScopeFoldersProvider.GetResourceScopeUID(folderUID)}},
		},
		{
			desc:         "should not be able to patch dashboard annotation with the old dashboard scope when annotationPermissionUpdate enabled",
			path:         "/api/annotations/2",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			method:       http.MethodPatch,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should be able to patch organization annotation with correct permission",
			path:         "/api/annotations/1",
			method:       http.MethodPatch,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsTypeOrganization}},
		},
		{
			desc:         "should not be able to patch organization annotation without correct permission",
			path:         "/api/annotations/1",
			method:       http.MethodPatch,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should be able to create dashboard annotation with correct permission",
			path:         "/api/annotations",
			method:       http.MethodPost,
			body:         "{\"dashboardId\": 2,\"text\": \"test\"}",
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsCreate, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should not be able to create dashboard annotation without correct permission",
			path:         "/api/annotations",
			method:       http.MethodPost,
			body:         "{\"dashboardId\": 2,\"text\": \"test\"}",
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsCreate, Scope: accesscontrol.ScopeAnnotationsTypeOrganization}},
		},
		{
			desc:         "should be able to create dashboard annotation with correct dashboard scope with annotationPermissionUpdate enabled",
			path:         "/api/annotations",
			method:       http.MethodPost,
			body:         "{\"dashboardId\": 2,\"text\": \"test\"}",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsCreate, Scope: dashboards.ScopeDashboardsProvider.GetResourceScopeUID(dashUID)}},
		},
		{
			desc:         "should be able to create dashboard annotation with correct folder scope with annotationPermissionUpdate enabled",
			path:         "/api/annotations",
			method:       http.MethodPost,
			body:         "{\"dashboardId\": 2,\"text\": \"test\"}",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsCreate, Scope: dashboards.ScopeFoldersProvider.GetResourceScopeUID(folderUID)}},
		},
		{
			desc:         "should not be able to create dashboard annotation with the old dashboard scope when annotationPermissionUpdate enabled",
			path:         "/api/annotations",
			method:       http.MethodPost,
			body:         "{\"dashboardId\": 2,\"text\": \"test\"}",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsCreate, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should be able to create organization annotation with correct permission",
			path:         "/api/annotations",
			method:       http.MethodPost,
			body:         "{\"text\": \"test\"}",
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsCreate, Scope: accesscontrol.ScopeAnnotationsTypeOrganization}},
		},
		{
			desc:         "should not be able to create organization annotation without correct permission",
			path:         "/api/annotations",
			method:       http.MethodPost,
			body:         "{\"text\": \"test\"}",
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsCreate, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should be able to delete dashboard annotation with correct permission",
			path:         "/api/annotations/2",
			method:       http.MethodDelete,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should not be able to delete dashboard annotation without correct permission",
			path:         "/api/annotations/2",
			method:       http.MethodDelete,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeOrganization}},
		},
		{
			desc:         "should be able to delete dashboard annotation with correct dashboard scope with annotationPermissionUpdate enabled",
			path:         "/api/annotations/2",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			method:       http.MethodDelete,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: dashboards.ScopeDashboardsProvider.GetResourceScopeUID(dashUID)}},
		},
		{
			desc:         "should be able to delete dashboard annotation with correct folder scope with annotationPermissionUpdate enabled",
			path:         "/api/annotations/2",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			method:       http.MethodDelete,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: dashboards.ScopeFoldersProvider.GetResourceScopeUID(folderUID)}},
		},
		{
			desc:         "should not be able to delete dashboard annotation with the old dashboard scope when annotationPermissionUpdate enabled",
			path:         "/api/annotations/2",
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			method:       http.MethodDelete,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should be able to delete organization annotation with correct permission",
			path:         "/api/annotations/1",
			method:       http.MethodDelete,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeOrganization}},
		},
		{
			desc:         "should not be able to delete organization annotation without correct permission",
			path:         "/api/annotations/1",
			method:       http.MethodDelete,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should be able to create graphite annotation with correct permission",
			path:         "/api/annotations/graphite",
			body:         "{\"what\": \"test\", \"tags\": []}",
			method:       http.MethodPost,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsCreate, Scope: accesscontrol.ScopeAnnotationsTypeOrganization}},
		},
		{
			desc:         "should not be able to create graphite annotation without correct permission",
			path:         "/api/annotations/graphite",
			method:       http.MethodPost,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsCreate, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should be able to mass delete dashboard annotations with correct permission",
			path:         "/api/annotations/mass-delete",
			body:         "{\"dashboardId\": 2, \"panelId\": 1}",
			method:       http.MethodPost,
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
		{
			desc:         "should not be able to mass delete dashboard annotations without correct permission",
			path:         "/api/annotations/mass-delete",
			body:         "{\"dashboardId\": 2, \"panelId\": 1}",
			method:       http.MethodPost,
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeOrganization}},
		},
		{
			desc:         "should be able to mass delete dashboard annotation with correct dashboard scope with annotationPermissionUpdate enabled",
			path:         "/api/annotations/mass-delete",
			body:         "{\"dashboardId\": 2, \"panelId\": 1}",
			method:       http.MethodPost,
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: dashboards.ScopeDashboardsProvider.GetResourceScopeUID(dashUID)}},
		},
		{
			desc:         "should be able to mass delete dashboard annotation with correct folder scope with annotationPermissionUpdate enabled",
			path:         "/api/annotations/mass-delete",
			body:         "{\"dashboardId\": 2, \"panelId\": 1}",
			method:       http.MethodPost,
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			expectedCode: http.StatusOK,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: dashboards.ScopeFoldersProvider.GetResourceScopeUID(folderUID)}},
		},
		{
			desc:         "should not be able to mass delete dashboard annotation with the old dashboard scope when annotationPermissionUpdate enabled",
			path:         "/api/annotations/mass-delete",
			body:         "{\"dashboardId\": 2, \"panelId\": 1}",
			method:       http.MethodPost,
			featureFlags: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			expectedCode: http.StatusForbidden,
			permissions:  []accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
		},
	}

	for _, tt := range tests {
		t.Run(tt.desc, func(t *testing.T) {
			// Don't need access to dashboards if annotationPermissionUpdate is enabled
			if len(tt.featureFlags) == 0 {
				setUpRBACGuardian(t)
			}
			server := SetupAPITestServer(t, func(hs *HTTPServer) {
				hs.Cfg = setting.NewCfg()
				repo := annotationstest.NewFakeAnnotationsRepo()
				_ = repo.Save(context.Background(), &annotations.Item{ID: 1, DashboardID: 0})
				_ = repo.Save(context.Background(), &annotations.Item{ID: 2, DashboardID: 1})
				hs.annotationsRepo = repo
				hs.Features = featuremgmt.WithFeatures(tt.featureFlags...)
				dashService := &dashboards.FakeDashboardService{}
				dashService.On("GetDashboard", mock.Anything, mock.Anything).Return(&dashboards.Dashboard{UID: dashUID, FolderUID: folderUID, FolderID: 1}, nil)
				folderService := &foldertest.FakeService{}
				folderService.ExpectedFolder = &folder.Folder{UID: folderUID, ID: 1}
				folderDB := &foldertest.FakeFolderStore{}
				folderDB.On("GetFolderByID", mock.Anything, mock.Anything, mock.Anything).Return(&folder.Folder{UID: folderUID, ID: 1}, nil)
				hs.DashboardService = dashService
				hs.folderService = folderService
				hs.AccessControl = acimpl.ProvideAccessControl(hs.Cfg)
				hs.AccessControl.RegisterScopeAttributeResolver(AnnotationTypeScopeResolver(hs.annotationsRepo, hs.Features, dashService, folderService))
				hs.AccessControl.RegisterScopeAttributeResolver(dashboards.NewDashboardIDScopeResolver(folderDB, dashService, folderService))
			})
			var body io.Reader
			if tt.body != "" {
				body = strings.NewReader(tt.body)
			}

			req := webtest.RequestWithSignedInUser(server.NewRequest(tt.method, tt.path, body), authedUserWithPermissions(1, 1, tt.permissions))
			res, err := server.SendJSON(req)
			require.NoError(t, err)
			assert.Equal(t, tt.expectedCode, res.StatusCode)
			require.NoError(t, res.Body.Close())
		})
	}
}

func TestService_AnnotationTypeScopeResolver(t *testing.T) {
	rootDashUID := "root-dashboard"
	folderDashUID := "folder-dashboard"
	folderUID := "folder"
	dashSvc := &dashboards.FakeDashboardService{}
	rootDash := &dashboards.Dashboard{ID: 1, OrgID: 1, UID: rootDashUID}
	folderDash := &dashboards.Dashboard{ID: 2, OrgID: 1, UID: folderDashUID, FolderUID: folderUID}
	dashSvc.On("GetDashboard", context.Background(), &dashboards.GetDashboardQuery{ID: rootDash.ID, OrgID: 1}).Return(rootDash, nil)
	dashSvc.On("GetDashboard", context.Background(), &dashboards.GetDashboardQuery{ID: folderDash.ID, OrgID: 1}).Return(folderDash, nil)

	rootDashboardAnnotation := annotations.Item{ID: 1, DashboardID: rootDash.ID}
	folderDashboardAnnotation := annotations.Item{ID: 3, DashboardID: folderDash.ID}
	organizationAnnotation := annotations.Item{ID: 2}

	fakeAnnoRepo := annotationstest.NewFakeAnnotationsRepo()
	_ = fakeAnnoRepo.Save(context.Background(), &rootDashboardAnnotation)
	_ = fakeAnnoRepo.Save(context.Background(), &folderDashboardAnnotation)
	_ = fakeAnnoRepo.Save(context.Background(), &organizationAnnotation)

	type testCaseResolver struct {
		desc           string
		given          string
		featureToggles []any
		want           []string
		wantErr        error
	}

	testCases := []testCaseResolver{
		{
			desc:    "correctly resolves dashboard annotations",
			given:   "annotations:id:1",
			want:    []string{accesscontrol.ScopeAnnotationsTypeDashboard},
			wantErr: nil,
		},
		{
			desc:    "correctly resolves organization annotations",
			given:   "annotations:id:2",
			want:    []string{accesscontrol.ScopeAnnotationsTypeOrganization},
			wantErr: nil,
		},
		{
			desc:    "invalid annotation ID",
			given:   "annotations:id:123abc",
			want:    []string{""},
			wantErr: accesscontrol.ErrInvalidScope,
		},
		{
			desc:    "malformed scope",
			given:   "annotations:1",
			want:    []string{""},
			wantErr: accesscontrol.ErrInvalidScope,
		},
		{
			desc:           "correctly resolves organization annotations with feature toggle",
			given:          "annotations:id:2",
			featureToggles: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			want:           []string{accesscontrol.ScopeAnnotationsTypeOrganization},
			wantErr:        nil,
		},
		{
			desc:           "correctly resolves annotations from root dashboard with feature toggle",
			given:          "annotations:id:1",
			featureToggles: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			want: []string{
				dashboards.ScopeDashboardsProvider.GetResourceScopeUID(rootDashUID),
				dashboards.ScopeFoldersProvider.GetResourceScopeUID(accesscontrol.GeneralFolderUID),
			},
			wantErr: nil,
		},
		{
			desc:           "correctly resolves annotations from dashboard in a folder with feature toggle",
			given:          "annotations:id:3",
			featureToggles: []any{featuremgmt.FlagAnnotationPermissionUpdate},
			want: []string{
				dashboards.ScopeDashboardsProvider.GetResourceScopeUID(folderDashUID),
				dashboards.ScopeFoldersProvider.GetResourceScopeUID(folderUID),
			},
			wantErr: nil,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.desc, func(t *testing.T) {
			features := featuremgmt.WithFeatures(tc.featureToggles...)
			prefix, resolver := AnnotationTypeScopeResolver(fakeAnnoRepo, features, dashSvc, &foldertest.FakeService{})
			require.Equal(t, "annotations:id:", prefix)

			resolved, err := resolver.Resolve(context.Background(), 1, tc.given)
			if tc.wantErr != nil {
				require.Error(t, err)
				require.Equal(t, tc.wantErr, err)
			} else {
				require.NoError(t, err)
				require.Len(t, resolved, len(tc.want))
				require.Equal(t, tc.want, resolved)
			}
		})
	}
}

func setUpRBACGuardian(t *testing.T) {
	origNewGuardian := guardian.New
	t.Cleanup(func() {
		guardian.New = origNewGuardian
	})

	guardian.MockDashboardGuardian(&guardian.FakeDashboardGuardian{CanEditValue: true, CanViewValue: true})
}

func TestAPI_Annotations_AccessControl(t *testing.T) {
	sc := setupHTTPServer(t, true, true)
	setInitCtxSignedInEditor(sc.initCtx)
	_, err := sc.db.CreateOrgWithMember("TestOrg", testUserID)
	require.NoError(t, err)

	dashboardAnnotation := &annotations.Item{Id: 1, DashboardId: 1}
	organizationAnnotation := &annotations.Item{Id: 2, DashboardId: 0}

	fakeAnnoRepo = NewFakeAnnotationsRepo()
	_ = fakeAnnoRepo.Save(dashboardAnnotation)
	_ = fakeAnnoRepo.Save(organizationAnnotation)

	annotations.SetRepository(fakeAnnoRepo)

	postOrganizationCmd := dtos.PostAnnotationsCmd{
		Time:    1000,
		Text:    "annotation text",
		Tags:    []string{"tag1", "tag2"},
		PanelId: 1,
	}

	postDashboardCmd := dtos.PostAnnotationsCmd{
		Time:        1000,
		Text:        "annotation text",
		Tags:        []string{"tag1", "tag2"},
		DashboardId: 1,
		PanelId:     1,
	}

	updateCmd := dtos.UpdateAnnotationsCmd{
		Time: 1000,
		Text: "annotation text",
		Tags: []string{"tag1", "tag2"},
	}

	patchCmd := dtos.PatchAnnotationsCmd{
		Time: 1000,
		Text: "annotation text",
		Tags: []string{"tag1", "tag2"},
	}

	postGraphiteCmd := dtos.PostGraphiteAnnotationsCmd{
		When: 1000,
		What: "annotation text",
		Data: "Deploy",
		Tags: []string{"tag1", "tag2"},
	}

	type args struct {
		permissions []*accesscontrol.Permission
		url         string
		body        io.Reader
		method      string
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "AccessControl getting annotations with correct permissions is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsRead, Scope: accesscontrol.ScopeAnnotationsAll}},
				url:         "/api/annotations",
				method:      http.MethodGet,
			},
			want: http.StatusOK,
		},
		{
			name: "AccessControl getting annotations without permissions is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{},
				url:         "/api/annotations",
				method:      http.MethodGet,
			},
			want: http.StatusForbidden,
		},
		{
			name: "AccessControl getting tags for annotations with correct permissions is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsRead}},
				url:         "/api/annotations/tags",
				method:      http.MethodGet,
			},
			want: http.StatusOK,
		},
		{
			name: "AccessControl getting tags for annotations without correct permissions is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsWrite}},
				url:         "/api/annotations/tags",
				method:      http.MethodGet,
			},
			want: http.StatusForbidden,
		},
		{
			name: "AccessControl update dashboard annotation with permissions is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsTypeDashboard,
				}},
				url:    "/api/annotations/1",
				method: http.MethodPut,
				body:   mockRequestBody(updateCmd),
			},
			want: http.StatusOK,
		},
		{
			name: "AccessControl update dashboard annotation without permissions is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{},
				url:         "/api/annotations/1",
				method:      http.MethodPut,
				body:        mockRequestBody(updateCmd),
			},
			want: http.StatusForbidden,
		},
		{
			name: "AccessControl update organization annotation with permissions is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsAll,
				}},
				url:    "/api/annotations/2",
				method: http.MethodPut,
				body:   mockRequestBody(updateCmd),
			},
			want: http.StatusOK,
		},
		{
			name: "AccessControl update organization annotation without permissions is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsTypeDashboard,
				}},
				url:    "/api/annotations/2",
				method: http.MethodPut,
				body:   mockRequestBody(updateCmd),
			},
			want: http.StatusForbidden,
		},
		{
			name: "AccessControl patch dashboard annotation with permissions is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsTypeDashboard,
				}},
				url:    "/api/annotations/1",
				method: http.MethodPatch,
				body:   mockRequestBody(patchCmd),
			},
			want: http.StatusOK,
		},
		{
			name: "AccessControl patch dashboard annotation without permissions is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{},
				url:         "/api/annotations/1",
				method:      http.MethodPatch,
				body:        mockRequestBody(patchCmd),
			},
			want: http.StatusForbidden,
		},
		{
			name: "AccessControl patch organization annotation with permissions is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsAll,
				}},
				url:    "/api/annotations/2",
				method: http.MethodPatch,
				body:   mockRequestBody(patchCmd),
			},
			want: http.StatusOK,
		},
		{
			name: "AccessControl patch organization annotation without permissions is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsWrite, Scope: accesscontrol.ScopeAnnotationsTypeDashboard,
				}},
				url:    "/api/annotations/2",
				method: http.MethodPatch,
				body:   mockRequestBody(patchCmd),
			},
			want: http.StatusForbidden,
		},
		{
			name: "AccessControl create dashboard annotation with permissions is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsCreate, Scope: accesscontrol.ScopeAnnotationsTypeDashboard,
				}},
				url:    "/api/annotations",
				method: http.MethodPost,
				body:   mockRequestBody(postDashboardCmd),
			},
			want: http.StatusOK,
		},
		{
			name: "AccessControl create dashboard annotation without permissions is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{},
				url:         "/api/annotations",
				method:      http.MethodPost,
				body:        mockRequestBody(postDashboardCmd),
			},
			want: http.StatusForbidden,
		},
		{
			name: "AccessControl create dashboard annotation with incorrect permissions is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsCreate, Scope: accesscontrol.ScopeAnnotationsTypeOrganization,
				}},
				url:    "/api/annotations",
				method: http.MethodPost,
				body:   mockRequestBody(postDashboardCmd),
			},
			want: http.StatusForbidden,
		},
		{
			name: "AccessControl create organization annotation with permissions is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsCreate, Scope: accesscontrol.ScopeAnnotationsAll,
				}},
				url:    "/api/annotations",
				method: http.MethodPost,
				body:   mockRequestBody(postOrganizationCmd),
			},
			want: http.StatusOK,
		},
		{
			name: "AccessControl create organization annotation without permissions is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsCreate, Scope: accesscontrol.ScopeAnnotationsTypeDashboard,
				}},
				url:    "/api/annotations",
				method: http.MethodPost,
				body:   mockRequestBody(postOrganizationCmd),
			},
			want: http.StatusForbidden,
		},
		{
			name: "AccessControl delete dashboard annotation with permissions is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeDashboard,
				}},
				url:    "/api/annotations/1",
				method: http.MethodDelete,
			},
			want: http.StatusOK,
		},
		{
			name: "AccessControl delete dashboard annotation without permissions is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{},
				url:         "/api/annotations/1",
				method:      http.MethodDelete,
			},
			want: http.StatusForbidden,
		},
		{
			name: "AccessControl delete organization annotation with permissions is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsAll,
				}},
				url:    "/api/annotations/2",
				method: http.MethodDelete,
			},
			want: http.StatusOK,
		},
		{
			name: "AccessControl delete organization annotation without permissions is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeDashboard,
				}},
				url:    "/api/annotations/2",
				method: http.MethodDelete,
			},
			want: http.StatusForbidden,
		},
		{
			name: "AccessControl create graphite annotation with permissions is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsCreate, Scope: accesscontrol.ScopeAnnotationsAll,
				}},
				url:    "/api/annotations/graphite",
				method: http.MethodPost,
				body:   mockRequestBody(postGraphiteCmd),
			},
			want: http.StatusOK,
		},
		{
			name: "AccessControl create organization annotation without permissions is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{{
					Action: accesscontrol.ActionAnnotationsCreate, Scope: accesscontrol.ScopeAnnotationsTypeDashboard,
				}},
				url:    "/api/annotations/graphite",
				method: http.MethodPost,
				body:   mockRequestBody(postGraphiteCmd),
			},
			want: http.StatusForbidden,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			setUpFGACGuardian(t)
			sc.acmock.
				RegisterAttributeScopeResolver(AnnotationTypeScopeResolver())
			setAccessControlPermissions(sc.acmock, tt.args.permissions, sc.initCtx.OrgId)

			r := callAPI(sc.server, tt.args.method, tt.args.url, tt.args.body, t)
			assert.Equalf(t, tt.want, r.Code, "Annotations API(%v)", tt.args.url)
		})
	}
}

func TestService_AnnotationTypeScopeResolver(t *testing.T) {
	type testCaseResolver struct {
		desc    string
		given   string
		want    string
		wantErr error
	}

	testCases := []testCaseResolver{
		{
			desc:    "correctly resolves dashboard annotations",
			given:   "annotations:id:1",
			want:    accesscontrol.ScopeAnnotationsTypeDashboard,
			wantErr: nil,
		},
		{
			desc:    "correctly resolves organization annotations",
			given:   "annotations:id:2",
			want:    accesscontrol.ScopeAnnotationsTypeOrganization,
			wantErr: nil,
		},
		{
			desc:    "invalid annotation ID",
			given:   "annotations:id:123abc",
			want:    "",
			wantErr: accesscontrol.ErrInvalidScope,
		},
		{
			desc:    "malformed scope",
			given:   "annotations:1",
			want:    "",
			wantErr: accesscontrol.ErrInvalidScope,
		},
	}

	dashboardAnnotation := annotations.Item{Id: 1, DashboardId: 1}
	organizationAnnotation := annotations.Item{Id: 2}

	fakeAnnoRepo = NewFakeAnnotationsRepo()
	_ = fakeAnnoRepo.Save(&dashboardAnnotation)
	_ = fakeAnnoRepo.Save(&organizationAnnotation)

	annotations.SetRepository(fakeAnnoRepo)

	prefix, resolver := AnnotationTypeScopeResolver()
	require.Equal(t, "annotations:id:", prefix)

	for _, tc := range testCases {
		t.Run(tc.desc, func(t *testing.T) {
			resolved, err := resolver(context.Background(), 1, tc.given)
			if tc.wantErr != nil {
				require.Error(t, err)
				require.Equal(t, tc.wantErr, err)
			} else {
				require.NoError(t, err)
				require.Equal(t, tc.want, resolved)
			}
		})
	}
}

func TestAPI_MassDeleteAnnotations_AccessControl(t *testing.T) {
	sc := setupHTTPServer(t, true, true)
	setInitCtxSignedInEditor(sc.initCtx)
	_, err := sc.db.CreateOrgWithMember("TestOrg", testUserID)
	require.NoError(t, err)

	type args struct {
		permissions []*accesscontrol.Permission
		url         string
		body        io.Reader
		method      string
	}

	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "Mass delete dashboard annotations without dashboardId is not allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeOrganization}},
				url:         "/api/annotations/mass-delete",
				method:      http.MethodPost,
				body: mockRequestBody(dtos.MassDeleteAnnotationsCmd{
					DashboardId: 0,
					PanelId:     1,
				}),
			},
			want: http.StatusBadRequest,
		},
		{
			name: "Mass delete dashboard annotations without panelId is not allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeOrganization}},
				url:         "/api/annotations/mass-delete",
				method:      http.MethodPost,
				body: mockRequestBody(dtos.MassDeleteAnnotationsCmd{
					DashboardId: 10,
					PanelId:     0,
				}),
			},
			want: http.StatusBadRequest,
		},
		{
			name: "AccessControl mass delete dashboard annotations with correct dashboardId and panelId as input is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
				url:         "/api/annotations/mass-delete",
				method:      http.MethodPost,
				body: mockRequestBody(dtos.MassDeleteAnnotationsCmd{
					DashboardId: 1,
					PanelId:     1,
				}),
			},
			want: http.StatusOK,
		},
		{
			name: "Mass delete organization annotations without input to delete all organization annotations is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeOrganization}},
				url:         "/api/annotations/mass-delete",
				method:      http.MethodPost,
				body: mockRequestBody(dtos.MassDeleteAnnotationsCmd{
					DashboardId: 0,
					PanelId:     0,
				}),
			},
			want: http.StatusOK,
		},
		{
			name: "Mass delete organization annotations without permissions is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
				url:         "/api/annotations/mass-delete",
				method:      http.MethodPost,
				body: mockRequestBody(dtos.MassDeleteAnnotationsCmd{
					DashboardId: 0,
					PanelId:     0,
				}),
			},
			want: http.StatusForbidden,
		},
		{
			name: "AccessControl mass delete dashboard annotations with correct annotationId as input is allowed",
			args: args{
				permissions: []*accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
				url:         "/api/annotations/mass-delete",
				method:      http.MethodPost,
				body: mockRequestBody(dtos.MassDeleteAnnotationsCmd{
					AnnotationId: 1,
				}),
			},
			want: http.StatusOK,
		},
		{
			name: "AccessControl mass delete annotation without access to dashboard annotations is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeOrganization}},
				url:         "/api/annotations/mass-delete",
				method:      http.MethodPost,
				body: mockRequestBody(dtos.MassDeleteAnnotationsCmd{
					AnnotationId: 1,
				}),
			},
			want: http.StatusForbidden,
		},
		{
			name: "AccessControl mass delete annotation without access to organization annotations is forbidden",
			args: args{
				permissions: []*accesscontrol.Permission{{Action: accesscontrol.ActionAnnotationsDelete, Scope: accesscontrol.ScopeAnnotationsTypeDashboard}},
				url:         "/api/annotations/mass-delete",
				method:      http.MethodPost,
				body: mockRequestBody(dtos.MassDeleteAnnotationsCmd{
					AnnotationId: 2,
				}),
			},
			want: http.StatusForbidden,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			setUpFGACGuardian(t)
			setAccessControlPermissions(sc.acmock, tt.args.permissions, sc.initCtx.OrgId)
			dashboardAnnotation := &annotations.Item{Id: 1, DashboardId: 1}
			organizationAnnotation := &annotations.Item{Id: 2, DashboardId: 0}

			fakeAnnoRepo = NewFakeAnnotationsRepo()
			_ = fakeAnnoRepo.Save(dashboardAnnotation)
			_ = fakeAnnoRepo.Save(organizationAnnotation)

			annotations.SetRepository(fakeAnnoRepo)

			r := callAPI(sc.server, tt.args.method, tt.args.url, tt.args.body, t)
			assert.Equalf(t, tt.want, r.Code, "Annotations API(%v)", tt.args.url)
		})
	}
}

func setUpACL() {
	viewerRole := models.ROLE_VIEWER
	editorRole := models.ROLE_EDITOR

	aclMockResp := []*models.DashboardAclInfoDTO{
		{Role: &viewerRole, Permission: models.PERMISSION_VIEW},
		{Role: &editorRole, Permission: models.PERMISSION_EDIT},
	}
	store := mockstore.NewSQLStoreMock()
	store.ExpectedDashboardAclInfoList = aclMockResp
	store.ExpectedTeamsByUser = []*models.TeamDTO{}
	guardian.InitLegacyGuardian(store)
}

func setUpFGACGuardian(t *testing.T) {
	origNewGuardian := guardian.New
	t.Cleanup(func() {
		guardian.New = origNewGuardian
	})

	guardian.MockDashboardGuardian(&guardian.FakeDashboardGuardian{CanEditValue: true})
}
