import {StyleSheet} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../../../utils/fonts';

export const useStyles = (inverse?: boolean, disabled?: boolean) => {
  const {colors} = useTheme();
  const containerColor = inverse ? colors.container : colors.primary;
  const textColor = inverse ? colors.primary : colors.container;
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: containerColor,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: colors.primary,
      opacity: disabled ? 0.7 : 1,
    },
    title: {
      ...fonts.btn,
      textAlign: 'center',
      color: textColor,
    },
  });
};
