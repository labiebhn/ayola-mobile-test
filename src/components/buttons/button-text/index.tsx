import React, {FC} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps, View} from 'react-native';

import {useStyles} from './styles';

export interface ButtonTextProps extends TouchableOpacityProps {
  title: string;
}

const ButtonText: FC<ButtonTextProps> = props => {
  const {title, disabled} = props;
  const styles = useStyles(disabled);
  return (
    <TouchableOpacity {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonText;
