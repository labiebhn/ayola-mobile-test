import {combineReducers} from '@reduxjs/toolkit';

import coreSlice from '../features/core/store/coreSlice';
import splashSlice from '../features/core/store/splashSlice';
import userSlice from '../features/core/store/userSlice';

const rootReducers = combineReducers({
  core: coreSlice,
  user: userSlice,
  splash: splashSlice,
});

export default rootReducers;
