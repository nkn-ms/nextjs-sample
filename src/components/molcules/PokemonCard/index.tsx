import { Chip } from "@material-tailwind/react";
import { colors } from "@material-tailwind/react/types/generic";
import {
  Card,
  CardBody,
  CardFooter,
} from "@/material-tailwind/index";
import Image from "next/image";

interface CardProps {
  content: PokemonData
}

import { PokemonData, PokemonTypeName, pokemonColorMap } from '@/types/pokemon/index'

function convertPokmonTypeToColor(pokemonType: PokemonTypeName): colors | undefined {
  return pokemonColorMap[pokemonType]
}

export const PokemonCard = ({
  content,
  ...props
}: CardProps) => {

  return (
    <Card className="relative max-w-80 overflow-hidden bg-white border rounded-lg shadow-sm border-neutral-200" style={{ width: '100%', height: 'auto' }}>
      <Image src={content.img} className="relative object-cover" alt="pokemon image" width="0" height="0" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
      <CardBody className="p-0">
        <div className="flex items-center justify-end mt-2">
          {content.type?.map((pokemonType: PokemonTypeName) => (
            <Chip className="mr-1" size="sm" color={convertPokmonTypeToColor(pokemonType)} value={pokemonType} key={pokemonType} />
          ))}
        </div>
        <div className="z-50 flex items-center w-ful mt-2 px-7">
          <div>
            <h5 className="text-lg font-bold leading-none tracking-tight text-neutral-900">{content.name}</h5>
            <small className="block mt-1 text-sm font-medium leading-none text-neutral-500">{content.category}</small>
          </div>
        </div>
      </CardBody>
      <CardFooter className="p-4">
        <div className="flex items-center justify-between text-neutral-500">
          <div className="flex flex-col">
            <span className="text-sm">height</span>
            <span className="text-neutral-800">{content.height / 10}m</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">weight</span>
            <span className="text-neutral-800">{content.weight / 10}kg</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">id</span>
            <span className="text-neutral-800">{content.id}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
