import {Keyboard} from 'react-native';

import {INITIAL_FORM} from '../../../../constants/form';
import {isSubmitDisabled, useForm} from '../../../../hooks/form';
import {UserDataType} from '../../../../types/user';
import {RegisterFormProps} from './';

export const useRegisterForm = (props: RegisterFormProps) => {
  const {navigation} = props;
  const {form, setForm} = useForm({
    name: {
      ...INITIAL_FORM,
      label: 'Nama',
      placeholder: 'Contoh: Budi',
    },
    email: {
      ...INITIAL_FORM,
      label: 'Email',
      placeholder: 'Contoh: budi@example.com',
      type: 'email',
    },
    password: {
      ...INITIAL_FORM,
      label: 'Kata Sandi',
      placeholder: 'Masukkan Kata Sandi',
      type: 'password',
    },
    password_confirm: {
      ...INITIAL_FORM,
      label: 'Konfirmasi Kata Sandi',
      placeholder: 'Masukkan Konfirmasi Kata Sandi',
      type: 'password',
    },
  });

  const handleSubmit = () => {
    if (isSubmitDisabled(form)) {
      return setForm('@revalidate');
    }
    Keyboard.dismiss();
    const {name, email, password} = form;
    let payload = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    navigation.navigate('activate-account', payload);
  };

  return {form, action: {setForm, onSubmit: handleSubmit}};
};
