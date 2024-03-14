import { configureStore } from '@reduxjs/toolkit';
import booleanSlice from './features/booleanSlice';

const store = configureStore({
  reducer: {
    boolean: booleanSlice,
  },
});

export default store;