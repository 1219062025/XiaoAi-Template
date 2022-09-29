import type { App } from 'vue';
import { createPinia, defineStore } from 'pinia';

interface MainStoreState {
  uid: string | number;
  token: string;
  tuid: string;
  toastMsg: string;
  toastShow: boolean;
  loadingShow: boolean; // 加载中蒙层是否打开
  isiPhoneX?: boolean;
  isGoogle?: boolean;
  setTime?: any;
}

export const useStore = defineStore({
  id: 'main',
  state: (): MainStoreState => ({
    uid: 14746601, // 14746601 25361515 13731482 16838447 16296671
    token: 'whosyourdaddy',
    // tuid: '12547134',
    // uid: '',
    // token: '',
    tuid: '',
    toastMsg: '',
    toastShow: false,
    loadingShow: false
  }),
  getters: {},
  actions: {
    showToast(message: string) {
      clearTimeout(this.setTime);
      this.toastMsg = message;
      this.toastShow = true;
      this.setTime = setTimeout(() => {
        this.toastShow = false;
      }, 2000);
    }
  }
});

export const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}
