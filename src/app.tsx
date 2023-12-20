import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Splash from './features/core/screens/splash';
import Routes from './routes';

const App = () => {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;
