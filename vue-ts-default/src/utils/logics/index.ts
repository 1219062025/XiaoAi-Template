import type { App } from 'vue';
import { clientBridge } from './clientBridge';
import { registerServiceWorker } from './registerServiceWorker';
import { fastClick } from './fastClick';
import { alifeLogger } from './alifeLogger';

export function init(app: App<Element>) {
  clientBridge();
  registerServiceWorker();
  fastClick();
  alifeLogger();

  app.config.globalProperties.$filters = {
    filterHead(url: string) {
      if (url !== undefined && url !== '') {
        const isOther = url.indexOf('static.live.nagezan.net') !== -1 || url.indexOf('static.ls.xiaoai.live') !== -1;
        if (!isOther) {
          return url;
        }
        return `${url}@150w_150h.jpg`;
      }
      return 'http://static.ls.xiaoai.live/live/90a12f59-37bb-4500-8c75-ac8c8b188dcc.jpg@150h_150w';
    }
  };
}
