import {StyleSheet} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../../../utils/fonts';

export const useStyles = () => {
  const {colors} = useTheme();
  const inputOtpSize = 40;
  return StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
    },
    otp: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    inputOtpContainer: {
      width: inputOtpSize,
      height: inputOtpSize,
      backgroundColor: colors.container,
      borderRadius: inputOtpSize,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colors.border,
    },
    inputOtp: {
      ...fonts.h5,
      width: inputOtpSize,
      height: inputOtpSize,
      color: colors.text,
    },
    timer: {
      alignItems: 'center',
    },
    timerTick: {
      ...fonts.h7,
      color: colors.text,
    },
  });
};
