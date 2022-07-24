export const ua = navigator.userAgent || navigator.vendor || window.opera;
export const isIOS = /ip(hone|od|ad)/i.test(ua);
export const isAndroid = /android/i.test(ua);
export const isQQ = /QQ/i.test(ua);
export const isWeixin = /micromessenger/.test(ua.toLowerCase());
export const isTestEnv = import.meta.env.VITE_NODE_ENV ? import.meta.env.VITE_NODE_ENV === 'test' : true;

// 模拟vue2 require函数功能
export const resolveImport = (url: string) => {
  const [path, ext] = url.split('@/')[1].split('.');
  return new URL(`../../${path}.${ext}`, import.meta.url).href;
};

/**
 *
 * @param node 目标DOM节点
 * @param type 字符串类型，Element.classList的属性
 * @param className 字符串类型。多个类名用空格隔开
 */
export function handleClassList(node: HTMLElement, type: keyof DOMTokenList, className: string) {
  const _classList = className.split(/\s+/);
  if (_classList.length !== 1) {
    _classList.forEach((name) => {
      (node.classList as any)[type](name);
    });
  } else {
    (node.classList as any)[type](className);
  }
}

/**
 * 在动画结束之后执行回调
 * @param node: 目标DOM节点
 * @param callBack: 目标节点动画结束后的回调函数
 * @returns Promise<void>
 */
export function animationendPromise(node: HTMLElement, callBack?: () => any) {
  return new Promise<void>((resolve) => {
    // 动画未结束不能再次点击节点，以免造成在动画结束前就把事件处理程序清除了
    node.style.pointerEvents = 'none';
    const EventHandler = async () => {
      if (callBack) await callBack();
      node.removeEventListener('animationend', EventHandler);
      node.style.pointerEvents = 'auto';
      resolve();
    };
    node.addEventListener('animationend', EventHandler);
    // 动画意外结束时进行处理
    node.addEventListener('animationcancel', () => {
      node.removeEventListener('animationend', EventHandler);
      node.style.pointerEvents = 'auto';
    });
  });
}

export function transitionPromise(node: HTMLElement, callBack: () => any) {
  return new Promise<void>((resolve) => {
    node.addEventListener('transitionend', async () => {
      await callBack();
      resolve();
    });
  });
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
