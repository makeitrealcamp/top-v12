// With Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokeById = createAsyncThunk(
  'poke/fetchById',
  async (pokeId, thunkAPI) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    const data = await response.json();
    return data;
  }
)

const pokeDataSlice = createSlice({
  name: 'pokeData',
  initialState: {
    data: null
  },
  reducers: {
    setData: (state, pokeData) => {
      state.data = pokeData
    }
  },
  extraReducers: {
    [fetchPokeById.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  }
});



export default pokeDataSlice;
