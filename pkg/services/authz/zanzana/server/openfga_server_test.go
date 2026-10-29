package server

import (
	"context"
	"net"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	openfgav1 "github.com/openfga/api/proto/openfga/v1"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc"

	"github.com/grafana/grafana/pkg/services/grpcserver"
	"github.com/grafana/grafana/pkg/setting"
)

func TestNewOpenFGAHttpServerHTTPMethods(t *testing.T) {
	const storeID = "01ARZ3NDEKTSV4RRFFQ69G5FAV"

	listener, err := net.Listen("tcp", "127.0.0.1:0")
	require.NoError(t, err)

	calledMethods := make(chan string, 1)
	grpcServer := grpc.NewServer(grpc.UnaryInterceptor(func(ctx context.Context, request interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
		calledMethods <- info.FullMethod
		switch info.FullMethod {
		case "/openfga.v1.OpenFGAService/ListStores":
			return &openfgav1.ListStoresResponse{}, nil
		case "/openfga.v1.OpenFGAService/CreateStore":
			return &openfgav1.CreateStoreResponse{Id: storeID}, nil
		case "/openfga.v1.OpenFGAService/GetStore":
			return &openfgav1.GetStoreResponse{Id: storeID}, nil
		case "/openfga.v1.OpenFGAService/ReadChanges":
			return &openfgav1.ReadChangesResponse{}, nil
		case "/openfga.v1.OpenFGAService/DeleteStore":
			return &openfgav1.DeleteStoreResponse{}, nil
		default:
			return handler(ctx, request)
		}
	}))
	openfgav1.RegisterOpenFGAServiceServer(grpcServer, &openfgav1.UnimplementedOpenFGAServiceServer{})
	serveErrors := make(chan error, 1)
	go func() {
		serveErrors <- grpcServer.Serve(listener)
	}()
	t.Cleanup(func() {
		grpcServer.Stop()
		require.NoError(t, <-serveErrors)
	})

	httpServer, err := NewOpenFGAHttpServer(setting.ZanzanaServerSettings{}, &openFGATestGRPCProvider{address: listener.Addr().String()})
	require.NoError(t, err)

	testCases := []struct {
		name                string
		method              string
		path                string
		contentType         string
		body                string
		override            string
		wantRPC             string
		allowRouteRejection bool
	}{
		{
			name:    "ordinary GET",
			method:  http.MethodGet,
			path:    "/stores",
			wantRPC: "ListStores",
		},
		{
			name:        "ordinary POST",
			method:      http.MethodPost,
			path:        "/stores",
			contentType: "application/json",
			body:        `{"name":"test-store"}`,
			wantRPC:     "CreateStore",
		},
		{
			name:    "ordinary DELETE",
			method:  http.MethodDelete,
			path:    "/stores/" + storeID,
			wantRPC: "DeleteStore",
		},
		{
			name:                "form POST cannot override DELETE",
			method:              http.MethodPost,
			path:                "/stores/" + storeID,
			contentType:         "application/x-www-form-urlencoded",
			override:            http.MethodDelete,
			wantRPC:             "GetStore",
			allowRouteRejection: true,
		},
		{
			name:        "form POST falls back to GET",
			method:      http.MethodPost,
			path:        "/stores/" + storeID + "/changes",
			contentType: "application/x-www-form-urlencoded",
			wantRPC:     "ReadChanges",
		},
		{
			name:        "form POST keeps its matching POST route",
			method:      http.MethodPost,
			path:        "/stores",
			contentType: "application/x-www-form-urlencoded",
			body:        `{"name":"test-store"}`,
			override:    http.MethodGet,
			wantRPC:     "CreateStore",
		},
	}
	for _, testCase := range testCases {
		t.Run(testCase.name, func(t *testing.T) {
			ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
			defer cancel()
			request := httptest.NewRequest(testCase.method, testCase.path, strings.NewReader(testCase.body)).WithContext(ctx)
			if testCase.contentType != "" {
				request.Header.Set("Content-Type", testCase.contentType)
			}
			if testCase.override != "" {
				request.Header.Set("X-HTTP-Method-Override", testCase.override)
			}
			recorder := httptest.NewRecorder()
			httpServer.Handler.ServeHTTP(recorder, request)
			var calledMethod string
			select {
			case calledMethod = <-calledMethods:
			default:
			}
			assert.Equal(t, testCase.method, request.Method)
			if testCase.override == http.MethodDelete {
				assert.NotEqual(t, "/openfga.v1.OpenFGAService/DeleteStore", calledMethod)
			}
			if testCase.allowRouteRejection && recorder.Code == http.StatusNotFound {
				require.Empty(t, calledMethod)
				require.JSONEq(t, `{"code":"unimplemented","message":"Method Not Allowed"}`, recorder.Body.String())
				return
			}
			require.Equal(t, http.StatusOK, recorder.Code, recorder.Body.String())
			require.Equal(t, "/openfga.v1.OpenFGAService/"+testCase.wantRPC, calledMethod)
		})
	}
}

type openFGATestGRPCProvider struct {
	grpcserver.Provider
	address string
}

func (provider *openFGATestGRPCProvider) GetAddress() string {
	return provider.address
}
