const prototypeRoutes = new Map([
  ["HOME-01", "home"],
  ["EXP-01", "explore"],
  ["PBL-02", "project"],
  ["MYL-01", "learning"],
  ["PBL-05", "workspace"],
  ["PBL-09", "peer"],
  ["GROW-01", "growth"],
  ["CMD-01", "commander"],
  ["ADM-01", "admin"],
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
  const route = prototypeRoutes.get(screen.id);
  badge.className = `screen-badge ${route ? "prototype" : "planned"}`;
  badge.textContent = route ? "내부 작업 중 · 프로토타입" : "내부 작업 중";
  wrapper.append(badge);

  if (route) {
    const link = document.createElement("a");
    link.href = `./prototype.html#/${route}`;
    link.textContent = "화면 열기 →";
    link.setAttribute("aria-label", `${screen.name} 프로토타입 열기`);
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
    const hasPrototype = prototypeRoutes.has(screen.id);
    const matchesQuery = !query || `${screen.id} ${screen.name} ${screen.group}`.toLocaleLowerCase("ko").includes(query);
    const matchesGroup = state.group === "all" || screen.group === state.group;
    const matchesStatus = state.status === "all"
      || (state.status === "prototype" && hasPrototype)
      || (state.status === "planned" && !hasPrototype);
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

  result.textContent = `전체 ${state.screens.length}개 중 ${filtered.length}개 화면 표시 · 프로토타입 연결 ${prototypeRoutes.size}개`;
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
    document.querySelector("#linked-count").textContent = prototypeRoutes.size;
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
