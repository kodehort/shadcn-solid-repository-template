import { type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export interface LabelProps extends JSX.LabelHTMLAttributes<HTMLLabelElement> {}

function Label(props: LabelProps) {
  const [local, others] = splitProps(props, ["class"]);

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: reusable component receives for/htmlFor via props
    <label
      class={cn(
        "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        local.class
      )}
      {...others}
    />
  );
}

export { Label };
