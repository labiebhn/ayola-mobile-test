import {useEffect, useState} from 'react';

import {InputTextMainProps} from './';

export const useInputTextMain = (props: InputTextMainProps) => {
  const {type, secureTextEntry, onChangeText} = props;
  const [secure, setSecure] = useState(secureTextEntry);

  useEffect(() => {
    if (type === 'password') {
      setSecure(true);
    }
  }, [type]);

  const handleChangeText = (value: any) => {
    onChangeText?.(value);
  };

  return {secure, action: {setSecure, handleChangeText}};
};
