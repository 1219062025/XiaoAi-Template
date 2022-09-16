import { getParams } from '@eyunmy/bridge';
import { useStore } from '@/store';
import { getParameterByName } from '@/utils';
import type { Params } from '@eyunmy/bridge/types';

export const clientBridge = async () => {
  const store = useStore();

  try {
    const data = (await getParams()) as Params;
    const { uid = '', token = '', channel = '', model = '' } = data;
    const { uid: tuid = '' } = getParameterByName(['uid']);

    const isGoogle = channel === 'GooglePlay';
    let isiPhoneX = false;
    if (model.indexOf('iPhone1') !== -1) {
      isiPhoneX = true;
    }
    store.tuid = tuid;
    store.uid = uid;
    store.token = token;
    store.isiPhoneX = isiPhoneX;
    store.isGoogle = isGoogle;
  } catch (error) {
    console.log('Not on the client. Ignore this information in the test environment');
  }
};
