import service from '@/utils/http/axios';
import { VptListModel } from './model/mainModel';

enum Api {
  VPT_LIST = '/server/v1/magicHouse/getVptList'
}

export const getVptList = () => service.get<VptListModel>(Api.VPT_LIST);
