import { type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {}

function Card(props: CardProps) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      class={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        local.class
      )}
      {...others}
    />
  );
}

function CardHeader(props: CardProps) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div class={cn("flex flex-col space-y-1.5 p-6", local.class)} {...others} />
  );
}

function CardTitle(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <h3
      class={cn("font-semibold leading-none tracking-tight", local.class)}
      {...others}
    />
  );
}

function CardDescription(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <p class={cn("text-muted-foreground text-sm", local.class)} {...others} />
  );
}

function CardContent(props: CardProps) {
  const [local, others] = splitProps(props, ["class"]);
  return <div class={cn("p-6 pt-0", local.class)} {...others} />;
}

function CardFooter(props: CardProps) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div class={cn("flex items-center p-6 pt-0", local.class)} {...others} />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
