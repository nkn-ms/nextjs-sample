import { colors } from "@material-tailwind/react/types/generic";

export interface PokemonData {
	name: string,
	img: string,
	id: number,
	category: string,
	height: number,
	weight: number,
	type: PokemonTypeName[]
}

export type PokemonTypeColor = colors | undefined
export type PokemonTypeName = 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice' | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy' | 'stellar';

export const pokemonColorMap: { [pokemonType in PokemonTypeName]: PokemonTypeColor } = {
	normal: "deep-orange",
	fire: 'red',
	electric: 'yellow',
	water: 'light-blue',
	grass: 'green',
	ice: 'cyan',
	fighting: 'orange',
	poison: 'purple',
	ground: 'brown',
	flying: 'indigo',
	psychic: 'pink',
	bug: 'lime',
	rock: 'gray',
	ghost: 'deep-purple',
	dragon: 'amber',
	dark: undefined,
	steel: 'teal',
	fairy: 'pink',
	stellar: 'blue-gray'
}