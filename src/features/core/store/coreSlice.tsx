import {createSlice} from '@reduxjs/toolkit';

interface CoreState {
  auth: boolean;
}

const initialState: CoreState = {
  auth: false,
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const {} = coreSlice.actions;

export default coreSlice.reducer;
