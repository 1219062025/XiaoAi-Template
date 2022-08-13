import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';

const templateList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    const item: Record<string, any> = {};
    item.id = Random.id();
    item.nick = Random.cname();
    item.headUrl = Random.image('100x100', '#50B347', '#FFF', 'test');
    result.push(item);
  }
  return result;
})();

export default [
  {
    url: '/server/v1/vue_ts_default/template',
    timeout: 100,
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: templateList,
        message: 'ok'
      };
    }
  }
] as MockMethod[];
