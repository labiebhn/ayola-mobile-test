import {createRef, useState} from 'react';
import {useColorScheme} from 'react-native';
import {shallowEqual} from 'react-redux';

import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack';

import Splash from '../features/core/screens/splash';
import {useAppSelector} from '../hooks/store';
import {themes} from '../utils/themes';
import {privateRoutes, publicRoutes} from './routes';
import {useStyles} from './styles';

const Stack = createNativeStackNavigator();

export const navigationRef = createRef<NavigationContainerRef<{}>>();
export type NavigationProps = NativeStackNavigationProp<{}>;

const Routes = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? themes.dark : themes.default;
  const {colors} = theme;
  const styles = useStyles(colors);
  const auth = useAppSelector(state => state.core.auth, shallowEqual);
  const routes = auth ? privateRoutes : publicRoutes;

  return (
    <NavigationContainer ref={navigationRef} theme={theme as any}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          key={'splash'}
          name={'splash'}
          options={{headerShown: false}}
          component={Splash}
        />
        {routes.map(route => {
          return <Stack.Screen {...route} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
