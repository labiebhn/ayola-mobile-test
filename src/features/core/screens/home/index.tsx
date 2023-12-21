import React from 'react';
import {Text, View} from 'react-native';
import {shallowEqual} from 'react-redux';

import {ButtonText} from '../../../../components/buttons';
import {INITIAL_USER_PROFILE} from '../../../../constants/user';
import {useAppDispatch, useAppSelector} from '../../../../hooks/store';
import {setAuthentication, setProfile} from '../../store/coreSlice';
import {useStyles} from './styles';

const Home = ({navigation}: any) => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const profile = useAppSelector(state => state.core.profile, shallowEqual);

  const onLogout = () => {
    dispatch(setAuthentication(false));
    dispatch(setProfile(INITIAL_USER_PROFILE));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! {profile.name}.</Text>
      <ButtonText title={'Logout'} onPress={onLogout} />
    </View>
  );
};

export default Home;
