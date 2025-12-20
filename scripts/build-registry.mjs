import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

// Read the registry.json
const registryPath = join(rootDir, "registry.json");
const registry = JSON.parse(readFileSync(registryPath, "utf-8"));

// Create public/r directory if it doesn't exist
const outputDir = join(rootDir, "public", "r");
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Build registry items
const registryItems = [];

for (const item of registry.items) {
  const files = [];

  for (const file of item.files) {
    const filePath = join(rootDir, file.path);
    try {
      const content = readFileSync(filePath, "utf-8");
      files.push({
        path: file.target,
        type: file.type,
        content,
      });
    } catch (error) {
      console.error(`Error reading file ${file.path}:`, error.message);
    }
  }

  const registryItem = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.name,
    type: item.type,
    title: item.title,
    description: item.description,
    dependencies: item.dependencies || [],
    files,
  };

  // Write individual item JSON
  const itemOutputPath = join(outputDir, `${item.name}.json`);
  writeFileSync(itemOutputPath, JSON.stringify(registryItem, null, 2));
  console.log(`Built: ${item.name}.json`);

  // Add to registry items list
  registryItems.push({
    name: item.name,
    type: item.type,
    title: item.title,
    description: item.description,
  });
}

// Write the main registry index
const registryIndex = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: registry.name,
  homepage: registry.homepage,
  items: registryItems,
};

writeFileSync(
  join(outputDir, "registry.json"),
  JSON.stringify(registryIndex, null, 2)
);
console.log("Built: registry.json");

console.log(`\nRegistry built successfully! ${registryItems.length} items.`);
