import { getParams } from '@eyunmy/bridge';
import { useStore } from '@/store';
import { getParameterByName } from '@/lib';
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
    store.setState('tuid', tuid);
    store.setState('uid', uid);
    store.setState('token', token);
    store.setState('isiPhoneX', isiPhoneX);
    store.setState('isGoogle', isGoogle);
  } catch (error) {
    console.log('Not on the client. Ignore this information in the test environment');
  }
};
