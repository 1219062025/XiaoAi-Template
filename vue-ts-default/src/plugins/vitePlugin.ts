import { createHtmlPlugin } from 'vite-plugin-html';
import { viteMockServe } from 'vite-plugin-mock';
import legacy from '@vitejs/plugin-legacy';
import WindiCSS from 'vite-plugin-windicss';
import progress from 'vite-plugin-progress';
import { viteVConsole } from 'vite-plugin-vconsole';
const path = require('path');

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

// 兼容浏览器，默认是没有使用的，会大幅减慢打包速度、加大打包体积
export function configLegacyPlugin() {
  const legacyPlugin = legacy({
    targets: ['defaults'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime']
  });

  return legacyPlugin;
}

// WindiCSS原子css
export function configWindiCSSPlugin() {
  const windiCSSPlugin = WindiCSS();

  return windiCSSPlugin;
}

// 打包时展示进度条
export function configBuildProgressPlugin() {
  const buildProgressPlugin = progress({
    format: 'Building [:bar] Transforms: :current/:total | Times: :elapseds | Rate: :rate/s'
  });

  return buildProgressPlugin;
}

// 针对手机端的开发调试工具
export function configVConsolePlugin(command: 'serve' | 'build', mode: string) {
  const VConsolePlugin = viteVConsole({
    entry: path.resolve('src/main.ts'), // 或者可以使用这个配置: [path.resolve('src/main.ts')]
    localEnabled: command === 'serve', // serve开发环境下
    enabled: command !== 'serve' || mode === 'test', // 打包环境下/发布测试包
    config: {
      maxLogNumber: 1000,
      theme: 'light'
    }
  });

  return VConsolePlugin;
}
