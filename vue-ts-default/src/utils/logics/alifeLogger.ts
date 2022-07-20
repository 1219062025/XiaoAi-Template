import BrowserLogger from 'alife-logger';
import { isTest } from '@/utils';

console.log(import.meta.env);

// ARMS前端监控
export const alifeLogger = () => {
  let __bl: any;
  const num = Math.floor(Math.random() * 100 + 1);

  if (!isTest && num > 95) {
    __bl = BrowserLogger.singleton({
      pid: 'dp5p0pay1c@daa49d1f1ca5941',
      appType: 'web',
      imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
      sendResource: true,
      tag: import.meta.env.VITE_APP_TITLE,
      ignore: {
        ignoreErrors: /^Script error\.?$/
      }
    });
  }
  return __bl;
};
