import React from 'react';
import {Text, View} from 'react-native';

import {useSplash} from '../../hooks/splash';
import {useStyles} from './styles';

const Splash = (props: any) => {
  const styles = useStyles();
  const {} = useSplash(props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayola</Text>
      <Text style={styles.description}>Take Home Test</Text>
    </View>
  );
};

export default Splash;
