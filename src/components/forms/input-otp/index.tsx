import React, {FC} from 'react';
import {View} from 'react-native';

import {OTP_LENGTH} from '../../../constants/app';
import {fillArray} from '../../../utils/helpers';
import {Gap} from '../../layouts';
import InputTextOtp from './contents/input';
import TimerResendOtp from './contents/timer';
import {useInputOtp} from './hooks';
import {useStyles} from './styles';

export interface InputOtpProps {
  value: string[];
  onOtpChange?(value: string[]): void;
}

const InputOtp: FC<InputOtpProps> = props => {
  const styles = useStyles();
  const {
    value,
    inputRefs,
    action: {handleChangeOtp},
  } = useInputOtp(props);

  const renderInput = () => {
    return fillArray(OTP_LENGTH).map((_, i) => {
      return (
        <InputTextOtp
          key={i}
          forwardedRef={inputRefs[i]}
          value={value[i]}
          onChangeText={value => handleChangeOtp(i, value)}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.otp}>{renderInput()}</View>
      <Gap height={32} />
      <TimerResendOtp />
    </View>
  );
};

export default InputOtp;
