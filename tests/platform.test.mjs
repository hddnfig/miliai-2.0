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
