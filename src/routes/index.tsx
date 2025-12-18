import { Title } from "@solidjs/meta";
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card";
import { PokemonPage } from "@/registry/new-york/blocks/complex-component/page";

export default function Home() {
  return (
    <main class="container mx-auto max-w-4xl px-4 py-8">
      <Title>Custom Registry - SolidJS</Title>

      <header class="mb-8">
        <h1 class="text-3xl font-bold">Custom Registry</h1>
        <p class="text-muted-foreground mt-2">
          A custom registry for distributing code using shadcn - ported to SolidJS.
        </p>
      </header>

      <div class="flex flex-col gap-8">
        <section class="rounded-lg border p-6">
          <div class="mb-4 flex items-center justify-between">
            <div>
              <h2 class="text-lg font-semibold">HelloWorld</h2>
              <p class="text-sm text-muted-foreground">
                A simple hello world component
              </p>
            </div>
          </div>
          <div class="min-h-[200px] flex items-center justify-center rounded-md border bg-muted/50">
            <HelloWorld />
          </div>
        </section>

        <section class="rounded-lg border p-6">
          <div class="mb-4 flex items-center justify-between">
            <div>
              <h2 class="text-lg font-semibold">ExampleForm</h2>
              <p class="text-sm text-muted-foreground">
                A contact form with Zod validation
              </p>
            </div>
          </div>
          <div class="min-h-[450px] flex items-center justify-center rounded-md border bg-muted/50 p-4">
            <ExampleForm />
          </div>
        </section>

        <section class="rounded-lg border p-6">
          <div class="mb-4 flex items-center justify-between">
            <div>
              <h2 class="text-lg font-semibold">PokemonPage</h2>
              <p class="text-sm text-muted-foreground">
                A complex component showing hooks, libs and components
              </p>
            </div>
          </div>
          <div class="min-h-[450px] rounded-md border bg-muted/50 p-4">
            <PokemonPage />
          </div>
        </section>

        <section class="rounded-lg border p-6">
          <div class="mb-4 flex items-center justify-between">
            <div>
              <h2 class="text-lg font-semibold">ExampleCard</h2>
              <p class="text-sm text-muted-foreground">
                A login form with a CSS file
              </p>
            </div>
          </div>
          <div class="min-h-[450px] flex items-center justify-center rounded-md border bg-muted/50">
            <ExampleCard />
          </div>
        </section>
      </div>
    </main>
  );
}
