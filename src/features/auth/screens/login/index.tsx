import React from 'react';
import {Text, View} from 'react-native';

import {useStyles} from './styles';

const Login = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
