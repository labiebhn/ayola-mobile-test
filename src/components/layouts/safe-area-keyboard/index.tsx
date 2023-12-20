import React, {FC, ReactNode} from 'react';
import {KeyboardAvoidingView, KeyboardAvoidingViewProps, Platform, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

export interface SafeAreaKeyboardProps extends KeyboardAvoidingViewProps {
  children: ReactNode;
}

const SafeAreaKeyboard: FC<SafeAreaKeyboardProps> = props => {
  const {children} = props;
  if (Platform.OS === 'ios') {
    return <KeyboardAvoidingView {...props}>{children}</KeyboardAvoidingView>;
  } else {
    return <View {...props}>{children}</View>;
  }
};

export default SafeAreaKeyboard;
