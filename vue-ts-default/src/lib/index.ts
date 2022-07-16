export const ua = navigator.userAgent || navigator.vendor || window.opera;
export const isIOS = /ip(hone|od|ad)/i.test(ua);
export const isAndroid = /android/i.test(ua);
export const isQQ = /QQ/i.test(ua);
export const isWeixin = /micromessenger/.test(ua.toLowerCase());
export const isTest = !isOfficial();

// 判断是否是线上
export function isOfficial() {
  let official = true;
  const url = window.location.href;
  const t =
    url.indexOf('http://localhost') > -1 ||
    url.indexOf('https://localhost') > -1 ||
    url.indexOf('http://192.168') > -1 ||
    url.indexOf('https://192.168') > -1 ||
    url.indexOf('/LoveshowTest/') > -1;
  if (t) {
    official = false;
  }

  return official;
}

// 判断在什么设备上运行 android-安卓 ios-苹果 out-非App上
export function inApp() {
  if (isAndroid && window.loveshow) {
    return 'android';
  }
  if (isIOS && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Client) {
    return 'ios';
  }
  return 'out';
}

// 直播间、用户详情页、微信H5播放页面跳转
export function appSkip(
  data = {
    isLiving: 0,
    rid: 0,
    uid: 0,
    weiXinSkip: false
  }
) {
  const isLiving = data.isLiving || 0;
  const rid = data.rid || 0;
  const uid = data.uid || 0;
  const weiXinSkip = data.weiXinSkip || false;
  let url = `loveshow://${isLiving ? `room?rid=${rid}` : `userinfo?tuid=${uid}`}`;
  if (isWeixin && weiXinSkip) {
    url = `https://h.chaojizb.com/wx/app/player.html?rid=${rid}`;
  }
  window.location.href = url;
  return url;
}

// 从地址栏获取参数
export function getParameterByName(nameList: string[] = []) {
  const list = nameList || [];
  const o: Record<string, any> = {};
  list.forEach((n: string) => {
    const url: any = window.location;
    const name = n.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
    const results = regex.exec(decodeURIComponent(url));
    const r = results == null ? null : decodeURIComponent(results[1]);
    o[n] = r;
  });
  return o;
}

// 动态加载 js
export function loadScript(src: string) {
  const p = new Promise((resolve) => {
    const js = document.createElement('script');
    js.setAttribute('src', src);
    const head = document.getElementsByTagName('head')[0] || document.documentElement;
    head.appendChild(js);
    js.onload = () => {
      resolve(js);
    };
  });
  return p;
}

// 锁定界面不可滑动和解锁
export function pageScorll() {
  let isLock = false;
  let t = 0;
  const h = document.querySelector('html');
  const b = document.querySelector('body');

  return {
    lock() {
      if (isLock) return;
      isLock = true;
      // (el || document).addEventListener('touchmove', fn);
      t = window.scrollY;
      [h, b].map((ele) => {
        ele!.style.height = '100%';
        ele!.style.overflow = 'hidden';
      });
      b!.style.position = 'relative';
      b!.style.top = `${-t}px`;
    },
    unlock() {
      if (!isLock) return;
      isLock = false;
      // (el || document).removeEventListener('touchmove', fn);
      t = parseInt(b!.style.top, 10);
      [h, b].map((ele) => {
        ele!.style.height = '';
        ele!.style.overflow = '';
      });
      b!.style.position = '';
      b!.style.top = '';
      window.scrollTo(0, -t);
    }
  };
}
