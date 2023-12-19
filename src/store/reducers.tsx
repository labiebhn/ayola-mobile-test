import {combineReducers} from '@reduxjs/toolkit';

import coreSlice from '../features/core/store/coreSlice';
import userSlice from '../features/core/store/userSlice';

const rootReducers = combineReducers({
  core: coreSlice,
  user: userSlice,
});

export default rootReducers;
