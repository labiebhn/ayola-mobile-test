import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

import {INITIAL_FORM} from '../../../../constants/form';
import {useLoginSerivce} from '../../../../hooks/auth';
import {isSubmitDisabled, useForm} from '../../../../hooks/form';
import {useAppDispatch} from '../../../../hooks/store';
import {UserProfileType} from '../../../../types/user';
import {setAuthentication, setProfile} from '../../../core/store/coreSlice';
import {LoginFormProps} from './';

export const useLoginForm = (props: LoginFormProps) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const {
    user,
    action: {verifyUser},
  } = useLoginSerivce();

  const {form, setForm} = useForm({
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
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('');
  }, [form]);

  const handleSubmit = () => {
    Keyboard.dismiss();
    if (isSubmitDisabled(form)) {
      return setForm('@revalidate');
    }
    const {email, password} = form;
    const result = verifyUser(email.value, password.value);
    if (!result) {
      setMessage('Email atau Password tidak valid.');
      return;
    }
    let payload: UserProfileType = {
      id: result.id,
      email: result.email,
      name: result.name,
    };
    dispatch(setProfile(payload));
    dispatch(setAuthentication(true));
  };

  return {form, message, action: {setForm, onSubmit: handleSubmit}};
};
