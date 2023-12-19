import React from 'react';
import {Text, View} from 'react-native';

import {useStyles} from './styles';

const ActivateAccount = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>ActivateAccount</Text>
    </View>
  );
};

export default ActivateAccount;
