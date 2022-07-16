import { getParams } from '@eyunmy/bridge';
import { useMainStore } from '@/store/main';
import { getParameterByName } from '@/lib';

export const clientBridge = async () => {
  const store = useMainStore();

  try {
    const data = await getParams();
    const { uid = '', token = '', channel = '', model = '' } = data || {};
    const { uid: tuid } = getParameterByName(['uid']);

    const isGoogle = channel === 'GooglePlay';
    let isiPhoneX = false;
    if (model.indexOf('iPhone1') !== -1) {
      isiPhoneX = true;
    }

    tuid && store.setState('tuid', tuid);
    store.setState('uid', uid);
    store.setState('token', token);
    store.setState('isiPhoneX', isiPhoneX);
    store.setState('isGoogle', isGoogle);
  } catch (error) {
    console.log(error);
  }
};
