# Shadcn Solid Registry Template

A template for creating custom component registries compatible with the shadcn CLI, ported to **SolidJS** and **SolidStart**.

This is a SolidJS port of the official [shadcn-ui/registry-template](https://github.com/shadcn-ui/registry-template).

You can use the shadcn CLI to run your own component registry. Running your own component registry allows you to distribute your custom components, hooks, pages, and other files to any React project.

## Getting Started

This is a template for creating a custom registry using Next.js.

- The template uses a `registry.json` file to define components and their files.
- The `shadcn build` command is used to build the registry.
- The registry items are served as static files under `public/r/[name].json`.
- The template also includes a route handler for serving registry items.
- Every registry item are compatible with the `shadcn` CLI.
- We have also added v0 integration using the `Open in v0` api.

## Documentation

Visit the [shadcn documentation](https://ui.shadcn.com/docs/registry) to view the full documentation.

### Installation

```bash
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
