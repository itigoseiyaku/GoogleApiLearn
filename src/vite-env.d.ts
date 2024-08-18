/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  /** GoogleAPIのためのClientID */
  readonly VITE_ENV_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
