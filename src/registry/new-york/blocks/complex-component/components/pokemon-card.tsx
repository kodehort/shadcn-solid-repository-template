import { createResource, Show, Suspense } from "solid-js";
import { getPokemon } from "../lib/pokemon";
import { Card, CardContent } from "@/registry/new-york/ui/card";
import { PokemonImage } from "./pokemon-image";

interface PokemonCardProps {
  name: string;
}

export function PokemonCard(props: PokemonCardProps) {
  const [pokemon] = createResource(() => props.name, getPokemon);

  return (
    <Suspense
      fallback={
        <Card class="w-full">
          <CardContent class="flex flex-col items-center justify-center p-4">
            <div class="w-24 h-24 bg-muted animate-pulse rounded-full" />
            <div class="h-4 w-20 bg-muted animate-pulse rounded mt-2" />
          </CardContent>
        </Card>
      }
    >
      <Show when={pokemon()}>
        {(data) => (
          <Card class="w-full">
            <CardContent class="flex flex-col items-center justify-center p-4">
              <PokemonImage name={data().name} number={data().id} />
              <p class="text-sm font-medium capitalize mt-2">{data().name}</p>
            </CardContent>
          </Card>
        )}
      </Show>
    </Suspense>
  );
}
