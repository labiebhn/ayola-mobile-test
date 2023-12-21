import {StyleSheet} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../../../../utils/fonts';

export const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    title: {
      ...fonts.h4,
      color: colors.text,
      textAlign: 'center',
    },
    message: {
      ...fonts.p,
      color: colors.danger,
      textAlign: 'center',
    },
  });
};
