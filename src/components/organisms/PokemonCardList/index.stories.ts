import type { Meta, StoryObj } from '@storybook/react';

import { PokemonCardList } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'components/organisms/PockemonCardList',
	component: PokemonCardList,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	},
} satisfies Meta<typeof PokemonCardList>;

export default meta;
type Story = StoryObj<typeof meta>;


const contents = [
	{
		img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
		id: '1',
		name: 'Bulbasaur',
		category: 'Seed Pokémon',
		height: '7',
		weight: '69',
		type: ['grass', 'poison'],
	},

	{
		img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
		id: '4',
		name: 'charmander',
		category: 'Lizard Pokémon',
		height: '6',
		weight: '85',
		type: ['fire'],
	},
	{
		img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
		id: '7',
		name: 'Squirtle',
		category: 'Tiny Turtle Pokémon',
		height: '5',
		weight: '90',
		type: ['water'],
	},
];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
		contents: contents
	},
};

export const NoData: Story = {
	args: {
		contents: []
	},
};