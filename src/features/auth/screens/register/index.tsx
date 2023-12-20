import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import {SafeAreaKeyboard} from '../../../../components/layouts';
import {RegisterForm} from '../../containers';
import {useStyles} from './styles';

const Register = ({navigation}: any) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <SafeAreaKeyboard style={{flex: 1}} behavior={'padding'}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps={'handled'}>
          <View style={styles.content}>
            <RegisterForm navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaKeyboard>
    </View>
  );
};

export default Register;
