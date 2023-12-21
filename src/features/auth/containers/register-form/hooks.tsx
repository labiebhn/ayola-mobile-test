import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

import {INITIAL_FORM} from '../../../../constants/form';
import {useRegisterService} from '../../../../hooks/auth';
import {isSubmitDisabled, useForm} from '../../../../hooks/form';
import {RegisterFormProps} from './';

export const useRegisterForm = (props: RegisterFormProps) => {
  const {navigation} = props;
  const {
    action: {verifyRegistration},
  } = useRegisterService();

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
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('');
  }, [form]);

  const handleSubmit = () => {
    if (isSubmitDisabled(form)) {
      return setForm('@revalidate');
    }
    Keyboard.dismiss();
    const {name, email, password} = form;
    const userValid = verifyRegistration(email.value);
    if (!userValid) {
      return setMessage('Email sudah terdaftar.');
    }
    let payload = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    navigation.navigate('activate-account', payload);
  };

  return {form, message, action: {setForm, onSubmit: handleSubmit}};
};
