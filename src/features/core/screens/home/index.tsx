import React from 'react';
import {Text, View} from 'react-native';

import {useStyles} from './styles';

const Home = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
