import { cp, mkdir, readFile, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "dist");
const required = ["index.html", "src/app.js", "src/styles.css"];

await Promise.all(required.map((file) => readFile(resolve(root, file), "utf8")));
await rm(output, { recursive: true, force: true });
await mkdir(resolve(output, "src"), { recursive: true });
await cp(resolve(root, "index.html"), resolve(output, "index.html"));
await cp(resolve(root, "src/app.js"), resolve(output, "src/app.js"));
await cp(resolve(root, "src/styles.css"), resolve(output, "src/styles.css"));

console.log(`Built ${required.length} assets into ${output}`);
