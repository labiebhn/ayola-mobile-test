import {useCallback, useEffect} from 'react';
import {shallowEqual} from 'react-redux';

import {useAppSelector} from '../../../hooks/store';

export const useSplash = (props: any) => {
  const {navigation} = props;
  const auth = useAppSelector(state => state.core.auth, shallowEqual);

  const nextRoute = useCallback(() => {
    setTimeout(() => {
      navigation.replace(auth ? 'home' : 'login');
    }, 1000);
  }, [auth]);

  useEffect(() => {
    nextRoute();
  }, [nextRoute]);

  return {};
};
