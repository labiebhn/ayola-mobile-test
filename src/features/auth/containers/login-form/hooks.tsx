import {INITIAL_FORM} from '../../../../constants/form';
import {isSubmitDisabled, useForm} from '../../../../hooks/form';
import {LoginFormProps} from './';

export const useLoginForm = (props: LoginFormProps) => {
  const {form, setForm} = useForm({
    email: {
      ...INITIAL_FORM,
      label: 'Email',
      placeholder: 'Contoh: budi@example.com',
    },
    password: {
      ...INITIAL_FORM,
      label: 'Kata Sandi',
      placeholder: 'Masukkan Kata Sandi',
      type: 'password',
    },
  });

  const handleSubmit = () => {
    if (isSubmitDisabled(form)) {
      return setForm('@revalidate');
    }
  };

  return {form, action: {setForm, onSubmit: handleSubmit}};
};
