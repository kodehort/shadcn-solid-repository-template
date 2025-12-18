import { type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export interface LabelProps extends JSX.LabelHTMLAttributes<HTMLLabelElement> {}

function Label(props: LabelProps) {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <label
      class={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        local.class
      )}
      {...others}
    />
  );
}

export { Label };
