import React, {FC} from 'react';
import {Text, TextInput, TextInputProps, TouchableWithoutFeedback, View} from 'react-native';

import {IconEye, IconEyeOff} from '../../../assets';
import {InputTextType} from '../../../types/form';
import {useInputTextMain} from './hooks';
import {useStyles} from './styles';

export interface InputTextMainProps extends TextInputProps {
  label?: string;
  type?: InputTextType;
  error?: boolean;
  message?: string;
  required?: boolean;
}

const InputTextMain: FC<InputTextMainProps> = props => {
  const {type, label, required, error, editable, message} = props;
  const styles = useStyles(error, editable);
  const {
    secure,
    action: {setSecure, handleChangeText},
  } = useInputTextMain(props);

  return (
    <View style={styles.container}>
      {label ? (
        <View style={styles.info}>
          <Text style={styles.label}>
            {label} {required ? <Text style={styles.required}> *</Text> : null}
          </Text>
        </View>
      ) : null}
      <View style={styles.form}>
        <TextInput
          {...props}
          style={styles.input}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          autoCapitalize={type === 'email' ? 'none' : undefined}
          secureTextEntry={secure}
          onChangeText={handleChangeText}
        />
        {type === 'password' ? (
          <TouchableWithoutFeedback onPress={() => setSecure(!secure)}>
            <View style={styles.icon}>
              {secure ? <IconEyeOff /> : <IconEye />}
            </View>
          </TouchableWithoutFeedback>
        ) : null}
      </View>
      {message ? <Text style={styles.helper}>{message}</Text> : null}
    </View>
  );
};

export default InputTextMain;
