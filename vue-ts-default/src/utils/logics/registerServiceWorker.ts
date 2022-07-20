import { register } from 'register-service-worker';
import { isTest } from '@/utils';

export const registerServiceWorker = () => {
  if (!isTest) {
    register(`${import.meta.env.BASE_URL}service-worker.js`, {
      ready() {
        console.log(
          `App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB`
        );
      },
      registered() {
        console.log('Service worker has been registered.');
      },
      cached() {
        console.log('Content has been cached for offline use.');
      },
      updatefound() {
        console.log('New content is downloading.');
      },
      updated() {
        console.log('New content is available; please refresh.');
      },
      offline() {
        console.log('No internet connection found. App is running in offline mode.');
      },
      error(error) {
        console.error('Error during service worker registration:', error);
      }
    });
  }
};
