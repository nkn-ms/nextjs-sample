/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
 */
import { configureStore, createSlice } from '@reduxjs/toolkit';

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server. Let's not worry about that now
 */

type pokemonInputDataType = {
	data: { [K in string]: string }
}

const pokemonInputData: pokemonInputDataType = {
	data: {
		1: '1,2,3',
		2: '101,102,103',
		3: '201,202,203'
	}
}

/*
 * The store is created here.
 * You can read more about Redux Toolkit's slices in the docs:
 * https://redux-toolkit.js.org/api/createSlice
 */
export const pokemonInputDataSlice = createSlice({
	name: 'pokemonInputData',
	initialState: pokemonInputData,
	reducers: {
		updatePokemonInputData: (state, action) => {
			console.log('updatePokemonInputData');
			console.log(state);
			console.log(action);

			const { id, inputData } = action.payload;
			state.data[id] = inputData
		},
	},
});

// The actions contained in the slice are exported for usage in our components
export const { updatePokemonInputData } = pokemonInputDataSlice.actions;
