import service from '@/utils/http/axios';
import { Template } from '#/index';

enum Api {
  GET_TEMPLATE = '/server/v1/vue_ts_default/template'
}

export const getTemplateList = () => service.domainGet<Template[]>(Api.GET_TEMPLATE);
