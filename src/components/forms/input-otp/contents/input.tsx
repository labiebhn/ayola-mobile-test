import React, {FC, ForwardedRef} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  TextInputProps,
  View
} from 'react-native';

import {useStyles} from '../styles';

export interface InputTextOtpProps extends TextInputProps {
  forwardedRef?: ForwardedRef<TextInput>;
}

const InputTextOtp: FC<InputTextOtpProps> = props => {
  const {forwardedRef, onChangeText} = props;
  const styles = useStyles();

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    const {key} = e.nativeEvent;
    const isNumber = /^\d$/.test(key);
    if (key === 'Backspace' && props.value === '') {
      onChangeText?.('');
    } else if (isNumber) {
      onChangeText?.(key);
    }
  };

  return (
    <View style={styles.inputOtpContainer}>
      <TextInput
        {...props}
        ref={forwardedRef}
        style={styles.inputOtp}
        placeholder={'0'}
        textAlign={'center'}
        textAlignVertical={'center'}
        keyboardType={'numeric'}
        maxLength={1}
        onKeyPress={handleKeyPress}
      />
    </View>
  );
};

export default InputTextOtp;
