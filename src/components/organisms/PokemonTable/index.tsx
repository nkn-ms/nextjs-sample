import { Card, Typography } from "@/material-tailwind/index";
import { Chip } from "@/material-tailwind/index";
import { colors } from "@material-tailwind/react/types/generic";
import Image from "next/image";
import { PokemonData, pokemonColorMap, PokemonTypeName } from "@/types/pokemon/index";

function convertPokmonTypeToColor(pokemonType: PokemonTypeName): colors | undefined {
  return pokemonColorMap[pokemonType]
}

export const PokemonTable = ({
  TABLE_HEAD,
  TABLE_ROWS,
}: {
  TABLE_HEAD: string[], TABLE_ROWS: PokemonData[]
}) => {
  return (
    <Card className="max-w-4xl h-full overflow-auto">
      <table className="table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((pokemon, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={pokemon.name}>
                <td className={classes}>
                  <Image
                    className="max-w-32 max-h-32"
                    src={pokemon.img}
                    alt="pokemon image"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {pokemon.id}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {pokemon.name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {pokemon.category}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {pokemon.height / 10}m
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {pokemon.weight / 10}kg
                  </Typography>
                </td>
                <td className={classes}>
                  {pokemon.type?.map((pokemonType) => (
                    <Chip className="mr-1 text-center" size="sm" color={convertPokmonTypeToColor(pokemonType)} value={pokemonType} key={pokemonType} />
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}