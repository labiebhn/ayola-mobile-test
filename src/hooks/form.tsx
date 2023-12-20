import {useState} from 'react';

import {InitialFormType} from '../types/form';
import {
  validateConfirmPassword,
  validateEmail,
  validateMinMaxChar,
  validatePassword,
  Validation
} from '../utils/validation';

export interface InitialForm {
  [key: string]: InitialFormType;
}

export const useForm = (initialForm: InitialForm) => {
  const [form, setForm] = useState<InitialForm>(initialForm);

  const validateFormValue = (key: string, value: any, formNew?: any) => {
    const {required, label} = form[key];
    let error = false;
    let message = '';
    let validate: Validation = {message: '', error: false};
    if (required) {
      if (value) {
        switch (key) {
          case 'name':
            validate = validateMinMaxChar(
              label,
              value,
              2,
              50,
              'no-special-char',
            );
            break;
          case 'email':
            validate = validateEmail(value);
            break;
          case 'password':
            validate = validatePassword(value, label);
            break;
          case 'password_confirm':
            const {password} = formNew || form;
            validate = validateConfirmPassword(password.value, value, label);
            break;
          default:
            break;
        }
        error = validate.error;
        message = validate.message;
      } else {
        error = true;
        message = `${label} tidak boleh kosong`;
      }
    }

    return {error, message, value};
  };

  const revalidateAllForm = () => {
    let formNew = {...form};
    Object.keys(form).forEach(key => {
      let payload = {};
      let validate = validateFormValue(key, form[key].value);
      payload = {
        value: validate.value,
        message: validate.message,
        error: validate.error,
      };

      formNew = {
        ...formNew,
        [key]: {
          ...formNew[key],
          ...payload,
        },
      };
    });
    setForm(formNew);
  };

  const setFormValue = (key: string, value?: any) => {
    if (key === '@reset') {
      /* ex: setForm('@reset') */
      return setForm(initialForm);
    } else if (key === '@override') {
      /* ex: setForm('@override', {...form, ...formNew}) */
      return setForm(value);
    } else if (key === '@revalidate') {
      /* ex: setForm('@revalidate') */
      revalidateAllForm();
    } else {
      let payload = {};
      let validate = validateFormValue(key, value);
      payload = {
        value: validate.value,
        message: validate.message,
        error: validate.error,
      };

      let formNew = {
        ...form,
        [key]: {
          ...form[key],
          ...payload,
        },
      };

      if (key === 'password' && formNew?.confirm_password?.value) {
        validate = validateFormValue(
          'password_confirm',
          formNew.confirm_password.value,
          formNew,
        );
        payload = {
          value: validate.value,
          message: validate.message,
          error: validate.error,
        };
        formNew = {
          ...formNew,
          ['password_confirm']: {
            ...formNew['password_confirm'],
            ...payload,
          },
        };
      }

      setForm(formNew);
    }
  };

  return {
    form,
    setForm: setFormValue,
  };
};

export const isSubmitDisabled = (form: InitialForm) => {
  let validate = Object.keys(form).map((key, index) => {
    if (
      typeof form[key]?.value === 'object' &&
      form[key]?.value !== undefined &&
      form[key]?.value !== null
    ) {
      if (
        !form[key]?.error &&
        (form[key]?.value?.length > 0 ||
          Object.keys(form[key]?.value)?.length > 0)
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      if (!form[key]?.error) {
        if (form[key]?.required && !form[key]?.value) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  });

  return validate.includes(true);
};
