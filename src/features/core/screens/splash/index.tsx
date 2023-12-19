import React from 'react';
import {Text, View} from 'react-native';

import {useAppSelector} from '../../../../hooks/store';
import {useStyles} from './styles';

const Splash = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
