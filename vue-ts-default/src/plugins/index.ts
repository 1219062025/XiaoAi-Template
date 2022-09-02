import vue from '@vitejs/plugin-vue';
import type { PluginOption } from 'vite';

import {
  configHtmlPlugin,
  configMockPlugin,
  configLegacyPlugin,
  configWindiCSSPlugin,
  configBuildProgressPlugin,
  configVConsolePlugin
} from './vitePlugin';
import { configAutoImportPlugin, configAutoComponentsPlugin } from './unplugin';
// 打包分析器，进行打包后会输出stats.html到根目录下
import { visualizer } from 'rollup-plugin-visualizer';

export function setupPlugin(env: ImportMetaEnv, command: 'serve' | 'build') {
  const vitePlugins: PluginOption[] = [
    vue(),
    configHtmlPlugin(env),
    configMockPlugin(command),
    configWindiCSSPlugin(),
    configBuildProgressPlugin(env),
    configVConsolePlugin(env, command),
    configAutoImportPlugin(),
    configAutoComponentsPlugin(),
    visualizer({
      gzipSize: true
    })
  ];

  if (env.VITE_NODE_ENV === 'production') {
    vitePlugins.push(configLegacyPlugin());
  }

  return vitePlugins;
}
