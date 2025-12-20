import { createResource, Show, Suspense } from "solid-js";
import { Card, CardContent } from "@/registry/new-york/ui/card";
import { getPokemon } from "../lib/pokemon";
import { PokemonImage } from "./pokemon-image";

type PokemonCardProps = {
  name: string;
};

export function PokemonCard(props: PokemonCardProps) {
  const [pokemon] = createResource(() => props.name, getPokemon);

  return (
    <Suspense
      fallback={
        <Card class="w-full">
          <CardContent class="flex flex-col items-center justify-center p-4">
            <div class="h-24 w-24 animate-pulse rounded-full bg-muted" />
            <div class="mt-2 h-4 w-20 animate-pulse rounded bg-muted" />
          </CardContent>
        </Card>
      }
    >
      <Show when={pokemon()}>
        {(data) => (
          <Card class="w-full">
            <CardContent class="flex flex-col items-center justify-center p-4">
              <PokemonImage name={data().name} number={data().id} />
              <p class="mt-2 font-medium text-sm capitalize">{data().name}</p>
            </CardContent>
          </Card>
        )}
      </Show>
    </Suspense>
  );
}
