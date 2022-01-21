// action
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

const initialState = {
  count: 0,
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT_COUNT:
      return { count: state.count + 1 }
    case DECREMENT_COUNT:
      return { count: state.count - 1 }
    default: {
      return state
    }
  }
}

export default reducer;

// With Redux Toolkit
// import { createSlice } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     count: 0
//   },
//   reducers: {
//     incremented: state => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.count += 1
//     },
//     decremented: state => {
//       state.count -= 1
//     }
//   }
// });

// export const { incremented, decremented } = counterSlice.actions;
// export default counterSlice;
