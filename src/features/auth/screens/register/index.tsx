import React from 'react';
import {Text, View} from 'react-native';

import {useStyles} from './styles';

const Register = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Register</Text>
    </View>
  );
};

export default Register;
