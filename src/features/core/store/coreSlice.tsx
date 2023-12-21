import {createSlice} from '@reduxjs/toolkit';

import {INITIAL_USER_PROFILE} from '../../../constants/user';
import {UserProfileType} from '../../../types/user';

interface CoreState {
  auth: boolean;
  profile: UserProfileType;
}

const initialState: CoreState = {
  auth: false,
  profile: INITIAL_USER_PROFILE,
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setAuthentication: (state, action) => {
      const {payload} = action;
      state.auth = payload;
    },
    setProfile: (state, action) => {
      const {payload} = action;
      state.profile = payload;
    },
  },
  extraReducers: builder => {},
});

export const {setAuthentication, setProfile} = coreSlice.actions;

export default coreSlice.reducer;
