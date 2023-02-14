package manager

import (
	"context"
	"net/http"
	"sync"
	"testing"
	"time"

	"github.com/grafana/grafana-azure-sdk-go/azsettings"
	"github.com/grafana/grafana-plugin-sdk-go/backend"

	"github.com/grafana/grafana/pkg/infra/log"
	"github.com/grafana/grafana/pkg/plugins"
	"github.com/grafana/grafana/pkg/plugins/backendplugin"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

const (
	testPluginID = "test-plugin"
)

func TestPluginManager_Init(t *testing.T) {
	t.Run("Plugin sources are loaded in order", func(t *testing.T) {
		loader := &fakeLoader{}
		pm := New(&plugins.Cfg{}, []PluginSource{
			{Class: plugins.Bundled, Paths: []string{"path1"}},
			{Class: plugins.Core, Paths: []string{"path2"}},
			{Class: plugins.External, Paths: []string{"path3"}},
		}, loader)

		err := pm.Init()
		require.NoError(t, err)
<<<<<<< HEAD

		assert.Empty(t, pm.scanningErrors)
		verifyCorePluginCatalogue(t, pm)

		assert.NotEmpty(t, pm.apps)
		assert.Equal(t, "app/plugins/datasource/graphite/module", pm.dataSources["graphite"].Module)
		assert.Equal(t, "public/plugins/test-app/img/logo_large.png", pm.apps["test-app"].Info.Logos.Large)
		assert.Equal(t, "public/plugins/test-app/img/screenshot2.png", pm.apps["test-app"].Info.Screenshots[1].Path)
	})

	t.Run("With external back-end plugin lacking signature (production)", func(t *testing.T) {
		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/unsigned-datasource"
			pm.Cfg.Env = setting.Prod
		})
		err := pm.Init()
		require.NoError(t, err)
		const pluginID = "test"

		assert.Equal(t, []error{fmt.Errorf(`plugin '%s' is unsigned`, pluginID)}, pm.scanningErrors)
		assert.Nil(t, pm.GetDataSource(pluginID))
		assert.Nil(t, pm.GetPlugin(pluginID))
	})

	t.Run("With external back-end plugin lacking signature (development)", func(t *testing.T) {
		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/unsigned-datasource"
			pm.Cfg.Env = setting.Dev
		})
		err := pm.Init()
		require.NoError(t, err)
		const pluginID = "test"

		assert.Empty(t, pm.scanningErrors)
		assert.NotNil(t, pm.GetDataSource(pluginID))

		plugin := pm.GetPlugin(pluginID)
		assert.NotNil(t, plugin)
		assert.Equal(t, plugins.PluginSignatureUnsigned, plugin.Signature)
	})

	t.Run("With external panel plugin lacking signature (production)", func(t *testing.T) {
		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/unsigned-panel"
			pm.Cfg.Env = setting.Prod
		})
		err := pm.Init()
		require.NoError(t, err)
		const pluginID = "test-panel"

		assert.Equal(t, []error{fmt.Errorf(`plugin '%s' is unsigned`, pluginID)}, pm.scanningErrors)
		assert.Nil(t, pm.panels[pluginID])
		assert.Nil(t, pm.GetPlugin(pluginID))
	})

	t.Run("With external panel plugin lacking signature (development)", func(t *testing.T) {
		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/unsigned-panel"
			pm.Cfg.Env = setting.Dev
		})
		err := pm.Init()
		require.NoError(t, err)
		pluginID := "test-panel"

		assert.Empty(t, pm.scanningErrors)
		assert.NotNil(t, pm.panels[pluginID])

		plugin := pm.GetPlugin(pluginID)
		assert.NotNil(t, plugin)
		assert.Equal(t, plugins.PluginSignatureUnsigned, plugin.Signature)
	})

	t.Run("With external unsigned back-end plugin and configuration disabling signature check of this plugin", func(t *testing.T) {
		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/unsigned-datasource"
			pm.Cfg.PluginsAllowUnsigned = []string{"test"}
		})
		err := pm.Init()
		require.NoError(t, err)

		assert.Empty(t, pm.scanningErrors)
	})

	t.Run("With external back-end plugin with invalid v1 signature", func(t *testing.T) {
		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/invalid-v1-signature"
		})
		err := pm.Init()
		require.NoError(t, err)

		const pluginID = "test"
		assert.Equal(t, []error{fmt.Errorf(`plugin '%s' has an invalid signature`, pluginID)}, pm.scanningErrors)
		assert.Nil(t, pm.GetDataSource(pluginID))
		assert.Nil(t, pm.GetPlugin(pluginID))
	})

	t.Run("With external back-end plugin lacking files listed in manifest", func(t *testing.T) {
		fm := &fakeBackendPluginManager{}
		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/lacking-files"
			pm.BackendPluginManager = fm
		})
		err := pm.Init()
		require.NoError(t, err)

		assert.Equal(t, []error{fmt.Errorf(`plugin 'test' has a modified signature`)}, pm.scanningErrors)
	})

	t.Run("Transform plugins should be ignored when expressions feature is off", func(t *testing.T) {
		fm := fakeBackendPluginManager{}
		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/behind-feature-flag"
			pm.BackendPluginManager = &fm
		})
		err := pm.Init()
		require.NoError(t, err)

		assert.Empty(t, pm.scanningErrors)
		assert.Empty(t, fm.registeredPlugins)
	})

	t.Run("With nested plugin duplicating parent", func(t *testing.T) {
		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/duplicate-plugins"
		})
		err := pm.Init()
		require.NoError(t, err)

		assert.Len(t, pm.scanningErrors, 1)
		assert.True(t, errors.Is(pm.scanningErrors[0], plugins.DuplicatePluginError{}))
	})

	t.Run("With external back-end plugin with valid v2 signature", func(t *testing.T) {
		const pluginsDir = "testdata/valid-v2-signature"
		const pluginFolder = pluginsDir + "/plugin"
		pm := createManager(t, func(manager *PluginManager) {
			manager.Cfg.PluginsPath = pluginsDir
		})
		err := pm.Init()
		require.NoError(t, err)
		require.Empty(t, pm.scanningErrors)

		// capture manager plugin state
		datasources := pm.dataSources
		panels := pm.panels
		apps := pm.apps

		verifyPluginManagerState := func() {
			assert.Empty(t, pm.scanningErrors)
			verifyCorePluginCatalogue(t, pm)

			// verify plugin has been loaded successfully
			const pluginID = "test"

			if diff := cmp.Diff(&plugins.PluginBase{
				Type:  "datasource",
				Name:  "Test",
				State: "alpha",
				Id:    pluginID,
				Info: plugins.PluginInfo{
					Author: plugins.PluginInfoLink{
						Name: "Will Browne",
						Url:  "https://willbrowne.com",
					},
					Description: "Test",
					Logos: plugins.PluginLogos{
						Small: "public/img/icn-datasource.svg",
						Large: "public/img/icn-datasource.svg",
					},
					Build:   plugins.PluginBuildInfo{},
					Version: "1.0.0",
				},
				PluginDir:     pluginFolder,
				Backend:       false,
				IsCorePlugin:  false,
				Signature:     plugins.PluginSignatureValid,
				SignatureType: plugins.GrafanaType,
				SignatureOrg:  "Grafana Labs",
				SignedFiles:   plugins.PluginFiles{"plugin.json": {}},
				Dependencies: plugins.PluginDependencies{
					GrafanaVersion: "*",
					Plugins:        []plugins.PluginDependencyItem{},
				},
				Module:  "plugins/test/module",
				BaseUrl: "public/plugins/test",
			}, pm.plugins[pluginID]); diff != "" {
				t.Errorf("result mismatch (-want +got) %s\n", diff)
			}

			ds := pm.GetDataSource(pluginID)
			assert.NotNil(t, ds)
			assert.Equal(t, pluginID, ds.Id)
			assert.Equal(t, pm.plugins[pluginID], &ds.FrontendPluginBase.PluginBase)

			assert.Len(t, pm.StaticRoutes(), 1)
			assert.Equal(t, pluginID, pm.StaticRoutes()[0].PluginId)
			assert.Equal(t, pluginFolder, pm.StaticRoutes()[0].Directory)
		}

		verifyPluginManagerState()

		t.Run("Re-initializing external plugins is idempotent", func(t *testing.T) {
			err = pm.initExternalPlugins()
			require.NoError(t, err)

			// verify plugin state remains the same as previous
			verifyPluginManagerState()

			assert.Empty(t, pm.scanningErrors)
			assert.True(t, reflect.DeepEqual(datasources, pm.dataSources))
			assert.True(t, reflect.DeepEqual(panels, pm.panels))
			assert.True(t, reflect.DeepEqual(apps, pm.apps))
		})
	})

	t.Run("With back-end plugin with invalid v2 private signature (mismatched root URL)", func(t *testing.T) {
		origAppURL := setting.AppUrl
		t.Cleanup(func() {
			setting.AppUrl = origAppURL
		})
		setting.AppUrl = "http://localhost:1234"

		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/valid-v2-pvt-signature"
		})
		err := pm.Init()
		require.NoError(t, err)

		assert.Equal(t, []error{fmt.Errorf(`plugin 'test' has an invalid signature`)}, pm.scanningErrors)
		assert.Nil(t, pm.plugins[("test")])
	})

	t.Run("With back-end plugin with valid v2 private signature (plugin root URL ignores trailing slash)", func(t *testing.T) {
		origAppURL := setting.AppUrl
		origAppSubURL := setting.AppSubUrl
		t.Cleanup(func() {
			setting.AppUrl = origAppURL
			setting.AppSubUrl = origAppSubURL
		})
		setting.AppUrl = defaultAppURL
		setting.AppSubUrl = "/grafana"

		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/valid-v2-pvt-signature-root-url-uri"
		})
		err := pm.Init()
		require.NoError(t, err)
		require.Empty(t, pm.scanningErrors)

		const pluginID = "test"
		assert.NotNil(t, pm.plugins[pluginID])
		assert.Equal(t, "datasource", pm.plugins[pluginID].Type)
		assert.Equal(t, "Test", pm.plugins[pluginID].Name)
		assert.Equal(t, pluginID, pm.plugins[pluginID].Id)
		assert.Equal(t, "1.0.0", pm.plugins[pluginID].Info.Version)
		assert.Equal(t, plugins.PluginSignatureValid, pm.plugins[pluginID].Signature)
		assert.Equal(t, plugins.PrivateType, pm.plugins[pluginID].SignatureType)
		assert.Equal(t, "Will Browne", pm.plugins[pluginID].SignatureOrg)
		assert.False(t, pm.plugins[pluginID].IsCorePlugin)
	})

	t.Run("With back-end plugin with valid v2 private signature", func(t *testing.T) {
		origAppURL := setting.AppUrl
		t.Cleanup(func() {
			setting.AppUrl = origAppURL
		})
		setting.AppUrl = defaultAppURL

		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/valid-v2-pvt-signature"
		})
		err := pm.Init()
		require.NoError(t, err)
		require.Empty(t, pm.scanningErrors)

		const pluginID = "test"
		assert.NotNil(t, pm.plugins[pluginID])
		assert.Equal(t, "datasource", pm.plugins[pluginID].Type)
		assert.Equal(t, "Test", pm.plugins[pluginID].Name)
		assert.Equal(t, pluginID, pm.plugins[pluginID].Id)
		assert.Equal(t, "1.0.0", pm.plugins[pluginID].Info.Version)
		assert.Equal(t, plugins.PluginSignatureValid, pm.plugins[pluginID].Signature)
		assert.Equal(t, plugins.PrivateType, pm.plugins[pluginID].SignatureType)
		assert.Equal(t, "Will Browne", pm.plugins[pluginID].SignatureOrg)
		assert.False(t, pm.plugins[pluginID].IsCorePlugin)
	})

	t.Run("With back-end plugin with modified v2 signature (missing file from plugin dir)", func(t *testing.T) {
		origAppURL := setting.AppUrl
		t.Cleanup(func() {
			setting.AppUrl = origAppURL
		})
		setting.AppUrl = defaultAppURL

		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/invalid-v2-signature"
		})
		err := pm.Init()
		require.NoError(t, err)
		assert.Equal(t, []error{fmt.Errorf(`plugin 'test' has a modified signature`)}, pm.scanningErrors)
		assert.Nil(t, pm.plugins[("test")])
	})

	t.Run("With back-end plugin with modified v2 signature (unaccounted file in plugin dir)", func(t *testing.T) {
		origAppURL := setting.AppUrl
		t.Cleanup(func() {
			setting.AppUrl = origAppURL
		})
		setting.AppUrl = defaultAppURL

		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/invalid-v2-signature-2"
		})
		err := pm.Init()
		require.NoError(t, err)
		assert.Equal(t, []error{fmt.Errorf(`plugin 'test' has a modified signature`)}, pm.scanningErrors)
		assert.Nil(t, pm.plugins[("test")])
	})

	t.Run("With plugin that contains symlink file + directory", func(t *testing.T) {
		origAppURL := setting.AppUrl
		t.Cleanup(func() {
			setting.AppUrl = origAppURL
		})
		setting.AppUrl = defaultAppURL

		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/includes-symlinks"
		})
		err := pm.Init()
		require.NoError(t, err)
		require.Empty(t, pm.scanningErrors)

		const pluginID = "test-app"
		p := pm.GetPlugin(pluginID)

		assert.NotNil(t, p)
		assert.NotNil(t, pm.GetApp(pluginID))
		assert.Equal(t, pluginID, p.Id)
		assert.Equal(t, "app", p.Type)
		assert.Equal(t, "Test App", p.Name)
		assert.Equal(t, "1.0.0", p.Info.Version)
		assert.Equal(t, plugins.PluginSignatureValid, p.Signature)
		assert.Equal(t, plugins.GrafanaType, p.SignatureType)
		assert.Equal(t, "Grafana Labs", p.SignatureOrg)
		assert.False(t, p.IsCorePlugin)
	})

	t.Run("With back-end plugin that is symlinked to plugins dir", func(t *testing.T) {
		origAppURL := setting.AppUrl
		t.Cleanup(func() {
			setting.AppUrl = origAppURL
		})
		setting.AppUrl = defaultAppURL

		pm := createManager(t, func(pm *PluginManager) {
			pm.Cfg.PluginsPath = "testdata/symbolic-plugin-dirs"
		})
		err := pm.Init()
		require.NoError(t, err)
		// This plugin should be properly registered, even though it is symlinked to plugins dir
		require.Empty(t, pm.scanningErrors)
		const pluginID = "test-app"
		assert.NotNil(t, pm.plugins[pluginID])
=======
		require.Equal(t, []string{"path1", "path2", "path3"}, loader.loadedPaths)
>>>>>>> tags/v8.5.20
	})
}

