"use client"
import { PokemonTable } from '@/components/organisms/PokemonTable/index';
import { useAppSelector } from '@/lib/hooks';

const TABLE_HEAD = ["image", "id", "name", "category", "height", "weight", "type"];

export default function Home() {
  const pokemonData = useAppSelector(state => state.pokemonData.data[1])

  return (<PokemonTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={pokemonData} />)
}