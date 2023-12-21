import React, {FC} from 'react';
import {Text, TouchableNativeFeedback, TouchableNativeFeedbackProps, View} from 'react-native';

import {useStyles} from './styles';

export interface ButtonMainProps extends TouchableNativeFeedbackProps {
  title: string;
  inverse?: boolean;
}

const ButtonMain: FC<ButtonMainProps> = props => {
  const {title, inverse, disabled} = props;
  const styles = useStyles(inverse, disabled);
  return (
    <TouchableNativeFeedback {...props}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ButtonMain;
