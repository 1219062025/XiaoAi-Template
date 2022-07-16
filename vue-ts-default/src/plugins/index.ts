import vue from '@vitejs/plugin-vue';
import type { PluginOption } from 'vite';

import { configHtmlPlugin, configMockPlugin, configLegacyPlugin } from './vitePlugin';
import { configVConsolePlugin } from './VConsole';
import { configAutoImportPlugin, configAutoComponentsPlugin } from './unplugin';

export function setupPlugin(env: ImportMetaEnv, command: 'serve' | 'build', mode: string) {
  const vitePlugins: PluginOption[] = [
    vue(),
    configHtmlPlugin(env),
    configMockPlugin(command),
    configLegacyPlugin(),
    configVConsolePlugin(command, mode),
    configAutoImportPlugin(),
    configAutoComponentsPlugin()
  ];

  return vitePlugins;
}
