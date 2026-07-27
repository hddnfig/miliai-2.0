import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const [html, app, css] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../src/app.js", import.meta.url), "utf8"),
  readFile(new URL("../src/styles.css", import.meta.url), "utf8"),
]);

test("entry document exposes an accessible app root", () => {
  assert.match(html, /id="app"/);
  assert.match(html, /본문으로 건너뛰기/);
  assert.match(html, /src="\.\/src\/app\.js"/);
});

test("core learner, commander, and operator views are registered", () => {
  for (const view of ["home", "explore", "learning", "workspace", "peer", "growth", "commander", "admin"]) {
    assert.match(app, new RegExp(`${view}:`));
  }
});

test("responsive navigation rules are present", () => {
  assert.match(css, /\.mobile-nav/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /:focus-visible/);
});

test("design foundation keeps the provisional concept behind semantic tokens", async () => {
  const [foundation, theme, system] = await Promise.all([
    readFile(new URL("../src/design-system/foundation.css", import.meta.url), "utf8"),
    readFile(new URL("../src/design-system/themes/digital-camouflage.css", import.meta.url), "utf8"),
    readFile(new URL("../system/index.html", import.meta.url), "utf8"),
  ]);

  assert.match(foundation, /--ds-action-primary/);
  assert.match(theme, /\[data-theme="digital-camouflage"\]/);
  assert.match(theme, /--ds-asset-background/);
  assert.match(system, /PROVISIONAL/);
  assert.match(system, /src\/design-system\/foundation\.css/);
});

test("screen registry tracks every IA page as an independent HTML artifact", async () => {
  const registry = JSON.parse(
    await readFile(new URL("../docs/design/screen-registry.json", import.meta.url), "utf8"),
  );

  assert.equal(registry.pageCount, 70);
  assert.equal(registry.screens.length, 70);
  assert.equal(new Set(registry.screens.map(({ id }) => id)).size, 70);

  for (const screen of registry.screens) {
    assert.equal(screen.artifactPath, `/screens/${screen.id}.html`);
    assert.equal(screen.statePolicy, "inline");
    assert.ok(screen.themeSupport.includes("digital-camouflage"));
  }
});
