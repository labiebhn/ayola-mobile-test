import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {ButtonMain} from '../../../../components/buttons';
import {InputOtp} from '../../../../components/forms';
import {Gap} from '../../../../components/layouts';
import {OTP_LENGTH} from '../../../../constants/app';
import {useActivateAccountForm} from './hooks';
import {useStyles} from './styles';

export interface ActivateAccountFormProps {
  navigation: any;
  route: any;
}

const ActivateAccountForm: FC<ActivateAccountFormProps> = props => {
  const styles = useStyles();
  const {
    otp,
    otpString,
    message,
    action: {setOtp, onSubmit},
  } = useActivateAccountForm(props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masukkan kode otentikasi</Text>
      <Gap height={32} />
      <InputOtp value={otp} onOtpChange={setOtp} />
      <Gap height={32} />
      <ButtonMain
        title={'Aktivasi'}
        disabled={otpString.length < OTP_LENGTH}
        onPress={onSubmit}
      />
      {message ? (
        <View>
          <Gap height={16} />
          <Text style={styles.message}>{message}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default ActivateAccountForm;
