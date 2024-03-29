import { defineConfig, loadEnv, ConfigEnv } from 'vite';

import { setupPlugin } from './src/plugins';
import px2viewport from 'cnjm-postcss-px-to-viewport';

import path from 'path';

export default ({ mode, command }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd()) as ImportMetaEnv;

  return defineConfig({
    base: './',
    build: {
      // 打包兼容低版本
      target: ['es2015']
      // cssTarget: ['chrome52']
    },
    resolve: {
      // 设置了路径别名后还需要在tsconfig.json中配置ts中的别名，否则ts无法识别‘@’，虽然不影响代码运行，但是会红色波浪线
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'types')
      }
    },
    plugins: setupPlugin(env, command),
    css: {
      postcss: {
        plugins: [
          px2viewport({
            unitToConvert: 'px', // 要转化的单位
            viewportWidth: 750, // UI设计稿的宽度
            unitPrecision: 9, // 转换后的精度，即小数点位数
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            landscapeWidth: 1334, // 横屏时使用的宽度
            mediaQuery: true,
            customFun: ({ file }: any) => {
              // 这个自定义的方法是针对处理vant组件下的设计稿为375问题
              const designWidth = path.join(file).includes(path.join('node_modules', 'vant')) ? 375 : 750;
              return designWidth;
            }
          })
        ]
      }
    }
  });
};
