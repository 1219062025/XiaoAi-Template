import HttpRequest from './HttpRequest';
export default new HttpRequest({ baseURL: import.meta.env.BASE_URL || '', timeout: 30000 });
