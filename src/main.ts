// 全局样式
import '@/assets/styles/index.scss';
import 'virtual:windi.css';
// 允许在开发者控制台直接调试windicss
import 'virtual:windi-devtools';

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

  // 初始化
  init(app);

  app.mount('#app');
}

bootstrap();
