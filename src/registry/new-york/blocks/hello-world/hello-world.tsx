import { Button } from "@/registry/new-york/ui/button";

export function HelloWorld() {
  return (
    <div class="flex flex-col items-center justify-center gap-4 p-8">
      <h1 class="text-2xl font-bold">Hello World</h1>
      <Button>Click me</Button>
    </div>
  );
}
