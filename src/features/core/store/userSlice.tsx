import {createSlice} from '@reduxjs/toolkit';

import {UserDataType} from '../../../types/user';

interface UserState {
  data: UserDataType[];
}

const initialState: UserState = {
  data: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setStoreUserData: (state, action) => {
      const {payload} = action;
      let data: UserDataType = {
        ...payload,
        id: state.data.length + 1,
      };
      state.data = [...state.data, data];
    },
  },
  extraReducers: builder => {},
});

export const {setStoreUserData} = userSlice.actions;

export default userSlice.reducer;