func TestPluginManager_loadPlugins(t *testing.T) {
	t.Run("Managed backend plugin", func(t *testing.T) {
		p, pc := createPlugin(t, testPluginID, "", plugins.External, true, true)

		loader := &fakeLoader{
			mockedLoadedPlugins: []*plugins.Plugin{p},
		}

		pm := createManager(t, func(pm *PluginManager) {
			pm.pluginLoader = loader
		})
		err := pm.loadPlugins(context.Background(), plugins.External, "test/path")
		require.NoError(t, err)

		assert.Equal(t, 1, pc.startCount)
		assert.Equal(t, 0, pc.stopCount)
		assert.False(t, pc.exited)
		assert.False(t, pc.decommissioned)

		testPlugin, exists := pm.Plugin(context.Background(), testPluginID)
		assert.True(t, exists)
		assert.Equal(t, p.ToDTO(), testPlugin)
		assert.Len(t, pm.Plugins(context.Background()), 1)

		verifyNoPluginErrors(t, pm)
	})

	t.Run("Unmanaged backend plugin", func(t *testing.T) {
		p, pc := createPlugin(t, testPluginID, "", plugins.External, false, true)

		loader := &fakeLoader{
			mockedLoadedPlugins: []*plugins.Plugin{p},
		}

		pm := createManager(t, func(pm *PluginManager) {
			pm.pluginLoader = loader
		})
		err := pm.loadPlugins(context.Background(), plugins.External, "test/path")
		require.NoError(t, err)

		assert.Equal(t, 0, pc.startCount)
		assert.Equal(t, 0, pc.stopCount)
		assert.False(t, pc.exited)
		assert.False(t, pc.decommissioned)

		testPlugin, exists := pm.Plugin(context.Background(), testPluginID)
		assert.True(t, exists)
		assert.Equal(t, p.ToDTO(), testPlugin)
		assert.Len(t, pm.Plugins(context.Background()), 1)

		verifyNoPluginErrors(t, pm)
	})

	t.Run("Managed non-backend plugin", func(t *testing.T) {
		p, pc := createPlugin(t, testPluginID, "", plugins.External, false, true)

		loader := &fakeLoader{
			mockedLoadedPlugins: []*plugins.Plugin{p},
		}

		pm := createManager(t, func(pm *PluginManager) {
			pm.pluginLoader = loader
		})
		err := pm.loadPlugins(context.Background(), plugins.External, "test/path")
		require.NoError(t, err)

		assert.Equal(t, 0, pc.startCount)
		assert.Equal(t, 0, pc.stopCount)
		assert.False(t, pc.exited)
		assert.False(t, pc.decommissioned)

		testPlugin, exists := pm.Plugin(context.Background(), testPluginID)
		assert.True(t, exists)
		assert.Equal(t, p.ToDTO(), testPlugin)
		assert.Len(t, pm.Plugins(context.Background()), 1)

		verifyNoPluginErrors(t, pm)
	})

	t.Run("Unmanaged non-backend plugin", func(t *testing.T) {
		p, pc := createPlugin(t, testPluginID, "", plugins.External, false, false)

		loader := &fakeLoader{
			mockedLoadedPlugins: []*plugins.Plugin{p},
		}

		pm := createManager(t, func(pm *PluginManager) {
			pm.pluginLoader = loader
		})
		err := pm.loadPlugins(context.Background(), plugins.External, "test/path")
		require.NoError(t, err)

		assert.Equal(t, 0, pc.startCount)
		assert.Equal(t, 0, pc.stopCount)
		assert.False(t, pc.exited)
		assert.False(t, pc.decommissioned)

		testPlugin, exists := pm.Plugin(context.Background(), testPluginID)
		assert.True(t, exists)
		assert.Equal(t, p.ToDTO(), testPlugin)
		assert.Len(t, pm.Plugins(context.Background()), 1)

		verifyNoPluginErrors(t, pm)
	})
}

