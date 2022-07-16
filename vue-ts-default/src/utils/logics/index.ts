import { clientBridge } from './clientBridge';
import { registerServiceWorker } from './registerServiceWorker';
import { fastClick } from './fastClick';

export function init() {
  clientBridge();
  registerServiceWorker();
  fastClick();
}
