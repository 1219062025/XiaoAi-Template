import { viteVConsole } from 'vite-plugin-vconsole';
const path = require('path');

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
