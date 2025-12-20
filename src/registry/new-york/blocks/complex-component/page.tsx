import { createResource, For, Show, Suspense } from "solid-js";
import { PokemonCard } from "./components/pokemon-card";
import { getPokemonList } from "./lib/pokemon";

export function PokemonPage() {
  const [pokemonList] = createResource(() => getPokemonList({ limit: 12 }));

  return (
    <div class="container mx-auto max-w-4xl p-4">
      <Suspense
        fallback={
          <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <For each={new Array(12).fill(null)}>
              {() => <div class="h-40 animate-pulse rounded-xl bg-muted" />}
            </For>
          </div>
        }
      >
        <Show when={pokemonList()}>
          {(data) => (
            <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <For each={data().results}>
                {(pokemon) => <PokemonCard name={pokemon.name} />}
              </For>
            </div>
          )}
        </Show>
      </Suspense>
    </div>
  );
}
