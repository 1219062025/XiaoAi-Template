import { defineStore } from 'pinia';

interface MainStoreState {
  uid: string | number;
  token: string;
  tuid: string;
  toastMsg: string;
  toastShow: boolean;
  loadingShow: boolean;
  isiPhoneX?: boolean;
  isGoogle?: boolean;
  setTime?: any;
}

type StateKeys = keyof MainStoreState;

export const useMainStore = defineStore({
  id: 'main',
  state: (): MainStoreState => ({
    uid: '14746601', // 14746601 25361515 13731482 16838447 16296671
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
    setState<T extends StateKeys>(state: T, data: MainStoreState[T]) {
      // 直接赋值this[state]，ts会报错，因为Pinia对this做了一层封装
      this.$state[state] = data;
    },

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
