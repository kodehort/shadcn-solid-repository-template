import { createSignal, Show } from "solid-js";
import { z } from "zod";
import { Button } from "@/registry/new-york/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card";
import { Input } from "@/registry/new-york/ui/input";
import { Label } from "@/registry/new-york/ui/label";
import { Textarea } from "@/registry/new-york/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

export function ExampleForm() {
  const [formData, setFormData] = createSignal<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = createSignal<FormErrors>({});
  const [isPending, setIsPending] = createSignal(false);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setIsPending(true);
    setErrors({});

    const result = formSchema.safeParse(formData());

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormData;
        fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      setIsPending(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", result.data);
    setIsPending(false);
  };

  const updateField = (field: keyof FormData) => (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData((prev) => ({ ...prev, [field]: target.value }));
  };

  return (
    <Card class="w-full max-w-md">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent class="space-y-4">
          <div class="space-y-2">
            <Label for="name">Name</Label>
            <Input
              aria-invalid={!!errors().name}
              disabled={isPending()}
              id="name"
              onInput={updateField("name")}
              placeholder="Your name"
              type="text"
              value={formData().name}
            />
            <Show when={errors().name}>
              <p class="text-destructive text-sm">{errors().name}</p>
            </Show>
          </div>
          <div class="space-y-2">
            <Label for="email">Email</Label>
            <Input
              aria-invalid={!!errors().email}
              disabled={isPending()}
              id="email"
              onInput={updateField("email")}
              placeholder="you@example.com"
              type="email"
              value={formData().email}
            />
            <Show when={errors().email}>
              <p class="text-destructive text-sm">{errors().email}</p>
            </Show>
          </div>
          <div class="space-y-2">
            <Label for="message">Message</Label>
            <Textarea
              aria-invalid={!!errors().message}
              disabled={isPending()}
              id="message"
              onInput={updateField("message")}
              placeholder="Your message"
              value={formData().message}
            />
            <Show when={errors().message}>
              <p class="text-destructive text-sm">{errors().message}</p>
            </Show>
          </div>
        </CardContent>
        <CardFooter>
          <Button class="w-full" disabled={isPending()} type="submit">
            {isPending() ? "Sending..." : "Send Message"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
