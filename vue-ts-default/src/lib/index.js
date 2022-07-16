/* eslint-disable */
import axios from 'axios';

export const isOfficial = () => {
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
};

const ua = navigator.userAgent || navigator.vendor || window.opera;
const isIOS = /ip(hone|od|ad)/i.test(ua);
const isAndroid = /android/i.test(ua);
const isQQ = /QQ/i.test(ua);
const isWeixin = /micromessenger/.test(ua.toLowerCase());

Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'H+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
  return fmt;
};

// axios.defaults.headers['Content-Type'] = {'Content-Type': 'application/json'};
// axios.defaults.headers['Content-Type'] = {'X-Requested-With': 'XMLHttpRequest'};
export default {
  baiduCode: '55a78a9fde09aaf2d202419693378563',
  host: 'https://api.ls.xiaoai.live/',
  testHost: 'http://test.ls.xiaoai.live/',
  host2: 'https://api.voss.xiaoai.live/',
  testHost2: 'http://test.ls.xiaoai.live/voss/',

  // isTest: false,
  isTest: !isOfficial(),

  ua: navigator.userAgent.toLowerCase(),
  post2(path, param) {
    const url = `${this.isTest ? this.testHost2 : this.host2}${path}`;
    const params = param;

    const p = new Promise((resolve, reject) => {
      axios
        .post(url, params, {
          headers: { 'Content-Type': 'text/plain' }
          // headers: {'Content-Type': 'text/plain;charset=utf-8'},
          // headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
        })
        .then((resp) => {
          if (resp.status === 200) {
            resolve(resp.data);
          } else {
            reject(new Error('something bad happened', resp));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
    return p;
  },
  // 统计函数
  accord(type, action, tag) {
    if (this.isTest) {
      console.log('测试环境，事件统计不上报：', type, action, tag);
    } else {
      if (typeof _hmt === 'undefined') {
        this.loadScript(`https://hm.baidu.com/hm.js?${this.baiduCode}`).then(() => {
          this.accord(type, action, tag);
        });
      } else {
        if (type !== undefined && type !== '') {
          /* global _hmt */
          _hmt.push(['_trackEvent', type, action, tag]);
        }
      }
    }
  },

  // 直播间、用户详情页、微信H5播放页面跳转
  appSkip(
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
  },

  // 接口是否使用正式 host
  isOfficialUrl() {
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
  },

  // // 从地址栏获取参数
  // getParameterByName(nameList = []) {
  //   const list = nameList || [];
  //   const o = {};
  //   list.forEach((n) => {
  //     const name = n.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  //     const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  //     const results = regex.exec(window.location.search);
  //     const r = results == null ? null : decodeURIComponent(results[1]);
  //     o[n] = r;
  //   });
  //   return o;
  // },

  // 从地址栏获取参数
  getParameterByName(nameList = []) {
    const list = nameList || [];
    const o = {};
    list.forEach((n) => {
      const url = window.location;
      const name = n.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
      const results = regex.exec(decodeURIComponent(url));
      const r = results == null ? null : decodeURIComponent(results[1]);
      o[n] = r;
    });
    return o;
  },

  // 页面返回顶部
  backToTop(speed) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let timer = null;
    const s = scrollTop / 20 || 60;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
      if (scrollTop > 0) {
        scrollTop -= s;
        document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
        timer = requestAnimationFrame(fn);
      } else {
        cancelAnimationFrame(timer);
      }
    });
  },

  // 界面高斯模糊
  windowBlur(
    data = {
      el: '#loveshow-app'
    }
  ) {
    const el = data.el || '#loveshow-app';
    const app = document.querySelector(el);
    const a = app.classList;
    if (a.value.indexOf('window-blur') !== -1) {
      app.classList.remove('window-blur');
    } else {
      app.classList.add('window-blur');
    }
  },

  // 动态加载 js
  loadScript(src) {
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
  },

  environment: {
    ua,
    isIOS,
    isAndroid,
    isQQ,
    isWeixin
  },

  getEle(selector) {
    return document.querySelector(selector);
  },

  // 是否在 app 中运行
  inApp() {
    const { isAndroid } = this.environment;
    const { isIOS } = this.environment;
    if (isAndroid && window.loveshow) {
      return 'android';
    }
    if (isIOS && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Client) {
      return 'ios';
    }
    return 'out';
  },

  // 对图片大小预处理
  compressImg(
    data = {
      url: '',
      width: -1,
      height: -1
    }
  ) {
    const url = data.url || '';
    const width = data.width || -1;
    if (url !== undefined && url !== '') {
      const isOther = url.indexOf('static.live.nagezan.net') < 0;
      if (isOther) {
        return url;
      }
      if (width === -1) {
        return `${url}@${100}h`;
      }
      return `${url}@${width}w`;
    }
    return 'http://static.ls.xiaoai.live/live/90a12f59-37bb-4500-8c75-ac8c8b188dcc.jpg@150h_150w';
  },

  filterHead(url) {
    if (url !== undefined && url !== '') {
      const isOther = url.indexOf('static.live.nagezan.net') !== -1 || url.indexOf('static.ls.xiaoai.live') !== -1;
      if (!isOther) {
        return url;
      }
      return `${url}@150w_150h.jpg`;
    }
    return 'http://static.ls.xiaoai.live/live/90a12f59-37bb-4500-8c75-ac8c8b188dcc.jpg@150h_150w';
  },

  resetTime(time) {
    time = parseInt(time) + '';
    if (time.length < 2) {
      return '0' + time;
    } else {
      return time;
    }
  },
  remainInterval(remain) {
    remain.h = this.resetTime(remain.time / (60 * 60));
    remain.m = this.resetTime((remain.time % (60 * 60)) / 60);
    remain.s = this.resetTime(remain.time % 60);

    if (remain.h === '00' && remain.m === '00' && remain.s === '00') {
      /* global location:true */
      location.reload();
    }
    remain.time--;
  },

  // 锁定界面不可滑动和解锁
  pageScorll() {
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
          ele.style.height = '100%';
          ele.style.overflow = 'hidden';
        });
        b.style.position = 'relative';
        b.style.top = `${-t}px`;
      },
      unlock() {
        if (!isLock) return;
        isLock = false;
        // (el || document).removeEventListener('touchmove', fn);
        t = parseInt(b.style.top, 10);
        [h, b].map((ele) => {
          ele.style.height = '';
          ele.style.overflow = '';
        });
        b.style.position = '';
        b.style.top = '';
        window.scrollTo(0, -t);
      }
    };
  },
  wxShareConfigInit(d = { debug: false }) {
    const src = '//res.wx.qq.com/open/js/jweixin-1.2.0.js';
    const url = '//api.ls.xiaoai.live/cgi-bin/get_jsapi_sign';
    const debug = typeof d.debug === 'boolean' ? d.debug : false;
    const all = Promise.all([this.loadScript(src), this.loadScript(url)]).then(() => {
      const data = window.wx_cfg;
      console.log(data, 'data');
      data.debug = debug;
      /* global wx */
      wx.config(data);
      // resolve()
    });

    return all;
  },
  wxShareReady(
    shareData = {
      data: {
        tit: '小爱直播',
        desc: '欢迎来到小爱直播~ 小直播，大有爱！',
        img: 'http://cdn2.fungotv.com/images/xiaoai/xiaoai_logo.png',
        url: window.location.href
      },
      success() {
        console.log('loveshow-ui: 微信分享-成功');
      },
      cancel() {
        console.log('loveshow-ui: 微信分享-取消');
      },
      type: 'link',
      dataUrl: ''
    }
  ) {
    // 分享的基本信息，tit:标题 desc:简介 img:分享图标 url:分享地址
    const shareInit = shareData.data || {
      tit: '小爱直播',
      desc: '欢迎来到小爱直播~ 小直播，大有爱！',
      img: 'http://cdn2.fungotv.com/images/xiaoai/xiaoai_logo.png',
      url: window.location.href
    };

    // 成功回调
    const success =
      shareData.success ||
      function () {
        console.log('loveshow-ui: 微信分享-成功');
      };

    // 取消回调
    const cancel =
      shareData.cancel ||
      function () {
        console.log('loveshow-ui: 微信分享-取消');
      };

    // 分享类型，默认为 link
    const type = shareData.type || 'link';

    // 分享类型为 music video 时的资源地址
    const dataUrl = shareData.dataUrl || '';

    // 初始化朋友圈分享和好友分享
    /* global wx */
    wx.ready(() => {
      wx.onMenuShareTimeline({
        title: shareInit.tit, // 分享标题
        link: shareInit.url, // 分享链接
        imgUrl: shareInit.img, // 分享图标
        success,
        cancel
      });

      wx.onMenuShareAppMessage({
        title: shareInit.tit, // 分享标题
        desc: shareInit.desc, // 分享描述
        link: shareInit.url, // 分享链接
        imgUrl: shareInit.img, // 分享图标
        type, // 分享类型,music、video或link，不填默认为link
        dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
        success,
        cancel
      });
    });

    // 初始化错误
    /* global wx */
    wx.error((res) => {
      console.error('loveshow-ui: wx-share-error-res', res);
    });
  },
  appShare(
    shareData = {
      shareInit: {
        tit: '小爱直播',
        desc: '欢迎来到小爱直播~ 小直播，大有爱！',
        img: 'http://cdn2.fungotv.com/images/xiaoai/xiaoai_logo.png',
        url: window.location.href
      },
      type: 1,
      callback() {
        console.log('loveshow-ui: ios callback');
      }
    }
  ) {
    const arr = [0, 1, 2, 3, 4, 5, 6];
    const type = shareData.type;
    const { shareInit } = shareData;
    const inapp = this.inApp();
    const message = {
      method: 'share',
      params: {
        shareType: type,
        title: shareInit.tit,
        content: shareInit.desc,
        url: shareInit.url
      }
      // callback: shareData.callback,
    };

    if (typeof type === 'number' && arr.indexOf(type) !== -1) {
      share(inapp, message)();
    } else {
      console.error(
        `loveshow-ui：type 必须为数字
              type = 0  QQ 好友
              type = 1  微信好友
              type = 2  微博
              type = 3  QQ 空间
              type = 4  微信朋友圈
              type = 5  未知 app
              type = 6  未知 app`
      );
    }
  },
  // 分享图片
  SharePictureUrl(picUrl) {
    const inapp = this.inApp();
    const message = {
      method: 'sharePictureUrl',
      params: {
        picUrl: picUrl
      }
    };

    const androidMessage = {
      picUrl: picUrl,
      shareUrl: 'xiaoai.fm',
      title: 'h',
      content: 'h'
    };
    if (inapp == 'android') {
      console.log('androidMessage', androidMessage);
      if (window.loveshow) {
        window.loveshow.sharePictureUrl(
          androidMessage.picUrl,
          androidMessage.shareUrl,
          androidMessage.title,
          androidMessage.content
        );
      }
    } else if (inapp == 'ios') {
      console.log('iosmessage', message);
      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Client) {
        window.webkit.messageHandlers.Client.postMessage(message);
      }
    } else {
      console.log('loveshow-ui: not in app');
    }
  },

  // 打开新webview
  openNewUrl(url) {
    const inapp = this.inApp();
    const message = {
      method: 'openNewWebview',
      params: {
        url: url
      }
    };
    const androidMessage = {
      url: url
    };
    if (inapp == 'android') {
      console.log('androidMessage', androidMessage);
      if (window.loveshow) {
        window.loveshow.openNewWebview(androidMessage.url);
      }
    } else if (inapp == 'ios') {
      console.log('iosmessage', message);
      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Client) {
        window.webkit.messageHandlers.Client.postMessage(message);
      }
    } else {
      console.log('loveshow-ui: not in app');
    }
  },

  addParam(paramKey, paramVal) {
    const url = window.location.href;
    let andStr = '?';
    const beforeparam = url.indexOf('?');
    if (beforeparam !== -1) {
      andStr = '&';
    }
    return `${url + andStr + paramKey}=${encodeURIComponent(paramVal)}`;
  },
  getLocalStorageParam(array) {
    const arr = array;
    const o = {};
    arr.forEach((item) => {
      o[item] = localStorage[item] || null;
    });
    return o;
  }
};

