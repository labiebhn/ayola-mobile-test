import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {ButtonMain} from '../../../../components/buttons';
import {InputTextMain} from '../../../../components/forms';
import {Gap} from '../../../../components/layouts';
import {useRegisterForm} from './hooks';
import {useStyles} from './styles';

export interface RegisterFormProps {
  navigation: any;
}

const RegisterForm: FC<RegisterFormProps> = props => {
  const styles = useStyles();
  const {
    form,
    message,
    action: {setForm, onSubmit},
  } = useRegisterForm(props);
  return (
    <View style={styles.container}>
      <InputTextMain
        {...form.name}
        onChangeText={value => setForm('name', value)}
      />
      <Gap height={16} />
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
      <InputTextMain
        {...form.password_confirm}
        onChangeText={value => setForm('password_confirm', value)}
      />
      {message ? (
        <>
          <Gap height={16} />
          <Text style={styles.message}>{message}</Text>
        </>
      ) : null}
      <Gap height={16} />
      <ButtonMain title={'Daftar'} onPress={onSubmit} />
    </View>
  );
};

export default RegisterForm;
