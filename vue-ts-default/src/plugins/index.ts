import vue from '@vitejs/plugin-vue';
import type { PluginOption } from 'vite';

import { configHtmlPlugin } from './html';
import { configMockPlugin } from './mock';
import { configVConsolePlugin } from './VConsole';

export function setupPlugin(env: ImportMetaEnv, command: 'serve' | 'build', mode: string) {
  const vitePlugins: PluginOption[] = [
    vue(),
    configHtmlPlugin(env),
    configMockPlugin(command),
    configVConsolePlugin(command, mode)
  ];

  return vitePlugins;
}
