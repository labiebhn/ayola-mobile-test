import {Platform, StyleSheet} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../../../utils/fonts';

export const useStyles = (error?: boolean, editable: boolean = true) => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    form: {
      backgroundColor: editable ? colors.container : colors.card,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: error ? colors.danger : colors.border,
      paddingHorizontal: 8,
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
    },
    input: {
      ...fonts.input,
      flex: 1,
      color: colors.text,
      paddingVertical: Platform.OS === 'android' ? 8 : 12,
      paddingHorizontal: Platform.OS === 'android' ? 4 : 8,
      textAlignVertical: 'center',
      paddingTop: Platform.OS === 'ios' ? 10 : 12,
    },
    icon: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      ...fonts.label,
      color: colors.text,
    },
    helper: {
      ...fonts.small,
      color: colors.danger,
      marginTop: 6,
    },
    info: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 6,
    },
    required: {
      ...fonts.label,
      color: colors.primary,
    },
  });
};
