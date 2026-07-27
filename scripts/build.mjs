import { cp, mkdir, readFile, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "dist");
const required = [
  "index.html",
  "src/app.js",
  "src/styles.css",
  "system/index.html",
  "system/system.css",
  "system/system.js",
  "src/design-system/foundation.css",
  "src/design-system/themes/digital-camouflage.css",
  "assets/concepts/digital-camouflage/terrain-network-v1.png",
  "assets/concepts/digital-camouflage/camo-texture-v1.png",
];

await Promise.all(required.map((file) => readFile(resolve(root, file), "utf8")));
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, "index.html"), resolve(output, "index.html"));
await cp(resolve(root, "src"), resolve(output, "src"), { recursive: true });
await cp(resolve(root, "system"), resolve(output, "system"), { recursive: true });
await cp(resolve(root, "assets"), resolve(output, "assets"), { recursive: true });

console.log(`Built design foundation and prototype assets into ${output}`);
