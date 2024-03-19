"use client"
import { PokemonTabs } from '@/components/organisms/PokemonTabs/index';
import { PokemonDataSwitchTabs } from '@/components/molcules/PokemonDataSwitchTabs/index';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';

const TABLE_HEAD = ["image", "id", "name", "category", "height", "weight", "type"];

const data = [
  { label: 'data1', value: 'data1' },
  { label: 'data2', value: 'data2' },
  { label: 'data3', value: 'data3' }
];

export default function Tabs() {
  const { id, data: pokemondata } = useAppSelector(state => state.pokemonData)
  const pokemonData = pokemondata[id]

  return (
    <>
      <PokemonDataSwitchTabs data={data} className="mb-6" />
      <PokemonTabs pokemonData={pokemonData} TABLE_HEAD={TABLE_HEAD} />
    </>
  )
}