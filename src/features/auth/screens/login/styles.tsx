import {StyleSheet} from 'react-native';

import {useTheme} from '@react-navigation/native';

export const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {},
  });
};
