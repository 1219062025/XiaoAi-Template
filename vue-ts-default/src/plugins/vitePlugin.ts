import { createHtmlPlugin } from 'vite-plugin-html';
import { viteMockServe } from 'vite-plugin-mock';
import legacy from '@vitejs/plugin-legacy';

// EJS模板能力
export function configHtmlPlugin(env: ImportMetaEnv) {
  const htmlPlugin = createHtmlPlugin({
    inject: {
      // 将数据注入ejs模板
      data: {
        title: env.VITE_APP_TITLE
      }
    }
  });

  return htmlPlugin;
}

// Mock
export function configMockPlugin(command: 'serve' | 'build') {
  const mockPlugin = viteMockServe({
    mockPath: 'mock',
    localEnabled: command === 'serve'
  });
  return mockPlugin;
}

// 兼容浏览器
export function configLegacyPlugin() {
  const legacyPlugin = legacy({
    targets: ['defaults']
  });

  return legacyPlugin;
}
