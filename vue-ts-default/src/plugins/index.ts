import vue from '@vitejs/plugin-vue';
import type { PluginOption } from 'vite';

import {
  configHtmlPlugin,
  configMockPlugin,
  configWindiCSSPlugin,
  configBuildProgressPlugin,
  configVConsolePlugin
} from './vitePlugin';
import { configAutoImportPlugin, configAutoComponentsPlugin } from './unplugin';
// 打包分析器，输出stats.html到根目录下
import { visualizer } from 'rollup-plugin-visualizer';

export function setupPlugin(env: ImportMetaEnv, command: 'serve' | 'build', mode: string) {
  const vitePlugins: PluginOption[] = [
    vue(),
    configHtmlPlugin(env),
    configMockPlugin(command),
    configWindiCSSPlugin(),
    configBuildProgressPlugin(),
    configVConsolePlugin(command, mode),
    configAutoImportPlugin(),
    configAutoComponentsPlugin(),
    visualizer({
      gzipSize: true
    })
  ];

  return vitePlugins;
}
