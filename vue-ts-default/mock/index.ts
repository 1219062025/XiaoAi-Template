import { MockMethod } from 'vite-plugin-mock';

const accountList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: `${index}`,
      account: '@first',
      email: '@email',
      nickname: '@cname()',
      'role|1': ['管理员', '开发', '用户'],
      createTime: '@datetime',
      remark: '@cword(10,20)',
      'status|1': ['0', '1']
    });
  }
  return result;
})();

export default [
  {
    url: '/account/getAccountList',
    timeout: 100,
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: accountList,
        message: 'ok'
      };
    }
  }
] as MockMethod[];
