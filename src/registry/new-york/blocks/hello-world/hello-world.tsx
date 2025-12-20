import { Button } from "@/registry/new-york/ui/button";

export function HelloWorld() {
  return (
    <div class="flex flex-col items-center justify-center gap-4 p-8">
      <h1 class="font-bold text-2xl">Hello World</h1>
      <Button>Click me</Button>
    </div>
  );
}
