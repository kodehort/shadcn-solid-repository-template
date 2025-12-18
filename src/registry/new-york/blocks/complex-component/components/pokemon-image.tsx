import { usePokemonImage } from "../hooks/use-pokemon";

interface PokemonImageProps {
  name: string;
  number: number;
}

export function PokemonImage(props: PokemonImageProps) {
  const imageUrl = usePokemonImage(props.number);

  return (
    <img
      src={imageUrl}
      alt={props.name}
      class="w-24 h-24 object-contain"
    />
  );
}
