import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";

/**
 * With Redux Toolkit
 */
// const rootReducer = combineReducers({
//   counterReducer: counterSlider.reducer,
// });

const rootReducer = combineReducers({
  counterReducer,
});

const store = createStore(
  rootReducer,
  // Middleware for Chrome extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
