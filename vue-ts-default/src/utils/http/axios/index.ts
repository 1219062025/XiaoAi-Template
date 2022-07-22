import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import { useStore } from '@/store';
import { isTestEnv } from '@/utils';

import NProgress from 'nprogress';

// 后端接口返回通用格式
type Result<T> = {
  error_code?: number;
  code?: number;
  msg: string;
  data: T;
};

/**
 *
 * AxiosRequestConfig：axios传递参数的类型
 *
 * AxiosInstance：axios实例对象类型
 *
 * AxiosResponse：axios请求返回值类型
 *
 * AxiosError： axios响应错误类型
 *
 */

export class HttpRequest {
  // axios 实例
  private instance: AxiosInstance;
  private host = 'https://api.ls.xiaoai.live/';
  private testHost = 'http://test.ls.xiaoai.live/';
  private host2 = 'https://api.voss.xiaoai.live/';
  private testHost2 = 'http://test.ls.xiaoai.live/voss/';

  // 基础配置，url和超时时间
  private readonly baseConfig: AxiosRequestConfig = { baseURL: '/api', timeout: 30000 };

  constructor(config?: AxiosRequestConfig) {
    // 使用axios.create创建axios实例
    this.instance = axios.create(Object.assign(this.baseConfig, config));
    const store = useStore();

    // 全局请求拦截
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const method2Key = { get: 'params', post: 'data' };
        const { uid, token } = store;
        const method = config.method as 'get' | 'post';
        const key = method2Key[method] as 'params' | 'data';
        // eslint-disable-next-line
        config[key] = {
          uid,
          token,
          ...config[key]
        };
        NProgress.start();
        store.setState('loadingShow', true);
        return config;
      },
      (err: AxiosError) => {
        return Promise.reject(err);
      }
    );

    // 全局响应拦截
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        NProgress.done();

        if (res.status !== 200) {
          store.setState('loadingShow', false);
          return Promise.resolve(res);
        }
        store.setState('loadingShow', false);
        return res.data;
      },
      (err: AxiosError) => {
        NProgress.done();
        store.showToast('网络开小差了~');
        store.setState('loadingShow', false);
        throw new Error(err.message);
      }
    );
  }

  // 定义请求方法
  public get<T = any>(url: string, param?: any): Promise<Result<T>> {
    const path = `${isTestEnv ? this.testHost : this.host}${url}`;
    return this.instance.get(path, { params: param });
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.post(url, data, config);
  }
}

export default new HttpRequest({ baseURL: import.meta.env.BASE_URL || '', timeout: 30000 });
