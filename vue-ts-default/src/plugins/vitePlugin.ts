import { createHtmlPlugin } from 'vite-plugin-html';
import { viteMockServe } from 'vite-plugin-mock';
import legacy from '@vitejs/plugin-legacy';
import WindiCSS from 'vite-plugin-windicss';
import progress from 'vite-plugin-progress';
import { viteVConsole } from 'vite-plugin-vconsole';

const path = require('path');

// EJS模板能力
export function configHtmlPlugin(env: ImportMetaEnv) {
  return createHtmlPlugin({
    inject: {
      // 将数据注入ejs模板
      data: {
        title: env.VITE_APP_TITLE
      }
    }
  });
}

// Mock
export function configMockPlugin(command: 'serve' | 'build') {
  return viteMockServe({
    mockPath: 'mock',
    localEnabled: command === 'serve'
  });
}

// 兼容浏览器，建议在打生产包的时候使用，因为会大幅减慢打包速度、加大打包体积
export function configLegacyPlugin() {
  return legacy({
    targets: ['defaults'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime']
  });
}

// WindiCSS原子css
export function configWindiCSSPlugin() {
  return WindiCSS();
}

// 打包时展示进度条
export function configBuildProgressPlugin(env: ImportMetaEnv) {
  return progress({
    format: `The ${env.VITE_NODE_ENV} Building: :percent | \u2705Transforms: :current/:total | \u231BTimes: :elapseds | \u2728Rate: :rate/s`
  });
}

// 针对手机端的开发调试工具
export function configVConsolePlugin(env: ImportMetaEnv, command: 'serve' | 'build') {
  return viteVConsole({
    entry: path.resolve('src/main.ts'),
    localEnabled: command === 'serve', // serve开发环境下
    enabled: env.VITE_NODE_ENV === 'test', // 测试环境下
    config: {
      maxLogNumber: 1000,
      theme: 'light'
    }
  });
}
