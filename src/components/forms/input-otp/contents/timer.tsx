import moment from 'moment';
import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {OTP_TIME} from '../../../../constants/app';
import {calculateTimeDifference} from '../../../../utils/helpers';
import {ButtonText} from '../../../buttons';
import {Gap} from '../../../layouts';
import {useStyles} from '../styles';

export interface TimerResendOtpProps {
  onResend?(): void;
}

const TimerResendOtp: FC<TimerResendOtpProps> = props => {
  const {onResend} = props;
  const styles = useStyles();

  const [timer, setTimer] = useState(0);
  const [lastResendTime, setLastResendTime] = useState(moment().valueOf());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(calculateTimeDifference(lastResendTime, OTP_TIME));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [lastResendTime]);

  const handleResend = () => {
    setLastResendTime(moment().valueOf());
    onResend?.();
  };

  return (
    <View style={styles.timer}>
      <Text style={styles.timerTick}>
        ({moment(timer * 1000).format('mm:ss')})
      </Text>
      <Gap height={8} />
      <ButtonText
        title={'Kirim Ulang'}
        disabled={timer > 0}
        onPress={handleResend}
      />
    </View>
  );
};

export default TimerResendOtp;
