import {useRef, useState} from 'react';
import {TextInput} from 'react-native';

import {OTP_LENGTH} from '../../../constants/app';
import {fillArray} from '../../../utils/helpers';
import {InputOtpProps} from './';

export const useInputOtp = (props: InputOtpProps) => {
  const {value, onOtpChange} = props;
  const dumpArray = fillArray(OTP_LENGTH);
  const inputRefs = dumpArray.map(_ => useRef<TextInput>(null));

  const onInputFocus = (index: number, value: string) => {
    let refIndex = value ? index + 1 : index - 1;
    if (refIndex < 0 || refIndex >= OTP_LENGTH) return;
    inputRefs[refIndex].current?.focus();
  };

  const onChangeValue = (index: number, _value: string) => {
    let newValue = [...value];
    newValue[index] = _value;
    onOtpChange?.(newValue);
  };

  const handleChangeOtp = (index: number, value: string) => {
    onChangeValue(index, value);
    onInputFocus(index, value);
  };

  return {
    value,
    inputRefs,
    action: {handleChangeOtp},
  };
};
