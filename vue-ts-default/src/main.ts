// 全局样式
import '@/assets/styles/index.scss';

import App from './App.vue';
import { createApp } from 'vue';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
import { init } from '@/utils/logics';

async function bootstrap() {
  const app = createApp(App);

  // 安装Vue-Router
  setupRouter(app);

  // 安装Pinia
  setupStore(app);

  // 初始化与客户端的链接
  init();

  app.mount('#app');
}

bootstrap();
