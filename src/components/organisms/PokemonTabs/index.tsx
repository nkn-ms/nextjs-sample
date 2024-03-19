import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { PokemonTable } from '@/components/organisms/PokemonTable/index';
import { PokemonCardList } from '@/components/organisms/PokemonCardList/index';

export const PokemonTabs = ({
  pokemonData,
  TABLE_HEAD,
}: any) => {


  const data = [
    {
      label: "Card",
      value: "card",
      content: <PokemonCardList contents={pokemonData} />
    },
    {
      label: "Table",
      value: "table",
      content: <PokemonTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={pokemonData} />
    },
  ];


  return (
    <div>
      <Tabs value="card">
        <TabsHeader >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, content }) => (
            <TabPanel key={value} value={value}>
              {content}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs >
    </div>

  );
}