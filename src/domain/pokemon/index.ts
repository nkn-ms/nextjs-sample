import { Pokemon, PokemonSpecies, PokemonType, Name, Genus } from 'pokenode-ts'

export async function getPokemonData(id: number) {
	const url1 = `https://pokeapi.co/api/v2/pokemon/${id}`
	const res1 = await fetch(url1)
	// console.log("res1", res1);

	const rawPokemonData: Pokemon = await res1.json()

	// console.log("rawPokemonData", rawPokemonData);

	const url2 = `https://pokeapi.co/api/v2/pokemon-species/${id}`
	const res2 = await fetch(url2)
	const rawPokemonSpeciesData: PokemonSpecies = await res2.json()
	console.log("rawPokemonSpeciesData", rawPokemonSpeciesData);

	const category = { category: getGenra(rawPokemonSpeciesData.genera) }
	const name = { name: getJapaneseName(rawPokemonSpeciesData.names) }
	const convertedPokemonData =
		Object.assign({}, name, category, convertPokemonData(rawPokemonData))

	// console.log("container convertPokemonData", convertedPokemonData);

	return convertedPokemonData
}

function convertPokemonData(rawPokemonData: Pokemon) {
	let convertedPokemonData = {
		id: rawPokemonData.id,
		height: rawPokemonData.height,
		weight: rawPokemonData.weight,
		type: getTypes(rawPokemonData.types),
		img: rawPokemonData.sprites.other?.['official-artwork']?.front_default ?? ''
	}

	return convertedPokemonData
}

function getTypes(rawPokemonDataTypes: PokemonType[]) {
	let types = rawPokemonDataTypes.map(e => {
		return e.type.name
	})
	return types
}

function getJapaneseName(rawPokemonSpeciesDataNames: Name[]) {
	let name = ''
	for (let i = 0; i < rawPokemonSpeciesDataNames.length; i++) {
		let e = rawPokemonSpeciesDataNames[i]
		if (e.language.name === 'ja') {
			name = e.name
		}
	}
	return name
}

function getGenra(rawPokemonSpeciesDataGenra: Genus[]) {
	let genra = ''
	for (let i = 0; i < rawPokemonSpeciesDataGenra.length; i++) {
		let e = rawPokemonSpeciesDataGenra[i]

		if (e.language.name === 'ja') {
			genra = e.genus
		}
	}

	return genra
}
