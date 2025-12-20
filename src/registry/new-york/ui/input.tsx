import { type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  const [local, others] = splitProps(props, ["class", "type"]);

  return (
    <input
      class={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        local.class
      )}
      type={local.type}
      {...others}
    />
  );
}

export { Input };
