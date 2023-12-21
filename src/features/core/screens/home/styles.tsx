import {StyleSheet} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../../../../utils/fonts';

export const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.container,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      ...fonts.h3,
      color: colors.text,
    },
  });
};
