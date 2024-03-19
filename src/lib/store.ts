
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { pokemonDataSlice } from './pokemonData/index'
import { pokemonInputDataSlice } from './pokemonInputData/index'

const store = configureStore({
  reducer: {
    pokemonData: pokemonDataSlice.reducer,
    pokemonInputData: pokemonInputDataSlice.reducer,

  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch