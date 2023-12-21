import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

import CONFIGS from '../../../../configs';
import {OTP_LENGTH} from '../../../../constants/app';
import {useAppDispatch} from '../../../../hooks/store';
import {fillArray} from '../../../../utils/helpers';
import {setStoreUserData} from '../../../core/store/userSlice';
import {ActivateAccountFormProps} from './';

export const useActivateAccountForm = (props: ActivateAccountFormProps) => {
  const {navigation, route} = props;
  const {params} = route;
  const dumpArray = fillArray(OTP_LENGTH);

  const dispatch = useAppDispatch();

  const [otp, setOtp] = useState<string[]>(dumpArray.map(_ => ''));
  const otpString = otp.join('');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    setMessage('');
  }, [otp]);

  const validateOtp = () => {
    return otpString === CONFIGS.OTP_VALUE;
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
    const isOtpValid = validateOtp();
    if (!otpString.length || !isOtpValid) {
      return setMessage('Kode otentikasi tidak valid.');
    }
    dispatch(setStoreUserData(params));
    navigation.reset({
      index: 0,
      routes: [{name: 'login'}],
    });
  };

  return {otp, otpString, message, action: {setOtp, onSubmit: handleSubmit}};
};
