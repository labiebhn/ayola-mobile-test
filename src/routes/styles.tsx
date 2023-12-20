import {StyleSheet} from 'react-native';

import {fontFamily, fonts} from '../utils/fonts';
import {palettes} from '../utils/palettes';

export const useStyles = (colors = palettes.default) =>
  StyleSheet.create({
    headerStyle: {backgroundColor: colors.container},
    headerTitleStyle: {
      ...fonts.h4,
      color: colors.text,
    },
  });
