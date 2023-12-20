import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ButtonMain} from '../../../../components/buttons';
import {InputTextMain} from '../../../../components/forms';
import {Gap} from '../../../../components/layouts';
import {useLoginForm} from './hooks';
import {useStyles} from './styles';

export interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = props => {
  const styles = useStyles();
  const {
    form,
    action: {setForm, onSubmit},
  } = useLoginForm(props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Gap height={32} />
      <InputTextMain
        {...form.email}
        onChangeText={value => setForm('email', value)}
      />
      <Gap height={16} />
      <InputTextMain
        {...form.password}
        onChangeText={value => setForm('password', value)}
      />
      <Gap height={16} />
      <ButtonMain title={'Login'} onPress={onSubmit} />
      <Gap height={8} />
      <ButtonMain inverse title={'Daftar'} />
    </View>
  );
};

export default LoginForm;
