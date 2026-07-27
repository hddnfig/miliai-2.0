import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const inventoryPath = resolve(root, "docs/ia/02-screen-inventory.md");
const outputPath = resolve(root, "docs/design/screen-registry.json");

const inventory = await readFile(inventoryPath, "utf8");
const lines = inventory.split(/\r?\n/);

let group = "";
const screens = [];

for (const line of lines) {
  const heading = line.match(/^## \d+\. (.+)$/);
  if (heading) {
    group = heading[1];
    continue;
  }

  if (!line.startsWith("|")) continue;
  const cells = line
    .split("|")
    .slice(1, -1)
    .map((cell) => cell.trim());

  if (cells.length < 6) continue;

  const identity = cells[0].match(/^([A-Z]+(?:-[A-Z]+)*-\d{2}) \/ (P[0-2])$/);
  const route = cells[1].match(/^(.*?) `([^`]+)`$/);
  if (!identity || !route) continue;

  const [, id, priority] = identity;
  const [, name, iaPath] = route;
  const domain = id.split("-")[0];

  screens.push({
    id,
    name,
    priority,
    certainty: cells[5],
    domain,
    group,
    iaPath,
    artifactPath: `/screens/${id}.html`,
    shell: inferShell(id),
    pattern: inferPattern(name),
    statePolicy: "inline",
    themeSupport: ["neutral", "digital-camouflage"],
    status: "planned",
  });
}

if (screens.length !== 70) {
  throw new Error(`Expected 70 screens from IA, received ${screens.length}`);
}

const registry = {
  source: "docs/ia/02-screen-inventory.md",
  generatedBy: "scripts/generate-screen-registry.mjs",
  pageCount: screens.length,
  stateRule:
    "Dynamic UI states stay inside the owning HTML page and may be selected with a state query parameter.",
  screens,
};

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(registry, null, 2)}\n`, "utf8");

console.log(`Generated ${screens.length} screen records at ${outputPath}`);

function inferShell(id) {
  if (id.startsWith("PUB-")) return "public";
  if (id.startsWith("AUTH-")) return "auth";
  if (id.startsWith("CMD-")) return "commander";
  if (id.startsWith("ADM-")) return "admin";
  if (/^(VOD-0[4-7]|PBL-0[5-8])$/.test(id)) return "focus";
  return "learner";
}

function inferPattern(name) {
  if (/(플레이어|코딩 실습|문제 수행)/.test(name)) return "focus-workspace";
  if (/(워크스페이스|미션 상세|미션 제출)/.test(name)) return "workspace";
  if (/(목록|탐색|검색|허브|관심 콘텐츠|내 활동|수료증)/.test(name)) return "catalog";
  if (/(상세|결과|완료)/.test(name)) return "detail";
  if (/(대시보드|현황|성장 대시보드|역량 맵|역량 분석)/.test(name)) return "dashboard";
  if (/(편집|작성·수정|공통 콘텐츠|역량·진단)/.test(name)) return "structured-editor";
  if (/(운영|차수|회원 목록|부대·계급|게시판 관리|로그·보안)/.test(name)) return "operations";
  if (/(로그인|회원가입|온보딩|찾기|신청|팀 구성|평가 작성|설문|퀴즈|진단|프로필|설정)/.test(name)) {
    return "form-flow";
  }
  return "content";
}
