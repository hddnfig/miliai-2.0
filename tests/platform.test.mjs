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

test("provided IA top-level menus and learning branches are registered", () => {
  for (const menu of ["메인화면", "VOD 콘텐츠", "PBL 콘텐츠", "커뮤니티", "소개", "개인메뉴", "회원", "역량진단", "로드맵", "관리시스템"]) {
    assert.match(app, new RegExp(`"${menu}"`));
  }
  for (const branch of ["동영상", "자료·과제 제출", "미션목록·현황", "동료평가", "AI채팅", "스파이더차트"]) {
    assert.match(app, new RegExp(`"${branch}"`));
  }
});

test("responsive navigation rules are present", () => {
  assert.match(css, /\.mobile-nav/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /:focus-visible/);
});
