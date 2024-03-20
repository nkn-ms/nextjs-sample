import { PokemonCard } from '@/components/molcules/PokemonCard';
import { PokemonData } from "@/types/pokemon/index";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@/material-tailwind/index";
interface CardListProps {
  contents: PokemonData[]
}

export const PokemonCardList = ({
  contents,
  ...props
}: CardListProps) => {
  console.log("PokemonCardList contents", contents);

  return (
    <div className="grid justify-items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {contents.length === 0 &&
        <Card className="relative max-w-80 overflow-hidden bg-white border rounded-lg shadow-sm border-neutral-200" style={{ width: '100%', height: 'auto' }}>
          <CardBody className="p-8 text-center">
            <Typography
              variant="h6"
              className="font-semibold"
            >
              No Data
            </Typography>
          </CardBody>
        </Card>}
      {contents.map((content: PokemonData) => (
        <PokemonCard content={content} key={content.name}></PokemonCard>
      ))}
    </div>
  );
};
