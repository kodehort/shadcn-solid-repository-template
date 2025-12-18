import { type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {}

function Textarea(props: TextareaProps) {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <textarea
      class={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        local.class
      )}
      {...others}
    />
  );
}

export { Textarea };
