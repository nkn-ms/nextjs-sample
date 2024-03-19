"use client"
import { Input, Button } from '@/material-tailwind/index';
import { getPokemonData } from '@/domain/pokemon/index'
import { updatePokemonData } from '@/lib/pokemonData/index';
import { updatePokemonInputData } from "@/lib/pokemonInputData/index";
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { IconButton } from '@/material-tailwind/index'
import Link from 'next/link'

export default function Home() {
  const data1 = useAppSelector(state => state.pokemonInputData.data[1])
  const data2 = useAppSelector(state => state.pokemonInputData.data[2])
  const data3 = useAppSelector(state => state.pokemonInputData.data[3])

  const dispatch = useAppDispatch()
  function getPokemonAll() {
    getPokemon(data1, 1)
    getPokemon(data2, 2)
    getPokemon(data3, 3)
  }

  function clearAllInputData() {
    dispatch(updatePokemonInputData({ id: 1, inputData: '' }))
    dispatch(updatePokemonInputData({ id: 2, inputData: '' }))
    dispatch(updatePokemonInputData({ id: 3, inputData: '' }))
  }

  function getPokemon(data: string, id: number) {
    if (data === '') return
    const normalisedData = data.split(',').map(e => Number(e.trim()))
    normalisedData.forEach(e => {
      getPokemonData(e).then((res) => {
        dispatch(updatePokemonData({ id: id, data: [res] }))
      })
    })
  }

  return (

    <main className="flex flex-col items-center justify-between p-24">
      <Button onClick={() => {
        getPokemonAll()
        clearAllInputData()
      }}>
        get Pokemon!
      </Button>
      <div className='mt-4'>
        <div className='mb-4'>
          <Input crossOrigin="" color="green" label='data1' value={data1} onChange={(e) => dispatch(updatePokemonInputData({ id: 1, inputData: e.target.value }))} />
        </div>
        <div className='mb-4'>
          <Input crossOrigin="" color="red" label='data2' value={data2} onChange={(e) => dispatch(updatePokemonInputData({ id: 2, inputData: e.target.value }))} />
        </div>
        <div className='mb-4'>
          <Input crossOrigin="" color="blue" label='data3' value={data3} onChange={(e) => dispatch(updatePokemonInputData({ id: 3, inputData: e.target.value }))} />
        </div>
      </div>
      <div>
        <div className='mb-4'>
          <h2>使い方</h2>
          GET Pokemon!押下で対応するポケモンIDのポケモンの情報が各データに格納されます
          ポケモンの情報はCard,Table,Tabsページで確認できます
          任意のID(1~1025)のポケモンを追加できます
        </div>
        <div>
          <h2>使用技術</h2>
          next.js,
          typescript,
          redux,
          material tailwind,
          storybook,
          pokemonAPI,
        </div>
      </div>
      <div className='mt-8 max-w-12'>
        <Link href='https://github.com/nkn-ms/nextjs-sample' target='_blank'>
          <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
            <i className="fab fa-github text-lg" />
          </IconButton>
        </Link>
      </div>
    </main>
  );
}
