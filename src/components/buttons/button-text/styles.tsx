import {StyleSheet} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../../../utils/fonts';

export const useStyles = (disabled?: boolean) => {
  const {colors} = useTheme();
  return StyleSheet.create({
    title: {
      ...fonts.h7,
      color: colors.primary,
      opacity: disabled ? 0.7 : 1,
    },
  });
};
