const screenLinks = new Map([
  ["HOME-01", { href: "./screens/HOME-01.html", status: "verified", label: "검수 완료 · 독립 HTML" }],
  ["EXP-01", { href: "./screens/EXP-01.html", status: "verified", label: "검수 완료 · 독립 HTML" }],
  ["VOD-01", { href: "./screens/VOD-01.html", status: "verified", label: "검수 완료 · 독립 HTML" }],
  ["PBL-01", { href: "./screens/PBL-01.html", status: "verified", label: "검수 완료 · 독립 HTML" }],
  ["SRCH-01", { href: "./screens/SRCH-01.html", status: "verified", label: "검수 완료 · 독립 HTML" }],
  ["PBL-02", { href: "./prototype.html#/project", status: "prototype", label: "내부 작업 중 · 통합 프로토타입" }],
  ["MYL-01", { href: "./prototype.html#/learning", status: "prototype", label: "내부 작업 중 · 통합 프로토타입" }],
  ["PBL-05", { href: "./prototype.html#/workspace", status: "prototype", label: "내부 작업 중 · 통합 프로토타입" }],
  ["PBL-09", { href: "./prototype.html#/peer", status: "prototype", label: "내부 작업 중 · 통합 프로토타입" }],
  ["GROW-01", { href: "./prototype.html#/growth", status: "prototype", label: "내부 작업 중 · 통합 프로토타입" }],
  ["CMD-01", { href: "./prototype.html#/commander", status: "prototype", label: "내부 작업 중 · 통합 프로토타입" }],
  ["ADM-01", { href: "./prototype.html#/admin", status: "prototype", label: "내부 작업 중 · 통합 프로토타입" }],
]);

const state = {
  screens: [],
  search: "",
  group: "all",
  status: "all",
};

const list = document.querySelector("#screen-list");
const result = document.querySelector("#screen-result");
const searchInput = document.querySelector("#screen-search");
const groupFilter = document.querySelector("#group-filter");
const statusFilter = document.querySelector("#status-filter");

function createCell(content, className = "") {
  const cell = document.createElement("td");
  if (className) cell.className = className;
  if (content instanceof Node) cell.append(content);
  else cell.textContent = content;
  return cell;
}

function statusContent(screen) {
  const wrapper = document.createElement("div");
  wrapper.className = "screen-status";

  const badge = document.createElement("span");
  const linkInfo = screenLinks.get(screen.id);
  badge.className = `screen-badge ${linkInfo?.status ?? "planned"}`;
  badge.textContent = linkInfo?.label ?? "내부 작업 중";
  wrapper.append(badge);

  if (linkInfo) {
    const link = document.createElement("a");
    link.href = linkInfo.href;
    link.textContent = "화면 열기 →";
    link.setAttribute("aria-label", `${screen.name} 화면 열기`);
    wrapper.append(link);
  } else {
    const note = document.createElement("small");
    note.textContent = "독립 HTML 구현 예정";
    wrapper.append(note);
  }

  return wrapper;
}

function render() {
  const query = state.search.trim().toLocaleLowerCase("ko");
  const filtered = state.screens.filter((screen) => {
    const status = screenLinks.get(screen.id)?.status ?? "planned";
    const matchesQuery = !query || `${screen.id} ${screen.name} ${screen.group}`.toLocaleLowerCase("ko").includes(query);
    const matchesGroup = state.group === "all" || screen.group === state.group;
    const matchesStatus = state.status === "all" || state.status === status;
    return matchesQuery && matchesGroup && matchesStatus;
  });

  list.replaceChildren();
  for (const screen of filtered) {
    const row = document.createElement("tr");
    row.append(
      createCell(screen.id, "screen-id"),
      createCell(screen.name, "screen-name"),
      createCell(screen.group),
      createCell(screen.priority),
      createCell(screen.certainty),
      createCell("Desktop · Tablet · Mobile", "device-support"),
      createCell(statusContent(screen)),
    );
    list.append(row);
  }

  if (!filtered.length) {
    const row = document.createElement("tr");
    const cell = createCell("조건에 맞는 화면이 없습니다. 검색어나 필터를 변경해 주세요.", "registry-message");
    cell.colSpan = 7;
    row.append(cell);
    list.append(row);
  }

  const verifiedCount = state.screens.filter((screen) => screen.status === "verified").length;
  result.textContent = `전체 ${state.screens.length}개 중 ${filtered.length}개 화면 표시 · 검수 완료 ${verifiedCount}개 · 화면 연결 ${screenLinks.size}개`;
}

function populateGroups() {
  const groups = [...new Set(state.screens.map(({ group }) => group))];
  for (const group of groups) {
    const option = document.createElement("option");
    option.value = group;
    option.textContent = group;
    groupFilter.append(option);
  }
}

async function loadRegistry() {
  try {
    const response = await fetch("./docs/design/screen-registry.json");
    if (!response.ok) throw new Error(`화면 원장 응답 오류: ${response.status}`);
    const registry = await response.json();
    state.screens = registry.screens;
    document.querySelector("#total-count").textContent = registry.pageCount;
    document.querySelector("#linked-count").textContent = screenLinks.size;
    document.querySelector("#verified-count").textContent = registry.screens.filter(({ status }) => status === "verified").length;
    populateGroups();
    render();
  } catch (error) {
    const row = document.createElement("tr");
    const cell = createCell("화면 원장을 불러오지 못했습니다. 로컬 서버 실행 여부와 docs/design/screen-registry.json 경로를 확인해 주세요.", "registry-message error");
    cell.colSpan = 7;
    row.append(cell);
    list.replaceChildren(row);
    result.textContent = "화면 원장 로딩 오류";
    console.error(error);
  }
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

groupFilter.addEventListener("change", (event) => {
  state.group = event.target.value;
  render();
});

statusFilter.addEventListener("change", (event) => {
  state.status = event.target.value;
  render();
});

loadRegistry();