function share(inapp, message) {
  const param = message.params;
  const out = () => {
    console.log('loveshow-ui: not in app');
  };
  const ios = () => {
    window.webkit.messageHandlers.Client.postMessage(message);
  };
  const android = () => {
    window.loveshow.share(param.shareType, param.title, param.content, param.imgUrl, param.url);
  };
  const o = {
    out,
    ios,
    android
  };
  return o[inapp];
}

export function ThrottleFn(fn, t) {
  let last;
  let timer;
  const interval = t || 500;
  return function () {
    const args = arguments;
    const now = +new Date();
    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(this, args);
      }, interval);
    } else {
      last = now;
      fn.apply(this, args);
    }
  };
}

function Myload(B, A) {
  let done = false;
  B.onload = B.onreadystatechange = function () {
    if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
      done = true;
      A();
      B.onload = B.onreadystatechange = null;
    }
  };
}

export function loadScript(A, id, C) {
  var B = function () {};
  if (C !== undefined) {
    B = C;
  }
  if (!document.getElementById(id)) {
    var D = document.createElement('script');
    D.setAttribute('src', A);
    D.setAttribute('id', id);
    document.body.appendChild(D);
    Myload(D, B);
  } else {
    B();
  }
}

// 判断dom中是否含有某个类名
// el 需要判断的dom元素
// className 需要判断的类名
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
  return reg.test(el.className);
}

// 向dom中添加类名
// el 需要添加类名的dom元素
// className 需要判断的类名
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return false;
  }
  // 通过空格将原有类名字符串组装成数组
  let newClass = el.className.split(' ');
  newClass.push(className);
  // 添加完毕后 通过空格将数组组装为字符串
  el.className = newClass.join(' ');
}
