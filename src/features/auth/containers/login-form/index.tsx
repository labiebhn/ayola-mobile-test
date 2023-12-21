import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {ButtonMain} from '../../../../components/buttons';
import {InputTextMain} from '../../../../components/forms';
import {Gap} from '../../../../components/layouts';
import {useLoginForm} from './hooks';
import {useStyles} from './styles';

export interface LoginFormProps {
  navigation: any;
}

const LoginForm: FC<LoginFormProps> = props => {
  const {navigation} = props;
  const styles = useStyles();
  const {
    form,
    message,
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
      {message ? (
        <>
          <Gap height={16} />
          <Text style={styles.message}>{message}</Text>
        </>
      ) : null}
      <Gap height={16} />
      <ButtonMain title={'Login'} onPress={onSubmit} />
      <Gap height={8} />
      <ButtonMain
        inverse
        title={'Daftar'}
        onPress={() => navigation.navigate('register')}
      />
    </View>
  );
};

export default LoginForm;
