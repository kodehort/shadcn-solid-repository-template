import { usePokemonImage } from "../hooks/use-pokemon";

type PokemonImageProps = {
  name: string;
  number: number;
};

export function PokemonImage(props: PokemonImageProps) {
  const imageUrl = usePokemonImage(props.number);

  return (
    <img
      alt={props.name}
      class="h-24 w-24 object-contain"
      height={96}
      src={imageUrl}
      width={96}
    />
  );
}
