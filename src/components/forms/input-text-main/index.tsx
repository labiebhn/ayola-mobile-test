import React from 'react';
import {Text, View} from 'react-native';

import {useStyles} from './styles';

const InputTextMain = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>InputTextMain</Text>
    </View>
  );
};

export default InputTextMain;
