import { combineReducers } from '@reduxjs/toolkit';

import namesReducer  from './slices/namesSlice';
import jobsReducer  from './slices/jobsSlice';

export const rootReducer = combineReducers({
    names: namesReducer,
    jobs: jobsReducer
});