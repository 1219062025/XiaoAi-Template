import { createHtmlPlugin } from 'vite-plugin-html';

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
