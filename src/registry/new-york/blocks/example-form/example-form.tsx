import { createSignal, Show } from "solid-js";
import { z } from "zod";
import { Button } from "@/registry/new-york/ui/button";
import { Input } from "@/registry/new-york/ui/input";
import { Label } from "@/registry/new-york/ui/label";
import { Textarea } from "@/registry/new-york/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card";

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
              id="name"
              type="text"
              placeholder="Your name"
              value={formData().name}
              onInput={updateField("name")}
              disabled={isPending()}
              aria-invalid={!!errors().name}
            />
            <Show when={errors().name}>
              <p class="text-sm text-destructive">{errors().name}</p>
            </Show>
          </div>
          <div class="space-y-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData().email}
              onInput={updateField("email")}
              disabled={isPending()}
              aria-invalid={!!errors().email}
            />
            <Show when={errors().email}>
              <p class="text-sm text-destructive">{errors().email}</p>
            </Show>
          </div>
          <div class="space-y-2">
            <Label for="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your message"
              value={formData().message}
              onInput={updateField("message")}
              disabled={isPending()}
              aria-invalid={!!errors().message}
            />
            <Show when={errors().message}>
              <p class="text-sm text-destructive">{errors().message}</p>
            </Show>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" class="w-full" disabled={isPending()}>
            {isPending() ? "Sending..." : "Send Message"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
