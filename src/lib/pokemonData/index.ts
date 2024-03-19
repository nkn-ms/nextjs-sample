import { PokemonData as PokeData } from '@/types/pokemon/index'
import { configureStore, createSlice } from '@reduxjs/toolkit';

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server. Let's not worry about that now
 */

type pokemonDataType = {
	id: number;
	data: { [K in string]: PokeData[] }
}

const pokemonData: pokemonDataType = {
	id: 1,
	data: {
		1: [],
		2: [],
		3: []
	}
}

/*
 * The store is created here.
 * You can read more about Redux Toolkit's slices in the docs:
 * https://redux-toolkit.js.org/api/createSlice
 */
export const pokemonDataSlice = createSlice({
	name: 'pokemonData',
	initialState: pokemonData,
	reducers: {
		updatePokemonDataId: (state, action) => {
			const selectedId = action.payload;
			state.id = selectedId
		},
		updatePokemonData: (state, action) => {
			console.log("updatePokemonData action", action);

			const { id, data }: { id: number, data: PokeData[] } = action.payload;
			console.log(id, data);
			state.data[id].push(...data)
			state.data[id].sort((a, b) => {
				return a.id - b.id
			})
		},
	},
});

// The actions contained in the slice are exported for usage in our components
export const { updatePokemonDataId, updatePokemonData } = pokemonDataSlice.actions;
