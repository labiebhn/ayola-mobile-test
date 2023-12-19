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
  reducers: {},
  extraReducers: builder => {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
