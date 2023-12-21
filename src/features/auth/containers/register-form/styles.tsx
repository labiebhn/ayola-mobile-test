import {StyleSheet} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../../../../utils/fonts';

export const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {},
    message: {
      ...fonts.p,
      color: colors.danger,
    },
  });
};
