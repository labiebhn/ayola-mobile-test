import {useState} from 'react';
import {shallowEqual} from 'react-redux';

import {UserDataType} from '../types/user';
import {useAppSelector} from './store';

export const useLoginSerivce = () => {
  const userData = useAppSelector(state => state.user.data, shallowEqual);

  const [user, setUser] = useState<UserDataType>();

  const verifyUser = (email: string, password: string) => {
    const selectedUser = userData.filter(item => item.email === email)?.[0];
    if (!selectedUser || selectedUser.password !== password) return null;
    setUser(selectedUser);
    return selectedUser;
  };

  return {user, action: {verifyUser}};
};

export const useRegisterService = () => {
  const userData = useAppSelector(state => state.user.data, shallowEqual);

  const verifyRegistration = (email: string): boolean => {
    const selectedUser = userData.filter(item => item.email === email)?.[0];
    return !Boolean(selectedUser);
  };

  return {action: {verifyRegistration}};
};
