"use client"
import { PokemonCardList } from '@/components/organisms/PokemonCardList/index';
import { useAppSelector } from '@/lib/hooks';
export default function Card() {
	const contents = useAppSelector(state => state.pokemonData.data[1])

	return (
		<>
			<PokemonCardList contents={contents} />
		</>
	)
}