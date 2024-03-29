/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_NODE_ENV: 'test' | 'production';
  readonly NODE_ENV: string;
  readonly BACKUP_PATH: string;
  readonly DEPLOY_PATH: string;
  readonly SERVER: string;
  readonly URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
