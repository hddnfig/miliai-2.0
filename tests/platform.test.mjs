import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const [html, handoffHtml, prototype, handoff, app, css, platformTheme] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../handoff.html", import.meta.url), "utf8"),
  readFile(new URL("../prototype.html", import.meta.url), "utf8"),
  readFile(new URL("../src/handoff.js", import.meta.url), "utf8"),
  readFile(new URL("../src/app.js", import.meta.url), "utf8"),
  readFile(new URL("../src/styles.css", import.meta.url), "utf8"),
  readFile(new URL("../src/platform-theme.css", import.meta.url), "utf8"),
]);

test("entry document opens the platform prototype", () => {
  assert.match(html, /id="app"/);
  assert.match(html, /본문으로 건너뛰기/);
  assert.match(html, /src="\.\/src\/app\.js"/);
  assert.match(html, /data-theme="digital-camouflage"/);
  assert.match(html, /src\/platform-theme\.css/);
});

test("handoff index remains available as a separate page", () => {
  assert.match(handoffHtml, /외부 개발사 전달용/);
  assert.match(handoffHtml, /id="screen-index"/);
  assert.match(handoffHtml, /docs\/design\/README\.md/);
  assert.match(handoffHtml, /src="\.\/src\/handoff\.js"/);
});

test("prototype keeps the existing app entry", () => {
  assert.match(prototype, /id="app"/);
  assert.match(prototype, /본문으로 건너뛰기/);
  assert.match(prototype, /src="\.\/src\/app\.js"/);
  assert.match(prototype, /data-theme="digital-camouflage"/);
  assert.match(prototype, /src\/platform-theme\.css/);
  assert.doesNotMatch(prototype, /fonts\.googleapis\.com/);
});

test("platform theme reuses the shared design tokens and local concept assets", () => {
  assert.match(platformTheme, /--platform-accent: #b4ff39/);
  assert.match(platformTheme, /terrain-network-v1\.png/);
  assert.match(platformTheme, /camo-texture-v1\.png/);
  assert.match(platformTheme, /@media \(max-width: 760px\)/);
  assert.match(platformTheme, /color-scheme: dark/);
});

test("learner home background zoom follows scroll without overriding reduced motion", () => {
  assert.match(app, /updateHomeBackgroundMotion/);
  assert.match(app, /requestAnimationFrame/);
  assert.match(app, /window\.addEventListener\("scroll", updateHomeBackgroundMotion, \{ passive: true \}\)/);
  assert.match(app, /prefers-reduced-motion: reduce/);
  assert.match(platformTheme, /html\[data-route="home"\] body::before/);
  assert.match(platformTheme, /scale\(var\(--home-bg-scale\)\)/);
  assert.match(platformTheme, /@media \(prefers-reduced-motion: reduce\)/);
});

test("core learner, commander, and operator views are registered", () => {
  for (const view of ["home", "explore", "learning", "workspace", "peer", "growth", "commander", "admin"]) {
    assert.match(app, new RegExp(`${view}:`));
  }
});

test("priority learner journey follows the architecture documents", () => {
  for (const label of ["홈", "학습 탐색", "내 학습", "동료학습", "커뮤니티", "나의 성장", "MY"]) {
    assert.match(app, new RegExp(`\\[\\\"[^\\\"]+\\\", \\\"[^\\\"]+\\\", \\\"${label}\\\"`));
  }

  for (const copy of ["피드백을 반영해", "수정본 재제출", "프로젝트 여정", "AI 교관의 다음 단서", "역량 근거"]) {
    assert.match(app, new RegExp(copy));
  }
});

test("role navigation follows the remote IA hierarchy", () => {
  for (const label of ["VOD", "PBL 프로젝트", "평가 필요", "역량진단", "AI 대화 기록", "차수/운영", "댓글/첨부/신고", "OAuth2 클라이언트"]) {
    assert.ok(app.includes(`, "${label}"]`));
  }
  assert.match(app, /class="subnav"/);
  assert.match(app, /search: searchView/);
  assert.match(app, /community: communityView/);
  assert.match(app, /my: myView/);
});

test("learner home visualizes the existing journey over the terrain background", () => {
  assert.match(app, /class="home-terrain-stage"/);
  assert.match(app, /class="terrain-roadmap" aria-hidden="true"/);
  assert.equal((app.match(/class="terrain-roadmap-step/g) || []).length, 5);
  assert.match(platformTheme, /\.terrain-roadmap-step\.is-current/);
  assert.match(platformTheme, /html\[data-route="home"\] body::after/);
});

test("responsive navigation rules are present", () => {
  assert.match(css, /\.mobile-nav/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /\.revision-workspace \.revision-tools/);
});

test("handoff index maps implemented screens without hiding planned screens", () => {
  for (const id of ["HOME-01", "EXP-01", "VOD-01", "PBL-01", "SRCH-01", "PBL-02", "MYL-01", "PBL-05", "PBL-09", "GROW-01", "CMD-01", "ADM-01"]) {
    assert.match(handoff, new RegExp(`\\[\"${id}\"`));
  }
  assert.match(handoff, /\.\/screens\/HOME-01\.html/);
  assert.match(handoff, /검수 완료 · 독립 HTML/);
  assert.match(handoff, /내부 작업 중/);
  assert.match(handoff, /screen-registry\.json/);
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
  assert.match(checklist, /그래픽 시스템 최종 고도화/);
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

test("initial screens actively use replaceable abstract and kinetic assets", async () => {
  const [theme, screens, order] = await Promise.all([
    readFile(new URL("../src/design-system/themes/digital-camouflage.css", import.meta.url), "utf8"),
    readFile(new URL("../screens/shared/screens.css", import.meta.url), "utf8"),
    readFile(new URL("../docs/design/design-execution-order.md", import.meta.url), "utf8"),
  ]);

  assert.match(theme, /--ds-asset-ambient-duration/);
  assert.match(screens, /background-image: var\(--ds-asset-background\)/);
  assert.match(screens, /background-image: var\(--ds-asset-texture\)/);
  assert.match(screens, /@keyframes asset-drift/);
  assert.match(screens, /@keyframes texture-drift/);
  assert.match(order, /모든 화면의 1차 구축부터 추상 그래픽·패턴·키네틱 에셋을 적극 사용/);
  assert.match(order, /에셋을 처음 추가하는 단계가 아니라/);
});
