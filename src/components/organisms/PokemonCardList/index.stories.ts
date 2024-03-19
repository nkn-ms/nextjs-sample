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


const contents = [{
	name: "Bulbasaur",
	category: "Seed Pokémon",
	type: ['grass', 'poison'],
	height: '7',
	weight: '69',
	id: '1',
	flavor_text: "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
	img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
},
{
	name: "Bulbasaur",
	category: "Seed Pokémon",
	type: ['grass', 'poison'],
	height: '7',
	weight: '69',
	id: '1',
	flavor_text: "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
	img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
},
{
	name: "Bulbasaur",
	category: "Seed Pokémon",
	type: ['grass', 'poison'],
	height: '7',
	weight: '69',
	id: '1',
	flavor_text: "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
	img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
}]

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
		label: 'Card',
		contents: contents
	},
};

export const NoData: Story = {
	args: {
		label: 'Card',
		contents: []
	},
};