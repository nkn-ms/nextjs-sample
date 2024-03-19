import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import store from '@/lib/store'

import { PokemonTabs } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'components/organisms/PokemonTabs',
	component: PokemonTabs,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	},
} satisfies Meta<typeof PokemonTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const TABLE_HEAD = ["image", "id", "name", "category", "height", "weight", "type"];

const pokemonData = [{
	name: "Bulbasaur",
	category: "Seed Pokémon",
	type: ['grass', 'poison'],
	height: '7',
	weight: '69',
	id: '1',
	img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
},
{
	name: "Bulbasaur",
	category: "Seed Pokémon",
	type: ['grass', 'poison'],
	height: '7',
	weight: '69',
	id: '1',
	img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
},
{
	name: "Bulbasaur",
	category: "Seed Pokémon",
	type: ['grass', 'poison'],
	height: '7',
	weight: '69',
	id: '1',
	img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
},
{
	name: "Charmander",
	category: "Lizard Pokémon",
	type: ['fire'],
	height: '6',
	weight: '85',
	id: '4',
	img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
},
{
	name: "Bulbasaur",
	category: "Seed Pokémon",
	type: ['grass', 'poison'],
	height: '7',
	weight: '69',
	id: '#1',
	img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
},
{
	name: "Bulbasaur",
	category: "Seed Pokémon",
	type: ['grass', 'poison'],
	height: '7',
	weight: '69',
	id: '1',
	img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
},
{
	name: "Torrent",
	category: "Tiny Turtle Pokémon",
	type: ['water'],
	height: '5',
	weight: '90',
	id: '7',
	img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
},
{
	name: "Bulbasaur",
	category: "Seed Pokémon",
	type: ['grass', 'poison'],
	height: '7',
	weight: '69',
	id: '1',
	img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
},
{
	name: "Bulbasaur",
	category: "Seed Pokémon",
	type: ['grass', 'poison'],
	height: '7',
	weight: '69',
	id: '1',
	img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
}]

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
		label: 'Tabs',
		pokemonData,
		TABLE_HEAD,
	},
};



export const PokemonAPI: Story = {
	args: {
		label: 'Tabs',
		pokemonData,
		TABLE_HEAD,
	},
	decorators: [
		(Story) => {
			// let state = useSelector((state) => state)
			// console.log(state);
			return (
				<Provider store={store} >
					{JSON.stringify(store.getState())}
					<div style={{ margin: '3em' }} >
						<Story />
					</div>
				</Provider>
			)
		},
	],
};