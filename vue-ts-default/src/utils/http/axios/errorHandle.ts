import { AxiosResponse } from 'axios';
export function errorHandle(response: AxiosResponse) {
  let errMsg = '';
  const { status, message } = response.data;

  switch (status) {
    case 400:
      errMsg = '请求错误(400)';
      break;
    case 401:
      errMsg = '未授权，请重新登录(401)';
      break;
    case 403:
      errMsg = '拒绝访问(403)';
      break;
    case 404:
      errMsg = '请求出错(404)';
      break;
    case 408:
      errMsg = '请求超时(408)';
      break;
    case 500:
      errMsg = '服务器错误(500)';
      break;
    case 501:
      errMsg = '服务未实现(501)';
      break;
    case 502:
      errMsg = '网络错误(502)';
      break;
    case 503:
      errMsg = '服务不可用(503)';
      break;
    case 504:
      errMsg = '网络超时(504)';
      break;
    case 505:
      errMsg = 'HTTP版本不受支持(505)';
      break;
    default:
      errMsg = `连接出错(${response.status})!${message}`;
  }
  console.log(errMsg);
}
