import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "./reducers/counterReducer";
import pokeDataSlice from './reducers/pokeDataReducer';

/**
 * With Redux Toolkit
 */
const rootReducer = {
  counterReducer: counterSlice.reducer,
  pokeDataReducer: pokeDataSlice.reducer
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
