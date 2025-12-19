# Shadcn Solid Registry Template

A template for creating custom component registries compatible with the shadcn CLI, ported to **SolidJS** and **SolidStart**.

This is a SolidJS port of the official [shadcn-ui/registry-template](https://github.com/shadcn-ui/registry-template).

## Features

- **SolidJS Components**: All example components are ported to use SolidJS patterns (signals, Show, For, etc.)
- **SolidStart Framework**: Built on SolidStart for full-stack capabilities
- **Tailwind CSS**: Styled with Tailwind CSS and CSS variables for theming
- **TypeScript**: Full TypeScript support
- **Zod Validation**: Form validation examples using Zod

## Getting Started

### Prerequisites

- Node.js 18+
- bun (recommended) or pnpm, npm

### Installation

```bash
# Clone the repository
git clone https://github.com/kodehort/shadcn-solid-registry-template.git
cd shadcn-solid-registry-template

# Install dependencies
bun install

# Start development server
bun dev
```

### Building the Registry

To build the static registry JSON files:

```bash
bun build:registry
```

This will generate JSON files in the `public/r/` directory that can be served statically.

## Project Structure

```
├── src/
│   ├── app.tsx              # App entry point
│   ├── app.css              # Global styles
│   ├── entry-client.tsx     # Client entry
│   ├── entry-server.tsx     # Server entry
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn)
│   ├── routes/
│   │   └── index.tsx        # Home page
│   └── registry/
│       └── new-york/
│           ├── ui/          # UI components
│           │   ├── button.tsx
│           │   ├── card.tsx
│           │   ├── input.tsx
│           │   ├── label.tsx
│           │   └── textarea.tsx
│           └── blocks/      # Example blocks
│               ├── hello-world/
│               ├── example-form/
│               ├── example-with-css/
│               └── complex-component/
├── public/
│   └── r/                   # Built registry JSON files
├── scripts/
│   └── build-registry.mjs   # Registry build script
├── registry.json            # Registry definition
├── components.json          # shadcn config
└── package.json
```

## Registry Items

### UI Components

- **Button**: A versatile button component with multiple variants
- **Card**: A card component with header, content, and footer sections
- **Input**: A styled input component
- **Label**: A form label component
- **Textarea**: A styled textarea component

### Blocks

- **hello-world**: A simple hello world component demonstrating basic usage
- **example-form**: A contact form with Zod validation
- **complex-component**: A Pokemon viewer showing hooks, libs, and components
- **example-with-css**: A login form demonstrating CSS file integration

## Usage

### Using Components

```tsx
import { Button } from "@/registry/new-york/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york/ui/card";

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### Customizing Theme

Edit the CSS variables in `src/app.css` to customize the theme colors.

## License

MIT
