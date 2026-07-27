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

test("priority learner journey follows the architecture documents", () => {
  for (const label of ["홈", "탐색", "내 학습", "함께 학습", "나의 성장"]) {
    assert.match(app, new RegExp(`\\[\\\"[^\\\"]+\\\", \\\"[^\\\"]+\\\", \\\"${label}\\\"`));
  }

  for (const copy of ["피드백을 반영해", "수정본 재제출", "프로젝트 여정", "AI 교관의 다음 단서", "역량 근거"]) {
    assert.match(app, new RegExp(copy));
  }
});

test("responsive navigation rules are present", () => {
  assert.match(css, /\.mobile-nav/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
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

test("design execution checklist covers all 70 IA pages exactly once", async () => {
  const checklist = await readFile(
    new URL("../docs/design/design-execution-order.md", import.meta.url),
    "utf8",
  );
  const registry = JSON.parse(
    await readFile(new URL("../docs/design/screen-registry.json", import.meta.url), "utf8"),
  );

  const checklistIds = [...checklist.matchAll(/^- \[[ x]\] \*\*([A-Z0-9-]+) ·/gm)].map((match) => match[1]);
  assert.equal(checklistIds.length, 70);
  assert.equal(new Set(checklistIds).size, 70);
  assert.deepEqual(new Set(checklistIds), new Set(registry.screens.map(({ id }) => id)));
  assert.match(checklist, /실사 인물·사물 이미지는 사용하지 않는다/);
  assert.match(checklist, /그래픽 시스템 고도화/);
});

test("first design group ships as independent state-complete pages", async () => {
  const group = ["HOME-01", "EXP-01", "VOD-01", "PBL-01", "SRCH-01"];
  for (const id of group) {
    const screen = await readFile(new URL(`../screens/${id}.html`, import.meta.url), "utf8");
    assert.match(screen, new RegExp(`data-screen-id="${id}"`));
    assert.match(screen, /shared\/screens\.css/);
    assert.match(screen, /shared\/screens\.js/);
    for (const state of ["loading", "empty", "error", "forbidden"]) {
      assert.match(screen, new RegExp(`data-state="${state}"`));
    }
  }
});
