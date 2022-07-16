import { RouteRecordRaw } from 'vue-router';

export const basicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue'),
    meta: {
      title: 'Home'
    }
  }
];
