import { ref, Ref } from 'vue';
import dayjs from 'dayjs';

/**
 *
 * @param endTime 倒计时结束时间 支持格式 1.毫秒时间戳 2.2022-8-10 20:10:10
 * @param startTime 倒计时开始时间 默认为当前时间
 * @returns
 */
const useCountDown = (endTime: number | string, startTime: number | string = Date.now()) => {
  const START_TIME = dayjs(startTime).valueOf();
  const END_TIME = dayjs(endTime).valueOf();
  // 计时器
  let _timer: NodeJS.Timer | null = null;
  const rest_time = ref<number>(END_TIME - START_TIME);
  const day = ref<number>(0);
  const hour = ref<number>(0);
  const minute = ref<number>(0);
  const second = ref<number>(0);

  // 是否正在倒计时中
  const _isRunning = ref<boolean>(false);
  // 开始倒计时函数
  const start = (): void => {
    _isRunning.value = true;

    _timer = setInterval(() => {
      rest_time.value -= 1000;
      if (rest_time.value > 0) {
        day.value = Math.floor(rest_time.value / (24 * 3600 * 1000));
        hour.value = Math.floor((rest_time.value % (24 * 3600 * 1000)) / (3600 * 1000));
        minute.value = Math.floor(((rest_time.value % (24 * 3600 * 1000)) % (3600 * 1000)) / (60 * 1000));
        second.value = Math.floor((((rest_time.value % (24 * 3600 * 1000)) % (3600 * 1000)) % (60 * 1000)) / 1000);
      } else {
        clearInterval(<NodeJS.Timer>_timer);
        _isRunning.value = false;
        reset();
        return;
      }
    }, 1000);
  };
  // 重置
  const reset = (): void => {
    rest_time.value = 0;
  };
  return {
    day,
    hour,
    minute,
    second,
    isRunning: _isRunning,
    start
  };
};
// 数字补足, 如: 2 -> '02', 10 -> '10'
export const num2Digit = (num: number | string): string => (Number(num) >= 10 ? `${num}` : `0${num}`);
export interface CountDown {
  day: Ref<number>;
  hour: Ref<number>;
  minute: Ref<number>;
  second: Ref<number>;
  isRunning: Ref<boolean>;
  start: () => void;
}
export default useCountDown;