func TestPluginManager_Installer(t *testing.T) {
	t.Run("Install", func(t *testing.T) {
		p, pc := createPlugin(t, testPluginID, "1.0.0", plugins.External, true, true)

<<<<<<< HEAD
		err := pm.Init()
		require.NoError(t, err)

		// mock installer
		installer := &fakePluginInstaller{}
		pm.pluginInstaller = installer

		// Set plugin location (we do this after manager Init() so that
		// it doesn't install the plugin automatically)
		pm.Cfg.PluginsPath = "testdata/installer"

		pluginID := "test"
		pluginFolder := pm.Cfg.PluginsPath + "/plugin"

		err = pm.Install(context.Background(), pluginID, "1.0.0")
		require.NoError(t, err)

		assert.Equal(t, 1, installer.installCount)
		assert.Equal(t, 0, installer.uninstallCount)

		// verify plugin manager has loaded core plugins successfully
		assert.Empty(t, pm.scanningErrors)
		verifyCorePluginCatalogue(t, pm)

		// verify plugin has been loaded successfully
		assert.NotNil(t, pm.plugins[pluginID])
		if diff := cmp.Diff(&plugins.PluginBase{
			Type:  "datasource",
			Name:  "Test",
			State: "alpha",
			Id:    pluginID,
			Info: plugins.PluginInfo{
				Author: plugins.PluginInfoLink{
					Name: "Will Browne",
					Url:  "https://willbrowne.com",
				},
				Description: "Test",
				Logos: plugins.PluginLogos{
					Small: "public/img/icn-datasource.svg",
					Large: "public/img/icn-datasource.svg",
				},
				Build:   plugins.PluginBuildInfo{},
				Version: "1.0.0",
			},
			PluginDir:     pluginFolder,
			Backend:       false,
			IsCorePlugin:  false,
			Signature:     plugins.PluginSignatureValid,
			SignatureType: plugins.GrafanaType,
			SignatureOrg:  "Grafana Labs",
			SignedFiles:   plugins.PluginFiles{"plugin.json": {}},
			Dependencies: plugins.PluginDependencies{
				GrafanaVersion: "*",
				Plugins:        []plugins.PluginDependencyItem{},
			},
			Module:  "plugins/test/module",
			BaseUrl: "public/plugins/test",
		}, pm.plugins[pluginID]); diff != "" {
			t.Errorf("result mismatch (-want +got) %s\n", diff)
=======
		l := &fakeLoader{
			mockedLoadedPlugins: []*plugins.Plugin{p},
>>>>>>> tags/v8.5.20
		}

		i := &fakePluginInstaller{}
		pm := createManager(t, func(pm *PluginManager) {
			pm.pluginInstaller = i
			pm.pluginLoader = l
		})

		err := pm.Add(context.Background(), testPluginID, "1.0.0")
		require.NoError(t, err)

		assert.Equal(t, 1, i.installCount)
		assert.Equal(t, 0, i.uninstallCount)

		verifyNoPluginErrors(t, pm)

		assert.Len(t, pm.Routes(), 1)
		assert.Equal(t, p.ID, pm.Routes()[0].PluginID)
		assert.Equal(t, p.PluginDir, pm.Routes()[0].Directory)

		assert.Equal(t, 1, pc.startCount)
		assert.Equal(t, 0, pc.stopCount)
		assert.False(t, pc.exited)
		assert.False(t, pc.decommissioned)

		testPlugin, exists := pm.Plugin(context.Background(), testPluginID)
		assert.True(t, exists)
		assert.Equal(t, p.ToDTO(), testPlugin)
		assert.Len(t, pm.Plugins(context.Background()), 1)

		t.Run("Won't install if already installed", func(t *testing.T) {
			err := pm.Add(context.Background(), testPluginID, "1.0.0")
			assert.Equal(t, plugins.DuplicateError{
				PluginID:          p.ID,
				ExistingPluginDir: p.PluginDir,
			}, err)
		})

		t.Run("Update", func(t *testing.T) {
			p, pc := createPlugin(t, testPluginID, "1.2.0", plugins.External, true, true)

			l := &fakeLoader{
				mockedLoadedPlugins: []*plugins.Plugin{p},
			}
			pm.pluginLoader = l

			err = pm.Add(context.Background(), testPluginID, "1.2.0")
			assert.NoError(t, err)

			assert.Equal(t, 2, i.installCount)
			assert.Equal(t, 1, i.uninstallCount)

			assert.Equal(t, 1, pc.startCount)
			assert.Equal(t, 0, pc.stopCount)
			assert.False(t, pc.exited)
			assert.False(t, pc.decommissioned)

			testPlugin, exists := pm.Plugin(context.Background(), testPluginID)
			assert.True(t, exists)
			assert.Equal(t, p.ToDTO(), testPlugin)
			assert.Len(t, pm.Plugins(context.Background()), 1)
		})

		t.Run("Uninstall", func(t *testing.T) {
			err := pm.Remove(context.Background(), p.ID)
			require.NoError(t, err)

			assert.Equal(t, 2, i.installCount)
			assert.Equal(t, 2, i.uninstallCount)

			p, exists := pm.Plugin(context.Background(), p.ID)
			assert.False(t, exists)
			assert.Equal(t, plugins.PluginDTO{}, p)
			assert.Len(t, pm.Routes(), 0)

			t.Run("Won't uninstall if not installed", func(t *testing.T) {
				err := pm.Remove(context.Background(), p.ID)
				require.Equal(t, plugins.ErrPluginNotInstalled, err)
			})
		})
	})

	t.Run("Can't update core plugin", func(t *testing.T) {
		p, pc := createPlugin(t, testPluginID, "", plugins.Core, true, true)

		loader := &fakeLoader{
			mockedLoadedPlugins: []*plugins.Plugin{p},
		}

		pm := createManager(t, func(pm *PluginManager) {
			pm.pluginLoader = loader
		})
		err := pm.loadPlugins(context.Background(), plugins.Core, "test/path")
		require.NoError(t, err)

		assert.Equal(t, 0, pc.startCount)
		assert.Equal(t, 0, pc.stopCount)
		assert.False(t, pc.exited)
		assert.False(t, pc.decommissioned)

		testPlugin, exists := pm.Plugin(context.Background(), testPluginID)
		assert.True(t, exists)
		assert.Equal(t, p.ToDTO(), testPlugin)
		assert.Len(t, pm.Plugins(context.Background()), 1)

		verifyNoPluginErrors(t, pm)

		err = pm.Add(context.Background(), testPluginID, "")
		assert.Equal(t, plugins.ErrInstallCorePlugin, err)

		t.Run("Can't uninstall core plugin", func(t *testing.T) {
			err := pm.Remove(context.Background(), p.ID)
			require.Equal(t, plugins.ErrUninstallCorePlugin, err)
		})
	})

	t.Run("Can't update bundled plugin", func(t *testing.T) {
		p, pc := createPlugin(t, testPluginID, "", plugins.Bundled, true, true)

		loader := &fakeLoader{
			mockedLoadedPlugins: []*plugins.Plugin{p},
		}

		pm := createManager(t, func(pm *PluginManager) {
			pm.pluginLoader = loader
		})
		err := pm.loadPlugins(context.Background(), plugins.Bundled, "test/path")
		require.NoError(t, err)

		assert.Equal(t, 1, pc.startCount)
		assert.Equal(t, 0, pc.stopCount)
		assert.False(t, pc.exited)
		assert.False(t, pc.decommissioned)

		testPlugin, exists := pm.Plugin(context.Background(), testPluginID)
		assert.True(t, exists)
		assert.Equal(t, p.ToDTO(), testPlugin)
		assert.Len(t, pm.Plugins(context.Background()), 1)

		verifyNoPluginErrors(t, pm)

		err = pm.Add(context.Background(), testPluginID, "")
		assert.Equal(t, plugins.ErrInstallCorePlugin, err)

		t.Run("Can't uninstall bundled plugin", func(t *testing.T) {
			err := pm.Remove(context.Background(), p.ID)
			require.Equal(t, plugins.ErrUninstallCorePlugin, err)
		})
	})
}

func TestPluginManager_registeredPlugins(t *testing.T) {
	t.Run("Decommissioned plugins are included in registeredPlugins", func(t *testing.T) {
		pm := New(&plugins.Cfg{}, []PluginSource{}, &fakeLoader{})

		decommissionedPlugin, _ := createPlugin(t, testPluginID, "", plugins.Core, false, true,
			func(plugin *plugins.Plugin) {
				err := plugin.Decommission()
				require.NoError(t, err)
			},
		)
		require.True(t, decommissionedPlugin.IsDecommissioned())

		pm.store = map[string]*plugins.Plugin{
			testPluginID: decommissionedPlugin,
			"test-app":   {},
		}

		rps := pm.registeredPlugins()
		require.Equal(t, 2, len(rps))
		require.NotNil(t, rps[testPluginID])
		require.NotNil(t, rps["test-app"])
	})
}

func TestPluginManager_lifecycle_managed(t *testing.T) {
	newScenario(t, true, func(t *testing.T, ctx *managerScenarioCtx) {
		t.Run("Managed plugin scenario", func(t *testing.T) {
			t.Run("Should be able to register plugin", func(t *testing.T) {
				err := ctx.manager.registerAndStart(context.Background(), ctx.plugin)
				require.NoError(t, err)
				require.NotNil(t, ctx.plugin)
				require.Equal(t, testPluginID, ctx.plugin.ID)
				require.Equal(t, 1, ctx.pluginClient.startCount)
				testPlugin, exists := ctx.manager.Plugin(context.Background(), testPluginID)
				assert.True(t, exists)
				require.NotNil(t, testPlugin)

				t.Run("Should not be able to register an already registered plugin", func(t *testing.T) {
					err := ctx.manager.registerAndStart(context.Background(), ctx.plugin)
					require.Equal(t, 1, ctx.pluginClient.startCount)
					require.Error(t, err)
				})

				t.Run("When manager runs should start and stop plugin", func(t *testing.T) {
					pCtx := context.Background()
					cCtx, cancel := context.WithCancel(pCtx)
					var wg sync.WaitGroup
					wg.Add(1)
					var runErr error
					go func() {
						runErr = ctx.manager.Run(cCtx)
						wg.Done()
					}()
					time.Sleep(time.Millisecond)
					cancel()
					wg.Wait()
					require.Equal(t, context.Canceled, runErr)
					require.Equal(t, 1, ctx.pluginClient.startCount)
					require.Equal(t, 1, ctx.pluginClient.stopCount)
				})

				t.Run("When manager runs should restart plugin process when killed", func(t *testing.T) {
					ctx.pluginClient.stopCount = 0
					ctx.pluginClient.startCount = 0
					pCtx := context.Background()
					cCtx, cancel := context.WithCancel(pCtx)
					var wgRun sync.WaitGroup
					wgRun.Add(1)
					var runErr error
					go func() {
						runErr = ctx.manager.Run(cCtx)
						wgRun.Done()
					}()

					time.Sleep(time.Millisecond)

					var wgKill sync.WaitGroup
					wgKill.Add(1)
					go func() {
						ctx.pluginClient.kill()
						for {
							if !ctx.plugin.Exited() {
								break
							}
						}
						cancel()
						wgKill.Done()
					}()
					wgKill.Wait()
					wgRun.Wait()
					require.Equal(t, context.Canceled, runErr)
					require.Equal(t, 1, ctx.pluginClient.stopCount)
					require.Equal(t, 1, ctx.pluginClient.startCount)
				})

				t.Run("Unimplemented handlers", func(t *testing.T) {
					t.Run("Collect metrics should return method not implemented error", func(t *testing.T) {
						_, err = ctx.manager.CollectMetrics(context.Background(), &backend.CollectMetricsRequest{PluginContext: backend.PluginContext{PluginID: testPluginID}})
						require.Equal(t, backendplugin.ErrMethodNotImplemented, err)
					})

					t.Run("Check health should return method not implemented error", func(t *testing.T) {
						_, err = ctx.manager.CheckHealth(context.Background(), &backend.CheckHealthRequest{PluginContext: backend.PluginContext{PluginID: testPluginID}})
						require.Equal(t, backendplugin.ErrMethodNotImplemented, err)
					})
				})

				t.Run("Implemented handlers", func(t *testing.T) {
					t.Run("Collect metrics should return expected result", func(t *testing.T) {
						ctx.pluginClient.CollectMetricsHandlerFunc = func(_ context.Context, _ *backend.CollectMetricsRequest) (*backend.CollectMetricsResult, error) {
							return &backend.CollectMetricsResult{
								PrometheusMetrics: []byte("hello"),
							}, nil
						}

						res, err := ctx.manager.CollectMetrics(context.Background(), &backend.CollectMetricsRequest{PluginContext: backend.PluginContext{PluginID: testPluginID}})
						require.NoError(t, err)
						require.NotNil(t, res)
						require.Equal(t, "hello", string(res.PrometheusMetrics))
					})

					t.Run("Check health should return expected result", func(t *testing.T) {
						json := []byte(`{
							"key": "value"
						}`)
						ctx.pluginClient.CheckHealthHandlerFunc = func(ctx context.Context, req *backend.CheckHealthRequest) (*backend.CheckHealthResult, error) {
							return &backend.CheckHealthResult{
								Status:      backend.HealthStatusOk,
								Message:     "All good",
								JSONDetails: json,
							}, nil
						}

						res, err := ctx.manager.CheckHealth(context.Background(), &backend.CheckHealthRequest{PluginContext: backend.PluginContext{PluginID: testPluginID}})
						require.NoError(t, err)
						require.NotNil(t, res)
						require.Equal(t, backend.HealthStatusOk, res.Status)
						require.Equal(t, "All good", res.Message)
						require.Equal(t, json, res.JSONDetails)
					})

					t.Run("Call resource should return expected response", func(t *testing.T) {
						ctx.pluginClient.CallResourceHandlerFunc = func(ctx context.Context,
							req *backend.CallResourceRequest, sender backend.CallResourceResponseSender) error {
							return sender.Send(&backend.CallResourceResponse{
								Status: http.StatusOK,
							})
						}

						sender := &fakeSender{}
						err = ctx.manager.CallResource(context.Background(), &backend.CallResourceRequest{PluginContext: backend.PluginContext{PluginID: testPluginID}}, sender)
						require.NoError(t, err)
						require.NotNil(t, sender.resp)
						require.Equal(t, http.StatusOK, sender.resp.Status)
					})
				})
			})
		})
	})

	newScenario(t, true, func(t *testing.T, ctx *managerScenarioCtx) {
		t.Run("Backend core plugin is registered but not started", func(t *testing.T) {
			ctx.plugin.Class = plugins.Core
			err := ctx.manager.registerAndStart(context.Background(), ctx.plugin)
			require.NoError(t, err)
			require.NotNil(t, ctx.plugin)
			require.Equal(t, testPluginID, ctx.plugin.ID)
			require.Equal(t, 0, ctx.pluginClient.startCount)
			testPlugin, exists := ctx.manager.Plugin(context.Background(), testPluginID)
			assert.True(t, exists)
			require.NotNil(t, testPlugin)
		})
	})
}

func TestPluginManager_lifecycle_unmanaged(t *testing.T) {
	newScenario(t, false, func(t *testing.T, ctx *managerScenarioCtx) {
		t.Run("Unmanaged plugin scenario", func(t *testing.T) {
			t.Run("Should be able to register plugin", func(t *testing.T) {
				err := ctx.manager.registerAndStart(context.Background(), ctx.plugin)
				require.NoError(t, err)
				require.True(t, ctx.manager.isRegistered(testPluginID))
				require.False(t, ctx.pluginClient.managed)

				t.Run("When manager runs should not start plugin", func(t *testing.T) {
					pCtx := context.Background()
					cCtx, cancel := context.WithCancel(pCtx)
					var wg sync.WaitGroup
					wg.Add(1)
					var runErr error
					go func() {
						runErr = ctx.manager.Run(cCtx)
						wg.Done()
					}()
					go func() {
						cancel()
					}()
					wg.Wait()
					require.Equal(t, context.Canceled, runErr)
					require.Equal(t, 0, ctx.pluginClient.startCount)
					require.Equal(t, 1, ctx.pluginClient.stopCount)
					require.True(t, ctx.plugin.Exited())
				})

				t.Run("Should be not be able to start unmanaged plugin", func(t *testing.T) {
					pCtx := context.Background()
					cCtx, cancel := context.WithCancel(pCtx)
					defer cancel()
					err := ctx.manager.start(cCtx, ctx.plugin)
					require.Nil(t, err)
					require.Equal(t, 0, ctx.pluginClient.startCount)
					require.True(t, ctx.plugin.Exited())
				})
			})
		})
	})
}

<<<<<<< HEAD
func verifyCorePluginCatalogue(t *testing.T, pm *PluginManager) {
	t.Helper()

	panels := []string{
		"alertlist",
		"annolist",
		"barchart",
		"bargauge",
		"dashlist",
		"debug",
		"gauge",
		"gettingstarted",
		"graph",
		"heatmap",
		"live",
		"logs",
		"news",
		"nodeGraph",
		"piechart",
		"pluginlist",
		"stat",
		"table",
		"table-old",
		"text",
		"state-timeline",
		"status-history",
		"timeseries",
		"welcome",
		"xychart",
	}

	datasources := []string{
		"alertmanager",
		"stackdriver",
		"cloudwatch",
		"dashboard",
		"elasticsearch",
		"grafana",
		"grafana-azure-monitor-datasource",
		"graphite",
		"influxdb",
		"jaeger",
		"loki",
		"mixed",
		"mssql",
		"mysql",
		"opentsdb",
		"postgres",
		"prometheus",
		"tempo",
		"testdata",
		"zipkin",
	}

	for _, p := range panels {
		assert.NotNil(t, pm.plugins[p])
		assert.NotNil(t, pm.panels[p])
	}

	for _, ds := range datasources {
		assert.NotNil(t, pm.plugins[ds])
		assert.NotNil(t, pm.dataSources[ds])
	}
}

func verifyBundledPlugins(t *testing.T, pm *PluginManager) {
	t.Helper()

	bundledPlugins := map[string]string{
		"input": "input-datasource",
	}

	for pluginID, pluginDir := range bundledPlugins {
		assert.NotNil(t, pm.plugins[pluginID])
		for _, route := range pm.staticRoutes {
			if pluginID == route.PluginId {
				assert.True(t, strings.HasPrefix(route.Directory, pm.Cfg.BundledPluginsPath+"/"+pluginDir))
			}
		}
	}

	assert.NotNil(t, pm.dataSources["input"])
}

type fakeBackendPluginManager struct {
	registeredPlugins []string
}

func (f *fakeBackendPluginManager) Register(pluginID string, factory backendplugin.PluginFactoryFunc) error {
	f.registeredPlugins = append(f.registeredPlugins, pluginID)
	return nil
}

func (f *fakeBackendPluginManager) RegisterAndStart(ctx context.Context, pluginID string, factory backendplugin.PluginFactoryFunc) error {
	f.registeredPlugins = append(f.registeredPlugins, pluginID)
	return nil
}

func (f *fakeBackendPluginManager) Get(pluginID string) (backendplugin.Plugin, bool) {
	return nil, false
}

func (f *fakeBackendPluginManager) UnregisterAndStop(ctx context.Context, pluginID string) error {
	var result []string

	for _, existingPlugin := range f.registeredPlugins {
		if pluginID != existingPlugin {
			result = append(result, pluginID)
		}
	}

	f.registeredPlugins = result
	return nil
}

func (f *fakeBackendPluginManager) IsRegistered(pluginID string) bool {
	for _, existingPlugin := range f.registeredPlugins {
		if pluginID == existingPlugin {
			return true
		}
	}
	return false
}

func (f *fakeBackendPluginManager) StartPlugin(ctx context.Context, pluginID string) error {
	return nil
}

func (f *fakeBackendPluginManager) CollectMetrics(ctx context.Context, pluginID string) (*backend.CollectMetricsResult, error) {
	return nil, nil
}

func (f *fakeBackendPluginManager) CheckHealth(ctx context.Context, pCtx backend.PluginContext) (*backend.CheckHealthResult, error) {
	return nil, nil
}

func (f *fakeBackendPluginManager) QueryData(ctx context.Context, req *backend.QueryDataRequest) (*backend.QueryDataResponse, error) {
	return nil, nil
}

func (f *fakeBackendPluginManager) CallResource(pluginConfig backend.PluginContext, ctx *models.ReqContext, path string) {
}

var _ backendplugin.Manager = &fakeBackendPluginManager{}

type fakePluginInstaller struct {
	installCount   int
	uninstallCount int
}

func (f *fakePluginInstaller) Install(ctx context.Context, pluginID, version, pluginsDirectory, pluginZipURL, pluginRepoURL string) error {
	f.installCount++
	return nil
}

func (f *fakePluginInstaller) Uninstall(ctx context.Context, pluginPath string) error {
	f.uninstallCount++
	return nil
}

func (f *fakePluginInstaller) GetUpdateInfo(pluginID, version, pluginRepoURL string) (plugins.UpdateInfo, error) {
	return plugins.UpdateInfo{}, nil
}

=======
>>>>>>> tags/v8.5.20
func createManager(t *testing.T, cbs ...func(*PluginManager)) *PluginManager {
	t.Helper()

	pm := New(&plugins.Cfg{}, nil, &fakeLoader{})

	for _, cb := range cbs {
		cb(pm)
	}

	return pm
}

func createPlugin(t *testing.T, pluginID, version string, class plugins.Class, managed, backend bool, cbs ...func(*plugins.Plugin)) (*plugins.Plugin, *fakePluginClient) {
	t.Helper()

	p := &plugins.Plugin{
		Class: class,
		JSONData: plugins.JSONData{
			ID:      pluginID,
			Type:    plugins.DataSource,
			Backend: backend,
			Info: plugins.Info{
				Version: version,
			},
		},
	}

	logger := fakeLogger{}

	p.SetLogger(logger)

	pc := &fakePluginClient{
		pluginID: pluginID,
		logger:   logger,
		managed:  managed,
	}

	p.RegisterClient(pc)

	for _, cb := range cbs {
		cb(p)
	}

	return p, pc
}

type managerScenarioCtx struct {
	manager      *PluginManager
	plugin       *plugins.Plugin
	pluginClient *fakePluginClient
}

func newScenario(t *testing.T, managed bool, fn func(t *testing.T, ctx *managerScenarioCtx)) {
	t.Helper()
	cfg := &plugins.Cfg{}
	cfg.AWSAllowedAuthProviders = []string{"keys", "credentials"}
	cfg.AWSAssumeRoleEnabled = true

	cfg.Azure = &azsettings.AzureSettings{
		ManagedIdentityEnabled:  true,
		Cloud:                   "AzureCloud",
		ManagedIdentityClientId: "client-id",
	}

	loader := &fakeLoader{}
	manager := New(cfg, nil, loader)
	manager.pluginLoader = loader
	ctx := &managerScenarioCtx{
		manager: manager,
	}

	ctx.plugin, ctx.pluginClient = createPlugin(t, testPluginID, "", plugins.External, managed, true)

	fn(t, ctx)
}

func verifyNoPluginErrors(t *testing.T, pm *PluginManager) {
	for _, plugin := range pm.Plugins(context.Background()) {
		assert.Nil(t, plugin.SignatureError)
	}
}

type fakePluginInstaller struct {
	plugins.Installer

	installCount   int
	uninstallCount int
}

func (f *fakePluginInstaller) Install(_ context.Context, _, _, _, _, _ string) error {
	f.installCount++
	return nil
}

func (f *fakePluginInstaller) Uninstall(_ context.Context, _ string) error {
	f.uninstallCount++
	return nil
}

func (f *fakePluginInstaller) GetUpdateInfo(_ context.Context, _, _, _ string) (plugins.UpdateInfo, error) {
	return plugins.UpdateInfo{}, nil
}

type fakeLoader struct {
	mockedLoadedPlugins       []*plugins.Plugin
	mockedFactoryLoadedPlugin *plugins.Plugin

	loadedPaths []string

	plugins.Loader
}

func (l *fakeLoader) Load(_ context.Context, _ plugins.Class, paths []string, _ map[string]struct{}) ([]*plugins.Plugin, error) {
	l.loadedPaths = append(l.loadedPaths, paths...)

	return l.mockedLoadedPlugins, nil
}

func (l *fakeLoader) LoadWithFactory(_ context.Context, _ plugins.Class, path string, _ backendplugin.PluginFactoryFunc) (*plugins.Plugin, error) {
	l.loadedPaths = append(l.loadedPaths, path)

	return l.mockedFactoryLoadedPlugin, nil
}

type fakePluginClient struct {
	pluginID       string
	logger         log.Logger
	startCount     int
	stopCount      int
	managed        bool
	exited         bool
	decommissioned bool
	backend.CollectMetricsHandlerFunc
	backend.CheckHealthHandlerFunc
	backend.QueryDataHandlerFunc
	backend.CallResourceHandlerFunc
	mutex sync.RWMutex

	backendplugin.Plugin
}

func (pc *fakePluginClient) PluginID() string {
	return pc.pluginID
}

func (pc *fakePluginClient) Logger() log.Logger {
	return pc.logger
}

func (pc *fakePluginClient) Start(_ context.Context) error {
	pc.mutex.Lock()
	defer pc.mutex.Unlock()
	pc.exited = false
	pc.startCount++
	return nil
}

func (pc *fakePluginClient) Stop(_ context.Context) error {
	pc.mutex.Lock()
	defer pc.mutex.Unlock()
	pc.stopCount++
	pc.exited = true
	return nil
}

func (pc *fakePluginClient) IsManaged() bool {
	return pc.managed
}

func (pc *fakePluginClient) Exited() bool {
	pc.mutex.RLock()
	defer pc.mutex.RUnlock()
	return pc.exited
}

func (pc *fakePluginClient) Decommission() error {
	pc.mutex.Lock()
	defer pc.mutex.Unlock()

	pc.decommissioned = true

	return nil
}

func (pc *fakePluginClient) IsDecommissioned() bool {
	pc.mutex.RLock()
	defer pc.mutex.RUnlock()
	return pc.decommissioned
}

func (pc *fakePluginClient) kill() {
	pc.mutex.Lock()
	defer pc.mutex.Unlock()
	pc.exited = true
}

func (pc *fakePluginClient) CollectMetrics(ctx context.Context, req *backend.CollectMetricsRequest) (*backend.CollectMetricsResult, error) {
	if pc.CollectMetricsHandlerFunc != nil {
		return pc.CollectMetricsHandlerFunc(ctx, req)
	}

	return nil, backendplugin.ErrMethodNotImplemented
}

func (pc *fakePluginClient) CheckHealth(ctx context.Context, req *backend.CheckHealthRequest) (*backend.CheckHealthResult, error) {
	if pc.CheckHealthHandlerFunc != nil {
		return pc.CheckHealthHandlerFunc(ctx, req)
	}

	return nil, backendplugin.ErrMethodNotImplemented
}

func (pc *fakePluginClient) QueryData(ctx context.Context, req *backend.QueryDataRequest) (*backend.QueryDataResponse, error) {
	if pc.QueryDataHandlerFunc != nil {
		return pc.QueryDataHandlerFunc(ctx, req)
	}

	return nil, backendplugin.ErrMethodNotImplemented
}

func (pc *fakePluginClient) CallResource(ctx context.Context, req *backend.CallResourceRequest, sender backend.CallResourceResponseSender) error {
	if pc.CallResourceHandlerFunc != nil {
		return pc.CallResourceHandlerFunc(ctx, req, sender)
	}

	return backendplugin.ErrMethodNotImplemented
}

func (pc *fakePluginClient) SubscribeStream(_ context.Context, _ *backend.SubscribeStreamRequest) (*backend.SubscribeStreamResponse, error) {
	return nil, backendplugin.ErrMethodNotImplemented
}

func (pc *fakePluginClient) PublishStream(_ context.Context, _ *backend.PublishStreamRequest) (*backend.PublishStreamResponse, error) {
	return nil, backendplugin.ErrMethodNotImplemented
}

func (pc *fakePluginClient) RunStream(_ context.Context, _ *backend.RunStreamRequest, _ *backend.StreamSender) error {
	return backendplugin.ErrMethodNotImplemented
}

type fakeLogger struct {
	log.Logger
}

func (l fakeLogger) Info(_ string, _ ...interface{}) {

}

func (l fakeLogger) Debug(_ string, _ ...interface{}) {

}

type fakeSender struct {
	resp *backend.CallResourceResponse
}

func (s *fakeSender) Send(crr *backend.CallResourceResponse) error {
	s.resp = crr

	return nil
}
