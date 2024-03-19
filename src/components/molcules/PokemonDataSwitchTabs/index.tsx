import { getPokemonData } from "@/domain/pokemon/index";
import { updatePokemonDataId } from "@/lib/pokemonData/index";
import { useAppSelector, useAppDispatch } from '@/lib/hooks';

import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
interface Data {
  label: string
  value: string
}

export const PokemonDataSwitchTabs = ({
  data,
  ...props
}: { data: Data[], className: string }) => {
  const id = useAppSelector(state => state.pokemonData.id)
  const selectedTabId = `data${id}`
  const dispatch = useAppDispatch()
  function dispatchUpdatePokemonData(e: React.MouseEvent<HTMLLIElement, MouseEvent>, value: string) {
    const convert: { [K in string]: number } = { data1: 1, data2: 2, data3: 3 }
    const id: number = convert[value]
    const pokemonData = getPokemonData(id)
    const action = {
      id: id,
      data: pokemonData
    }
    // dispatch(updatePokemonData(action))
    dispatch(updatePokemonDataId(id))
  }

  return (
    <div className={props.className}>
      <Tabs value={selectedTabId}>
        <TabsHeader >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} onClick={(e) => dispatchUpdatePokemonData(e, value)}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs >
    </div>

  );
}