/**
 * 播放动画
 * @param {*} el 元素
 * @param {*} anClass 类名
 * @param {*} time 动画时间
 * @param {*} callBack 回调方法
 */
export const playAnimate = (el, anClass, time, callBack) => {
  el.classList.add(anClass);
  setTimeout(() => {
    el.classList.remove(anClass);
    callBack();
  }, time);
};

// 数字补足, 如: 2 -> '02', 10 -> 10
export const num2Digit = (num) => (num >= 10 ? num : `0${num}`);

// 秒 提取 天
export const secondExtraDay = (second) => parseInt(second / 86400, 10);
// 秒 提取 天/小时
export const secondExtraHour2 = (second) => num2Digit(parseInt((second % 86400) / 3600, 10));
// 秒 提取 小时
export const secondExtraHour = (second) => parseInt(second / 3600, 10);
// 秒 提取 分钟
export const secondExtraMinute = (second) => num2Digit(parseInt((second % 3600) / 60, 10));
// 秒 转换 分钟
export const secondTransitionMinute = (second) => num2Digit(parseInt(second / 60, 10));
// 秒 提取 秒
export const secondExtraSecond = (second) => num2Digit(parseInt(second % 60, 10));
// 秒 提取 秒
export const secondExtraSecond2 = (second) => parseInt(second % 60, 10);

// 计算从开始startTime 到 endTime 需要几天几小时几分几秒，startTime, endTime单位为ms
export const differTime = (startTime, endTime) => {
  let cha = startTime > endTime ? startTime - endTime : endTime - startTime;
  let day = Math.floor(cha / (24 * 3600 * 1000));
  let hours = Math.floor((cha % (24 * 3600 * 1000)) / (3600 * 1000));
  let minutes = Math.floor(((cha % (24 * 3600 * 1000)) % (3600 * 1000)) / (60 * 1000));
  let seconds = Math.floor((((cha % (24 * 3600 * 1000)) % (3600 * 1000)) % (60 * 1000)) / 1000);
  return {
    day,
    hours,
    minutes,
    seconds
  };
};

export const filterHead = (url) => {
  if (url !== undefined && url !== '') {
    // eslint-disable-next-line
    const isOther =
      url.indexOf('static.live.nagezan.net') !== -1 ||
      // eslint-disable-next-line operator-linebreak
      url.indexOf('static.ls.xiaoai.live') !== -1;
    if (!isOther) {
      return url;
    }
    return `${url}@150w_150h.jpg`;
  }
  return 'http://static.ls.xiaoai.live/live/90a12f59-37bb-4500-8c75-ac8c8b188dcc.jpg@150h_150w';
};
