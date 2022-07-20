import dayjs from 'dayjs';

type DifferenceTime = {
  year: number;
  month: number;
  week: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
};

type DifferenceKeys = keyof DifferenceTime;

export function differTime(endTime: number, startTime: number = Date.now()): DifferenceTime {
  const isReversion = startTime > endTime;
  const _D: DifferenceTime = {
    year: 0,
    month: 0,
    week: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  Object.keys(_D).forEach((key) => {
    let v = 0;
    const d = Math.abs(endTime - startTime);
    switch (key) {
      case 'hour':
        v = Math.floor((d % (24 * 3600 * 1000)) / (3600 * 1000));
        break;
      case 'minute':
        v = Math.floor(((d % (24 * 3600 * 1000)) % (3600 * 1000)) / (60 * 1000));
        break;
      case 'second':
        v = Math.floor((((d % (24 * 3600 * 1000)) % (3600 * 1000)) % (60 * 1000)) / 1000);
        break;
      default:
        v = isReversion
          ? dayjs(startTime).diff(endTime, key as DifferenceKeys)
          : dayjs(endTime).diff(startTime, key as DifferenceKeys);
    }
    _D[key as DifferenceKeys] = v;
  });
  return _D;
}

// 数字补足, 如: 2 -> '02', 10 -> '10'
export const num2Digit = (num: number | string): string => (Number(num) >= 10 ? `${num}` : `0${num}`);
