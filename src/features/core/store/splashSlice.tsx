import {createSlice} from '@reduxjs/toolkit';

interface UserState {
  hasSplash: boolean;
}

const initialState: UserState = {
  hasSplash: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setHasSplash: (state, action) => {
      const {payload} = action;
      state.hasSplash = payload;
    },
  },
  extraReducers: builder => {},
});

export const {setHasSplash} = userSlice.actions;

export default userSlice.reducer;
