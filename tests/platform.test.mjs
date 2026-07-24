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
