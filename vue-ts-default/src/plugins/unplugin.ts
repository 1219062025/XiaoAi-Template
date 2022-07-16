import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// unplugin-vue-components内置的解析器，通常是比较流行的库
import { VantResolver } from 'unplugin-vue-components/resolvers';

export function configAutoImportPlugin() {
  const autoImportPlugin = AutoImport({
    // 自动导入库下的API导出
    imports: ['vue', 'vue-router'],
    // 自动导入目录下的所有模块导出
    dirs: ['@/store'],
    // 自动导入后的声明文件存放路径
    dts: 'types/auto-imports.d.ts',
    eslintrc: {
      enabled: true, // 默认为false，先设置为true后保存一次，会自动生成filepath指定路径的json文件，然后设回false。需要更新时再设置true
      filepath: '.eslintrc-auto-import.json'
    }
  });

  return autoImportPlugin;
}
export function configAutoComponentsPlugin() {
  const autoComponentsPlugin = Components({
    // 自动导入后的声明文件存放路径
    dts: 'types/components.d.ts',
    resolvers: [VantResolver()]
  });

  return autoComponentsPlugin;
}
