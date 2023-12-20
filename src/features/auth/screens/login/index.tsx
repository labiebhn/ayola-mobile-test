import React from 'react';
import {ScrollView, View} from 'react-native';

import {SafeAreaKeyboard} from '../../../../components/layouts';
import {LoginForm} from '../../containers';
import {useStyles} from './styles';

const Login = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <SafeAreaKeyboard style={{flex: 1}} behavior={'padding'}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.content}>
            <LoginForm />
          </View>
        </ScrollView>
      </SafeAreaKeyboard>
    </View>
  );
};

export default Login;
