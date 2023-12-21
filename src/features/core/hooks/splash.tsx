import {useCallback, useEffect} from 'react';
import {shallowEqual} from 'react-redux';

import {useAppDispatch, useAppSelector} from '../../../hooks/store';
import {setHasSplash} from '../store/splashSlice';

export const useSplash = (props: any) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.core.auth, shallowEqual);

  const nextRoute = useCallback(() => {
    setTimeout(() => {
      navigation.replace(auth ? 'home' : 'login');
      dispatch(setHasSplash(true));
    }, 1000);
  }, [auth]);

  useEffect(() => {
    nextRoute();
  }, [nextRoute]);

  return {};
};
