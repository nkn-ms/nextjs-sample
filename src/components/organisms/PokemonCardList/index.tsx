import { PokemonCard } from '@/components/molcules/PokemonCard';

interface CardListProps {
  size?: 'small' | 'medium' | 'large';
  label?: string;
  contents?: any
}

export const PokemonCardList = ({
  size = 'medium',
  label,
  contents,
  ...props
}: CardListProps) => {
  console.log("PokemonCardList contents", contents);

  return (
    <div className="grid justify-items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {contents?.map((content: any) => (
        <PokemonCard content={content} key={content.name}></PokemonCard>
      ))}
    </div>
  );
};
