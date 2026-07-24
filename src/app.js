const iconPaths = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10"/><path d="M9 20v-6h6v6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/><path d="M8 9h8M8 13h5"/>',
  growth: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
  sparkles: '<path d="m12 3-1.2 3.8L7 8l3.8 1.2L12 13l1.2-3.8L17 8l-3.8-1.2L12 3Z"/><path d="m5 13-.8 2.2L2 16l2.2.8L5 19l.8-2.2L8 16l-2.2-.8L5 13ZM19 13l-.6 1.4L17 15l1.4.6L19 17l.6-1.4L21 15l-1.4-.6L19 13Z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  folder: '<path d="M3 6h7l2 2h9v11H3V6Z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  command: '<path d="M6 3h12l3 5-9 13L3 8l3-5Z"/><path d="M3 8h18M9 3l3 18 3-18"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.08A1.7 1.7 0 0 0 8.94 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.52-1H3v-4h.08A1.7 1.7 0 0 0 4.6 8.94a1.7 1.7 0 0 0-.34-1.88L4.2 7l2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.52V3h4v.08A1.7 1.7 0 0 0 15.06 4.6a1.7 1.7 0 0 0 1.88-.34L17 4.2 19.83 7l-.06.06a1.7 1.7 0 0 0-.34 1.88A1.7 1.7 0 0 0 20.92 10H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  logout: '<path d="M10 17l5-5-5-5M15 12H3"/><path d="M14 3h7v18h-7"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M5 20h14"/>',
  file: '<path d="M6 2h8l4 4v16H6V2Z"/><path d="M14 2v5h5M9 13h6M9 17h5"/>',
  filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
};

const icon = (name, size = 20) => `
  <svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${iconPaths[name] || iconPaths.grid}
  </svg>`;

const escapeHtml = (value) => String(value).replace(
  /[&<>'"]/g,
  (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character],
);

const projects = [
  {
    id: "demand-forecast",
    eyebrow: "수송 · 데이터 분석",
    title: "AI로 군수 수요 예측하기",
    description: "과거 보급 데이터를 분석해 다음 분기의 품목별 수요를 예측하는 모델을 설계합니다.",
    level: "중급",
    duration: "6주",
    mode: "팀 프로젝트",
    fit: 96,
    skills: ["Python", "시계열", "데이터 시각화"],
    tone: "lime",
    featured: true,
  },
  {
    id: "vision-inspection",
    eyebrow: "정비 · 컴퓨터 비전",
    title: "장비 이상 이미지 탐지",
    description: "장비 점검 이미지에서 결함 후보를 식별하는 경량 비전 모델을 구축합니다.",
    level: "고급",
    duration: "8주",
    mode: "팀 프로젝트",
    fit: 91,
    skills: ["Vision", "PyTorch", "MLOps"],
    tone: "blue",
  },
  {
    id: "prompt-ops",
    eyebrow: "행정 · 생성형 AI",
    title: "업무 보고서 자동화 설계",
    description: "보안 기준을 지키며 반복 보고서 작성 시간을 줄이는 프롬프트 워크플로를 만듭니다.",
    level: "입문",
    duration: "3주",
    mode: "개인 프로젝트",
    fit: 88,
    skills: ["Prompting", "업무자동화"],
    tone: "orange",
  },
  {
    id: "sensor-analysis",
    eyebrow: "작전 · 이상 탐지",
    title: "센서 로그 이상 징후 분석",
    description: "다변량 센서 로그의 패턴을 학습하고 설명 가능한 이상 탐지 기준을 제안합니다.",
    level: "중급",
    duration: "5주",
    mode: "개인 프로젝트",
    fit: 84,
    skills: ["Anomaly", "Pandas", "XAI"],
    tone: "purple",
  },
  {
    id: "data-literacy",
    eyebrow: "공통 · VOD 과정",
    title: "지휘관을 위한 데이터 리터러시",
    description: "지표를 올바르게 읽고 교육·작전 의사결정에 활용하는 기본 원칙을 익힙니다.",
    level: "입문",
    duration: "4시간",
    mode: "모바일 가능",
    fit: 81,
    skills: ["데이터 해석", "의사결정"],
    tone: "teal",
  },
  {
    id: "rag-basics",
    eyebrow: "정보 · VOD 과정",
    title: "신뢰할 수 있는 RAG 시작하기",
    description: "검색 증강 생성의 구조와 출처 기반 답변 품질 평가 방법을 실습합니다.",
    level: "중급",
    duration: "7시간",
    mode: "PC 권장",
    fit: 79,
    skills: ["RAG", "평가", "Vector DB"],
    tone: "navy",
  },
];

const state = {
  role: "learner",
  route: "home",
  sidebarOpen: false,
  aiOpen: false,
  notificationsOpen: false,
  search: "",
  filter: "전체",
  submitted: false,
  aiMessages: [],
  checklist: new Set(["품목군별 검증 구간 추가", "MAPE 비교표 갱신", "민감정보 포함 여부 확인"]),
};

const navByRole = {
  learner: [
    ["home", "home", "홈"],
    ["explore", "compass", "탐색"],
    ["learning", "book", "내 학습"],
    ["peer", "users", "함께 학습", "3"],
    ["growth", "growth", "나의 성장"],
  ],
  commander: [
    ["commander", "home", "현황"],
    ["unit", "users", "부대 학습"],
    ["programs", "book", "교육 프로그램"],
    ["competency", "growth", "역량 분석"],
    ["support", "shield", "지원 대상", "12"],
    ["reports", "chart", "리포트"],
  ],
  admin: [
    ["admin", "grid", "운영 대시보드"],
    ["project-admin", "folder", "프로젝트 관리"],
    ["vod-admin", "play", "VOD 관리"],
    ["operations", "chart", "교육 운영"],
    ["ai-admin", "sparkles", "AI 교관 관리"],
    ["users-admin", "users", "사용자·조직"],
    ["system", "settings", "시스템"],
  ],
};

const labels = {
  home: "홈",
  explore: "탐색",
  project: "프로젝트 상세",
  learning: "내 학습",
  workspace: "미션 수행",
  peer: "함께 학습",
  community: "커뮤니티",
  growth: "나의 성장",
  my: "MY",
  commander: "지휘관 대시보드",
  unit: "부대 학습",
  programs: "교육 프로그램",
  competency: "역량 분석",
  support: "지원 대상",
  reports: "리포트",
  admin: "운영 대시보드",
  "project-admin": "프로젝트 관리",
  "vod-admin": "VOD 관리",
  operations: "교육 운영",
  "ai-admin": "AI 교관 관리",
  "users-admin": "사용자·조직",
  system: "시스템",
};

const roleLabels = {
  learner: ["학습자", "김밀리 상병"],
  commander: ["지휘관", "교육담당관"],
  admin: ["운영자", "플랫폼 관리자"],
};

function routeFromHash() {
  const next = window.location.hash.replace("#/", "").split("?")[0];
  if (navByRole.commander.some(([route]) => route === next)) state.role = "commander";
  if (navByRole.admin.some(([route]) => route === next)) state.role = "admin";
  if (["home", "explore", "project", "learning", "workspace", "peer", "community", "growth", "my"].includes(next)) state.role = "learner";
  return labels[next] ? next : state.role === "learner" ? "home" : state.role;
}

function navigate(route) {
  window.location.hash = `#/${route}`;
}

function sidebar() {
  const items = navByRole[state.role];
  return `
    <aside class="sidebar ${state.sidebarOpen ? "is-open" : ""}" aria-label="주 메뉴">
      <div class="brand">
        <span class="brand-mark">M</span>
        <span class="brand-copy"><strong>MILI AI</strong><small>MISSION INTELLIGENCE</small></span>
        <button class="icon-button sidebar-close" data-action="close-menu" aria-label="메뉴 닫기">${icon("close")}</button>
      </div>
      <div class="environment-badge"><span></span> MILI AI 학습 플랫폼 <b>MVP</b></div>
      <nav class="nav-list">
        <p class="nav-caption">WORKSPACE</p>
        ${items
          .map(
            ([route, iconName, label, count]) => `
              <a href="#/${route}" class="nav-item ${state.route === route ? "active" : ""}" data-route="${route}">
                ${icon(iconName)}<span>${label}</span>${count ? `<em>${count}</em>` : ""}
              </a>`,
          )
          .join("")}
      </nav>
      <div class="sidebar-support">
        <div class="support-icon">${icon("sparkles", 19)}</div>
        <div><strong>도움이 필요하신가요?</strong><span>AI 교관에게 바로 물어보세요.</span></div>
        <button class="text-button light" data-action="open-ai">질문하기 ${icon("arrow", 15)}</button>
      </div>
      <div class="sidebar-profile">
        <span class="avatar">김</span>
        <div><strong>${roleLabels[state.role][1]}</strong><small>${roleLabels[state.role][0]} 모드</small></div>
        <button class="icon-button dark" aria-label="로그아웃">${icon("logout", 17)}</button>
      </div>
    </aside>
    ${state.sidebarOpen ? '<button class="sidebar-scrim" data-action="close-menu" aria-label="메뉴 닫기"></button>' : ""}
  `;
}

function topbar() {
  return `
    <header class="topbar">
      <div class="topbar-left">
        <button class="icon-button menu-button" data-action="open-menu" aria-label="메뉴 열기">${icon("menu")}</button>
        <div class="breadcrumb"><span>${roleLabels[state.role][0]} 워크스페이스</span><b>/</b><strong>${labels[state.route] || "대시보드"}</strong></div>
      </div>
      <div class="topbar-actions">
        <button class="search-trigger" data-action="go-search">${icon("search", 18)}<span>프로젝트, 과정, 게시글 검색</span><kbd>⌘ K</kbd></button>
        <label class="role-switch" aria-label="역할 전환">
          ${icon(state.role === "learner" ? "user" : state.role === "commander" ? "command" : "settings", 17)}
          <select id="role-switch">
            <option value="learner" ${state.role === "learner" ? "selected" : ""}>학습자</option>
            <option value="commander" ${state.role === "commander" ? "selected" : ""}>지휘관</option>
            <option value="admin" ${state.role === "admin" ? "selected" : ""}>운영자</option>
          </select>
        </label>
        <button class="icon-button has-dot" data-action="toggle-notifications" aria-label="알림 열기">${icon("bell", 19)}<span></span></button>
        <button class="avatar top-avatar" aria-label="내 프로필">김</button>
      </div>
    </header>
  `;
}

function mobileNav() {
  const items = state.role === "learner"
    ? [
        ["home", "home", "홈"],
        ["explore", "compass", "탐색"],
        ["learning", "book", "내 학습"],
        ["growth", "growth", "성장"],
      ]
    : navByRole[state.role].slice(0, 4);
  return `<nav class="mobile-nav" aria-label="모바일 메뉴">
    ${items.map(([route, iconName, label]) => `<a href="#/${route}" class="${state.route === route ? "active" : ""}">${icon(iconName, 19)}<span>${label}</span></a>`).join("")}
    <a href="#/my" class="${state.route === "my" ? "active" : ""}" aria-label="MY">${icon("user", 19)}<span>MY</span></a>
  </nav>`;
}

function noticePanel() {
  if (!state.notificationsOpen) return "";
  return `
    <div class="floating-panel notice-panel">
      <div class="panel-head"><div><span class="eyebrow">NOTIFICATIONS</span><h3>알림센터</h3></div><button class="icon-button" data-action="toggle-notifications">${icon("close", 18)}</button></div>
      <div class="notice-list">
        <button><span class="notice-symbol feedback">${icon("message", 17)}</span><span><b>새 동료 피드백이 도착했습니다.</b><small>군수 수요 예측 · 미션 03</small><em>방금 전</em></span></button>
        <button><span class="notice-symbol review">${icon("users", 17)}</span><span><b>평가 마감이 8시간 남았습니다.</b><small>장비 이상 이미지 탐지</small><em>12분 전</em></span></button>
        <button><span class="notice-symbol done">${icon("check", 17)}</span><span><b>VOD 과정 수료가 승인되었습니다.</b><small>Python 데이터 분석 기초</small><em>어제</em></span></button>
      </div>
      <button class="full-link">모든 알림 보기 ${icon("arrow", 15)}</button>
    </div>`;
}

function aiPanel() {
  if (!state.aiOpen) return "";
  return `
    <button class="drawer-scrim" data-action="close-ai" aria-label="AI 교관 닫기"></button>
    <aside class="ai-drawer" aria-label="AI 교관">
      <div class="ai-head">
        <div class="ai-avatar">${icon("sparkles", 20)}</div>
        <div><span>현재 미션을 이해하고 있어요</span><h3>MILI AI 교관</h3></div>
        <button class="icon-button" data-action="close-ai" aria-label="AI 교관 닫기">${icon("close")}</button>
      </div>
      <div class="context-card">
        <span class="status-dot"></span><div><small>현재 학습 컨텍스트</small><strong>군수 수요 예측 · 미션 03</strong></div><span class="chip tiny">자동 인식</span>
      </div>
      <div class="ai-conversation">
        <div class="ai-bubble tutor"><span class="mini-avatar">M</span><div><p>김밀리 상병님, 어디에서 막혔나요? 정답 대신 스스로 해결할 수 있는 단계별 힌트를 드릴게요.</p><small>AI 교관 · 방금</small></div></div>
        ${state.aiMessages.map((message) => `<div class="ai-bubble ${message.type}">${message.type === "tutor" ? '<span class="mini-avatar">M</span>' : ""}<div><p>${escapeHtml(message.text)}</p>${message.type === "tutor" ? "<small>출처 · 미션 가이드 3.2, 데이터 명세서</small>" : ""}</div></div>`).join("")}
      </div>
      <div class="quick-prompts">
        <button data-ai-question="평가 기준에 맞게 점검해줘">${icon("check", 15)} 제출 전 점검</button>
        <button data-ai-question="모델 성능을 개선할 힌트를 줘">${icon("sparkles", 15)} 단계별 힌트</button>
        <button data-ai-question="내 접근 방식의 위험을 알려줘">${icon("shield", 15)} 접근 방식 검토</button>
      </div>
      <form class="ai-input" id="ai-form">
        <textarea id="ai-question" rows="2" placeholder="현재 미션에 관해 질문하세요" aria-label="AI 교관에게 질문"></textarea>
        <div><small>AI 답변은 중요 정보를 다시 확인하세요.</small><button class="send-button" type="submit" aria-label="질문 전송">${icon("arrow", 18)}</button></div>
      </form>
    </aside>`;
}

function shell(content) {
  return `
    <div class="app-shell">
      ${sidebar()}
      <div class="app-body">
        ${topbar()}
        <main id="main-content" class="main-content" tabindex="-1">${content}</main>
      </div>
      ${mobileNav()}
      ${state.route === "workspace" ? `<button class="ai-fab" data-action="open-ai" aria-label="AI 교관 열기">${icon("sparkles", 20)}<span>AI 교관</span></button>` : ""}
      ${noticePanel()}
      ${aiPanel()}
    </div>`;
}

function pageHeader(eyebrow, title, description, action = "") {
  return `<div class="page-header"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${description}</p></div>${action}</div>`;
}

function progressBar(value, label = "") {
  return `<div class="progress-wrap" ${label ? `aria-label="${label} ${value}%"` : ""}><span style="width:${value}%"></span></div>`;
}

function homeView() {
  return `
    <section class="view dashboard-view priority-home">
      <header class="home-intro">
        <div>
          <span class="eyebrow">FRIDAY · 2026. 07. 24</span>
          <h1>오늘 연결할 지식이, <br />내일 해결할 문제의 길이 됩니다.</h1>
          <p>김밀리 상병님, 지금은 새 학습보다 받은 피드백을 반영하는 일이 먼저예요.</p>
        </div>
        <div class="today-signal" aria-label="오늘의 우선순위 1개">
          <span>${icon("message", 18)}</span>
          <div><small>오늘의 우선순위</small><strong>수정 필요 1건</strong></div>
          <em>D-2</em>
        </div>
      </header>

      <div class="priority-grid">
        <article class="priority-card">
          <div class="priority-card-top">
            <span class="status-pill revision">${icon("message", 14)} 수정 필요 · 제출 v1.2</span>
            <span class="autosave-state">${icon("check", 14)} 초안 자동 저장됨</span>
          </div>
          <div class="priority-copy">
            <span class="eyebrow light">AI로 군수 수요 예측하기 · 미션 03</span>
            <h2>피드백을 반영해<br />모델 선택 근거를 완성하세요.</h2>
            <p>멘토와 동료가 같은 보완 지점을 짚었습니다. 계절성 변동이 큰 품목군의 검증 근거를 추가하면 재제출할 수 있어요.</p>
          </div>
          <div class="feedback-focus">
            <span class="feedback-source mentor">멘토</span>
            <p><strong>검증 구간을 품목군별로 분리해 주세요.</strong><small>루브릭 03 · 결과 해석의 타당성</small></p>
            <span class="feedback-source peer">동료</span>
            <p><strong>전체 MAPE만으로는 변동성이 가려집니다.</strong><small>동료평가 · 오늘 09:42</small></p>
          </div>
          <div class="priority-footer">
            <div class="priority-actions">
              <button class="primary-button light-button" data-action="continue-learning">피드백 반영하기 ${icon("arrow", 17)}</button>
              <button class="outline-button light-outline" data-action="open-ai">AI 교관에게 먼저 묻기</button>
            </div>
            <div class="priority-progress">
              <span><b>48%</b><small>프로젝트 진행률 · 3/6 미션</small></span>
              ${progressBar(48, "프로젝트 진행률")}
            </div>
          </div>
          <div class="field-visual" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
        </article>

        <aside class="panel journey-card">
          <div class="section-heading">
            <div><span class="eyebrow">PROJECT JOURNEY</span><h2>프로젝트 여정</h2></div>
            <button class="text-button" data-action="go-learning">전체 보기 ${icon("arrow", 14)}</button>
          </div>
          <p class="journey-summary"><strong>2개 완료</strong> · 1개 보완 중 · 3개 대기</p>
          <ol class="journey-list">
            <li class="complete"><span>${icon("check", 14)}</span><div><small>미션 01</small><b>문제와 조건 이해</b></div><em>완료</em></li>
            <li class="complete"><span>${icon("check", 14)}</span><div><small>미션 02</small><b>데이터 품질 진단</b></div><em>완료</em></li>
            <li class="current"><span>03</span><div><small>현재 미션</small><b>예측 모델 설계</b></div><em>보완 중</em></li>
            <li class="locked"><span>${icon("shield", 13)}</span><div><small>미션 04</small><b>모델 성능 검증</b></div><em>03 통과 후</em></li>
            <li class="locked compact-node"><span>+2</span><div><small>남은 미션</small><b>대시보드 · 최종 브리핑</b></div></li>
          </ol>
          <div class="unlock-note">${icon("shield", 15)} 미션 03이 통과되면 다음 미션이 열립니다.</div>
        </aside>
      </div>

      <div class="home-insight-grid">
        <article class="panel learning-flow-panel">
          <div class="section-heading"><div><span class="eyebrow">TODAY'S FLOW</span><h2>오늘의 학습 흐름</h2></div><span class="count-badge">3</span></div>
          <div class="flow-list">
            <button class="is-priority" data-action="continue-learning"><span class="flow-time">지금</span><span class="flow-marker">01</span><span><b>미션 03 수정본 완성</b><small>멘토 피드백 2개 반영 · 예상 35분</small></span><em>우선</em>${icon("chevron", 16)}</button>
            <button><span class="flow-time">이후</span><span class="flow-marker vod">02</span><span><b>시계열 검증 VOD 12분</b><small>현재 보완 항목과 연결된 선수학습</small></span>${icon("chevron", 16)}</button>
            <button data-action="go-peer"><span class="flow-time">오늘</span><span class="flow-marker peer">03</span><span><b>동료 결과물 평가</b><small>익명 평가 · 오늘 23:59 마감</small></span>${icon("chevron", 16)}</button>
          </div>
        </article>

        <article class="panel ai-clue-card">
          <div class="ai-clue-head"><span class="ai-clue-icon">${icon("sparkles", 19)}</span><div><span class="eyebrow">AI TUTOR · NEXT CLUE</span><h2>AI 교관의 다음 단서</h2></div><span class="verified-label">근거 2개</span></div>
          <blockquote>“전체 평균을 다시 계산하기보다, 변동성이 큰 A·C 품목군을 별도 검증 구간으로 나눠 비교해 보세요.”</blockquote>
          <div class="source-list">
            <button><span>01</span><p><b>미션 가이드 3.2</b><small>검증 데이터 분할 기준 · v2.1</small></p>${icon("chevron", 14)}</button>
            <button><span>02</span><p><b>수요 데이터 명세서</b><small>품목군별 계절성 지표 · v1.4</small></p>${icon("chevron", 14)}</button>
          </div>
          <p class="ai-caution">${icon("shield", 14)} AI 답변은 제안입니다. 출처와 실제 데이터를 함께 확인하세요.</p>
          <button class="text-button" data-action="open-ai">이 맥락으로 질문하기 ${icon("arrow", 14)}</button>
        </article>

        <article class="panel evidence-card">
          <div class="section-heading"><div><span class="eyebrow">SKILL EVIDENCE</span><h2>이번 프로젝트의 역량 근거</h2></div><button class="icon-button" data-action="go-growth" aria-label="역량 근거 보기">${icon("arrow", 17)}</button></div>
          <p>수강 완료가 아니라 제출물과 평가 결과가 근거로 반영됩니다.</p>
          <div class="evidence-list">
            <div><span class="evidence-icon confirmed">${icon("check", 14)}</span><p><b>데이터 품질 진단</b><small>미션 02 · 멘토 평가 통과</small></p><em>확인됨</em></div>
            <div><span class="evidence-icon current">03</span><p><b>예측 모델 비교</b><small>수정본 평가 후 반영 예정</small></p><em>검토 중</em></div>
            <div><span class="evidence-icon locked">${icon("shield", 13)}</span><p><b>의사결정 설명</b><small>미션 06 완료 후 확인</small></p><em>대기</em></div>
          </div>
          <button class="full-link" data-action="go-growth">역량 근거 전체 보기 ${icon("arrow", 14)}</button>
        </article>
      </div>
    </section>`;
}

function miniCourse(project) {
  return `<button class="mini-course" data-project="${project.id}"><span class="mini-cover ${project.tone}"><b>${project.eyebrow.split(" · ")[1]}</b><small>${project.level}</small></span><span class="mini-copy"><small>${project.eyebrow}</small><strong>${project.title}</strong><span><em>${project.fit}% 적합</em> · ${project.duration}</span></span>${icon("arrow", 17)}</button>`;
}

function projectCard(project) {
  return `<article class="project-card">
    <button class="project-cover ${project.tone}" data-project="${project.id}" aria-label="${project.title} 상세 보기">
      <span class="project-index">${project.id === "demand-forecast" ? "01" : String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
      <span class="cover-grid"></span>
      <span class="fit-score"><b>${project.fit}</b><small>% MATCH</small></span>
      ${project.mode.includes("모바일") ? '<span class="mobile-ready">모바일 학습</span>' : ""}
    </button>
    <div class="project-info"><div><span class="eyebrow">${project.eyebrow}</span><span class="bookmark" aria-label="찜하기">♡</span></div><h3>${project.title}</h3><p>${project.description}</p><div class="tag-row">${project.skills.map((skill) => `<span>${skill}</span>`).join("")}</div><footer><span>${icon("clock", 15)} ${project.duration}</span><span>${icon("users", 15)} ${project.mode}</span><button data-project="${project.id}">${icon("arrow", 17)}</button></footer></div>
  </article>`;
}

function exploreView() {
  const filtered = projects.filter((project) => {
    const query = state.search.toLowerCase();
    const matchesQuery = !query || `${project.title} ${project.description} ${project.skills.join(" ")}`.toLowerCase().includes(query);
    const matchesFilter = state.filter === "전체" || project.level === state.filter || project.mode.includes(state.filter) || project.eyebrow.includes(state.filter);
    return matchesQuery && matchesFilter;
  });
  return `
    <section class="view explore-view">
      ${pageHeader("LEARNING CATALOG", "임무에서 출발하는 AI 학습", "나의 직무와 역량에 맞는 프로젝트를 찾아 실제 문제를 해결해 보세요.", '<button class="secondary-button">♡ 찜한 학습 <span class="soft-count">4</span></button>')}
      <div class="catalog-search">
        <label>${icon("search", 20)}<input id="catalog-search" type="search" value="${escapeHtml(state.search)}" placeholder="배우고 싶은 기술이나 해결하고 싶은 문제를 검색하세요" /></label>
        <button class="filter-button">${icon("filter", 18)} 상세 필터 <span>2</span></button>
      </div>
      <div class="catalog-toolbar">
        <div class="filter-chips" role="group" aria-label="콘텐츠 필터">
          ${["전체", "입문", "중급", "고급", "프로젝트", "모바일"].map((filter) => `<button data-filter="${filter}" class="${state.filter === filter ? "active" : ""}">${filter}</button>`).join("")}
        </div>
        <div class="result-meta"><span><b>${filtered.length}</b>개의 학습</span><select aria-label="정렬"><option>추천순</option><option>최신순</option><option>짧은 학습순</option></select></div>
      </div>
      ${filtered.length ? `<div class="project-grid">${filtered.map(projectCard).join("")}</div>` : `<div class="empty-state">${icon("search", 36)}<h3>조건에 맞는 학습이 없습니다.</h3><p>검색어나 필터를 바꾸어 다시 찾아보세요.</p><button class="secondary-button" data-action="clear-filters">필터 초기화</button></div>`}
    </section>`;
}

function projectDetailView() {
  return `
    <section class="view project-detail-view">
      <button class="back-link" data-action="go-explore">← 학습 탐색으로</button>
      <div class="project-hero">
        <div class="hero-copy"><span class="eyebrow light">LOGISTICS · DATA ANALYTICS</span><div class="tag-row glass-tags"><span>팀 프로젝트</span><span>중급</span><span>6주</span></div><h1>AI로 군수 수요<br />예측하기</h1><p>불확실한 보급 환경에서 더 나은 판단을 내릴 수 있도록, 실제 군수 데이터로 수요 예측 모델과 의사결정 대시보드를 완성합니다.</p><div class="hero-actions"><button class="primary-button light-button" data-action="start-project">학습 시작하기 ${icon("arrow", 17)}</button><button class="outline-button light-outline">♡ 찜하기</button></div></div>
        <div class="hero-visual"><div class="radar-grid"></div><div class="signal-line"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="hero-metric"><span>PREDICTION ACCURACY</span><strong>87.4<small>%</small></strong><em>목표 성능 기준</em></div></div>
      </div>
      <div class="detail-layout">
        <div class="detail-main">
          <nav class="detail-tabs"><button class="active">프로젝트 소개</button><button>미션 구성</button><button>평가 방식</button><button>획득 역량</button><button>공지·Q&A</button></nav>
          <section class="detail-section"><span class="section-number">01</span><div><span class="eyebrow">MISSION BRIEF</span><h2>이번 프로젝트에서 해결할 문제</h2><p class="lead">품목별 수요 변동성이 커지면서 경험에만 의존한 보급 계획의 한계가 드러나고 있습니다. 과거 기록과 계절 요인을 함께 분석해 품목별 적정 수요를 예측하세요.</p><div class="brief-points"><div><span>01</span><p><b>데이터 탐색</b>품목·부대·시기별 수요 패턴과 결측치를 진단합니다.</p></div><div><span>02</span><p><b>모델 설계</b>기준선과 시계열 모델을 비교해 최적안을 선택합니다.</p></div><div><span>03</span><p><b>작전 제안</b>예측 근거와 위험 요인을 의사결정 문서로 정리합니다.</p></div></div></div></section>
          <section class="mission-roadmap"><div class="section-heading"><div><span class="eyebrow">MISSION ROADMAP</span><h2>6개의 미션으로 완성합니다</h2></div><span class="duration-label">예상 42시간</span></div>${["문제와 작전 환경 이해", "데이터 품질 진단", "예측 모델 설계", "모델 성능 검증", "의사결정 대시보드", "최종 브리핑"].map((title, index) => `<div class="roadmap-row ${index < 2 ? "complete" : index === 2 ? "current" : ""}"><span>${index < 2 ? icon("check", 16) : String(index + 1).padStart(2, "0")}</span><div><small>MISSION ${String(index + 1).padStart(2, "0")}</small><b>${title}</b></div><em>${["4시간", "6시간", "10시간", "8시간", "8시간", "6시간"][index]}</em>${icon("chevron", 16)}</div>`).join("")}</section>
        </div>
        <aside class="enroll-card panel"><span class="status-label"><i></i> 지금 바로 학습 가능</span><h3>프로젝트 정보</h3><dl><div><dt>학습 기간</dt><dd>2026.07.01 — 08.31</dd></div><div><dt>신청 방식</dt><dd>소속 승인 필요</dd></div><div><dt>현재 참여</dt><dd>128명 · 24개 팀</dd></div><div><dt>수료 조건</dt><dd>미션 통과 80% 이상</dd></div><div><dt>제공 기관</dt><dd>국방 AI 교육센터</dd></div></dl><div class="skill-block"><small>획득 가능 역량</small><div class="tag-row"><span>수요 예측</span><span>Python</span><span>시계열</span><span>의사결정</span></div></div><button class="primary-button" data-action="start-project">프로젝트 시작하기</button><p>${icon("shield", 14)} 모든 학습 데이터는 보안 정책에 따라 관리됩니다.</p></aside>
      </div>
    </section>`;
}

function learningView() {
  return `
    <section class="view learning-view">
      ${pageHeader("MY LEARNING", "내 학습", "프로젝트와 VOD를 한곳에서 확인하고 이어서 학습하세요.", '<button class="secondary-button">학습 기록 보기</button>')}
      <div class="summary-strip"><div><span class="summary-icon active">${icon("play", 19)}</span><p><small>진행 중</small><strong>4</strong></p></div><div><span class="summary-icon pending">${icon("clock", 19)}</span><p><small>승인 대기</small><strong>1</strong></p></div><div><span class="summary-icon complete">${icon("check", 19)}</span><p><small>완료·수료</small><strong>12</strong></p></div><div><span class="summary-icon time">${icon("chart", 19)}</span><p><small>누적 학습</small><strong>68<em>시간</em></strong></p></div></div>
      <div class="content-tabs"><button class="active">전체 4</button><button>프로젝트 2</button><button>VOD 2</button></div>
      <div class="learning-stack">
        <article class="learning-card featured-learning"><div class="learning-cover lime"><span>M03</span><small>PROJECT</small></div><div class="learning-copy"><div><span class="eyebrow">수송 · 데이터 분석</span><span class="chip orange">D-09</span></div><h3>AI로 군수 수요 예측하기</h3><p>미션 03 · 예측 모델 설계 및 기준선 비교</p><div class="progress-line"><span>전체 진행률</span><b>48%</b>${progressBar(48)}</div><div class="learning-meta"><span>${icon("clock", 15)} 최근 학습 2분 전</span><span>${icon("users", 15)} 알파 2팀</span></div></div><button class="primary-button" data-action="continue-learning">이어서 수행 ${icon("arrow", 16)}</button></article>
        <article class="learning-card"><div class="learning-cover blue"><span>07</span><small>VOD</small></div><div class="learning-copy"><div><span class="eyebrow">공통 · 데이터 기초</span><span class="chip blue">학습 중</span></div><h3>Python 데이터 분석 기초</h3><p>7강 · 데이터 시각화와 인사이트 도출</p><div class="progress-line"><span>과정 진도</span><b>72%</b>${progressBar(72)}</div><div class="learning-meta"><span>${icon("clock", 15)} 18분 남음</span><span>${icon("play", 15)} 9 / 12강</span></div></div><button class="secondary-button">이어서 보기 ${icon("arrow", 16)}</button></article>
        <article class="learning-card"><div class="learning-cover purple"><span>02</span><small>PROJECT</small></div><div class="learning-copy"><div><span class="eyebrow">정비 · 컴퓨터 비전</span><span class="chip yellow">피드백 대기</span></div><h3>장비 이상 이미지 탐지</h3><p>미션 02 · 이미지 라벨 품질 점검</p><div class="progress-line"><span>전체 진행률</span><b>31%</b>${progressBar(31)}</div><div class="learning-meta"><span>${icon("clock", 15)} 어제 학습</span><span>${icon("message", 15)} 동료평가 요청됨</span></div></div><button class="secondary-button">상태 확인 ${icon("arrow", 16)}</button></article>
      </div>
    </section>`;
}

function workspaceView() {
  const checklistItems = ["품목군별 검증 구간 추가", "MAPE 비교표 갱신", "선택 근거 3개 작성", "민감정보 포함 여부 확인"];
  return `
    <section class="workspace-view revision-workspace">
      <div class="workspace-header"><button class="icon-button" data-action="go-home" aria-label="홈으로">←</button><div><span class="eyebrow">AI로 군수 수요 예측하기 · 결과물 v1.3</span><h1>미션 03. 예측 모델 설계</h1></div><div class="workspace-status"><span>${icon("check", 14)} 초안 저장됨</span><span class="deadline revision-deadline">수정 D-2</span><button class="secondary-button compact" data-action="open-ai">${icon("sparkles", 16)} AI 교관</button></div></div>
      <div class="workspace-grid">
        <aside class="mission-sidebar"><span class="eyebrow">MISSION FLOW · 48%</span>${progressBar(48)}<nav>${["문제 이해", "데이터 탐색", "모델 설계", "성능 검증", "대시보드", "최종 브리핑"].map((title, index) => `<button class="${index < 2 ? "complete" : index === 2 ? "active revision" : "locked"}"><span>${index < 2 ? icon("check", 14) : index > 2 ? icon("shield", 13) : "03"}</span><div><small>${index === 2 ? "보완 중" : index > 2 ? "잠김" : `MISSION ${index + 1}`}</small><b>${title}</b></div></button>`).join("")}</nav><div class="team-mini"><div><span class="avatar">김</span><span class="avatar navy">박</span><span class="avatar coral">이</span></div><p><small>알파 2팀</small><b>팀 공간 열기 →</b></p></div></aside>
        <article class="mission-content">
          <nav class="workspace-tabs"><button>미션 안내</button><button>자료·데이터</button><button class="active">결과물</button><button>버전 3</button><button>피드백 <span>2</span></button></nav>
          ${state.submitted ? `
            <div class="resubmit-success">
              <span class="success-orbit">${icon("check", 25)}</span>
              <span class="eyebrow">RESUBMITTED · VERSION 1.3</span>
              <h2>더 선명해진 결과를 남겼습니다.</h2>
              <p>수정본이 안전하게 제출됐습니다. 평가가 완료되면 알림으로 알려 드릴게요.</p>
              <dl><div><dt>제출 버전</dt><dd>v1.3</dd></div><div><dt>제출 시각</dt><dd>2026.07.24 14:32</dd></div><div><dt>현재 상태</dt><dd><span class="status-pill waiting">평가 요청</span></dd></div></dl>
              <div><button class="secondary-button" data-action="go-home">홈으로 돌아가기</button><button class="primary-button" data-action="open-ai">다음 미션 준비하기 ${icon("arrow", 16)}</button></div>
            </div>` : `
          <div class="revision-document">
            <div class="revision-banner"><span>${icon("message", 19)}</span><div><small>수정 요청 · 루브릭 v2.1</small><strong>계절성 변동이 큰 품목군의 검증 근거를 보완해 주세요.</strong><p>현재 작성 내용은 보존되어 있습니다. 수정본은 새 버전으로 제출됩니다.</p></div><button class="text-button">피드백 원문 보기 ${icon("arrow", 14)}</button></div>
            <div class="version-line"><span class="version-chip old">v1.2 제출본</span><i>${icon("arrow", 14)}</i><span class="version-chip current">v1.3 수정 중</span><em>${icon("check", 13)} 마지막 저장 14:21</em></div>

            <section class="revision-section">
              <div class="revision-title"><span>01</span><div><small>RESULT INTERPRETATION</small><h2>모델 선택 근거와 검증 결과</h2></div><button class="secondary-button compact">변경 내용 비교</button></div>
              <div class="inline-feedback"><span class="feedback-source mentor">멘토</span><p>전체 MAPE 외에 변동성이 큰 품목군의 오차를 별도로 제시하면 선택 근거가 더 명확해집니다.</p><button aria-label="피드백 닫기">×</button></div>
              <div class="editor-shell revision-editor"><div class="editor-toolbar"><button><b>B</b></button><button><i>I</i></button><button>☷</button><button>🔗</button><span></span><small>자동 저장 켜짐</small></div><textarea aria-label="수정 결과물">기준선 모델의 전체 MAPE는 23.7%였고, 계절성 변수를 추가한 Gradient Boosting 모델은 16.4%로 개선되었다.

피드백을 반영해 변동성이 큰 A·C 품목군을 별도 검증했다. A 품목군은 29.1%에서 17.2%로, C 품목군은 26.8%에서 18.0%로 오차가 감소했다. 전체 평균뿐 아니라 품목군별 편차도 줄어 현장 적용 시 과소 예측 위험을 낮출 수 있다.</textarea></div>
            </section>

            <section class="revision-section evidence-attachment">
              <div class="revision-title"><span>02</span><div><small>EVIDENCE</small><h2>검증 근거</h2></div><button class="secondary-button compact">${icon("upload", 15)} 근거 추가</button></div>
              <div class="attachment-row"><span class="file-type">CSV</span><p><b>품목군별_성능비교_v3.csv</b><small>2.4 MB · 악성 파일 검사 완료 · 14:18</small></p><em class="validation-pass">${icon("check", 13)} 검증 완료</em><button class="icon-button" aria-label="파일 메뉴">•••</button></div>
              <div class="attachment-row"><span class="file-type chart">PNG</span><p><b>모델오차_품목군비교.png</b><small>840 KB · 대체 텍스트 작성됨 · 14:19</small></p><em class="validation-pass">${icon("check", 13)} 검증 완료</em><button class="icon-button" aria-label="파일 메뉴">•••</button></div>
            </section>
          </div>
          <footer class="workspace-footer revision-footer"><button class="secondary-button">미리보기</button><div><span>${state.checklist.size < checklistItems.length ? "확인 항목을 모두 완료하면 재제출할 수 있습니다." : "제출 후에는 v1.3이 평가 대상 버전으로 고정됩니다."}</span><button class="primary-button" data-action="resubmit-mission" ${state.checklist.size < checklistItems.length ? "disabled" : ""}>수정본 재제출 ${icon("arrow", 16)}</button></div></footer>`}
        </article>
        <aside class="mission-tools revision-tools"><div class="tools-head"><span class="eyebrow">RESUBMIT CHECK</span><strong>${state.checklist.size} / ${checklistItems.length} 확인</strong></div>${progressBar((state.checklist.size / checklistItems.length) * 100)}<div class="checklist">${checklistItems.map((item) => `<label class="${state.checklist.has(item) ? "done" : ""}"><input type="checkbox" data-check="${item}" ${state.checklist.has(item) ? "checked" : ""}/><span>${state.checklist.has(item) ? icon("check", 13) : ""}</span>${item}</label>`).join("")}</div><div class="rubric rubric-focus"><span class="eyebrow">FEEDBACK SOURCES</span><div><b>멘토 피드백</b><span>1건</span></div><div><b>동료 피드백</b><span>1건</span></div><div><b>AI 점검</b><span>제안</span></div><button>출처별 피드백 보기 ${icon("arrow", 14)}</button></div><div class="source-mini"><span>${icon("file", 18)}</span><p><b>적용 중인 평가 기준</b><small>루브릭 v2.1 · 게시 2026.07.01</small></p></div><button class="ai-callout" data-action="open-ai"><span>${icon("sparkles", 19)}</span><div><b>수정본을 함께 점검할까요?</b><small>현재 결과물과 근거 2개를 읽고 있어요.</small></div>${icon("arrow", 16)}</button><p class="privacy-microcopy">${icon("shield", 13)} AI 대화 원문은 평가 근거로 자동 사용되지 않습니다.</p></aside>
      </div>
    </section>`;
}

function peerView() {
  return `
    <section class="view peer-view">
      ${pageHeader("PEER LEARNING", "함께 검토하고, 더 나은 답을 만드세요", "동료의 관점으로 배우고 나의 결과물을 한 단계 더 개선합니다.")}
      <div class="peer-summary"><div class="dark-stat"><span>평가할 과제</span><strong>3</strong><small>마감 임박 1건</small></div><div><span>요청한 평가</span><strong>2</strong><small>1건 진행 중</small></div><div><span>받은 피드백</span><strong>8</strong><small>새 피드백 2건</small></div><div><span>평가 기여도</span><strong>92<em>%</em></strong><small>상위 14%</small></div></div>
      <div class="content-tabs"><button class="active">평가할 과제 <span>3</span></button><button>내가 요청한 평가</button><button>받은 피드백 <span>2</span></button><button>완료한 평가</button></div>
      <div class="peer-layout"><div class="assignment-list">
        <article class="assignment urgent"><div class="assignment-top"><span class="chip orange">8시간 남음</span><span>익명 평가</span></div><span class="eyebrow">장비 이상 이미지 탐지 · 미션 02</span><h3>이미지 라벨 품질 점검 결과</h3><p>제출자의 결과물과 평가 루브릭을 확인하고 구체적인 개선 의견을 남겨주세요.</p><div class="assignment-progress"><span>평가 진행</span><b>2 / 5 항목</b>${progressBar(40)}</div><footer><span>${icon("clock", 16)} 오늘 23:59 마감</span><button class="primary-button">평가 이어서하기 ${icon("arrow", 15)}</button></footer></article>
        <article class="assignment"><div class="assignment-top"><span class="chip blue">내일 마감</span><span>실명 평가</span></div><span class="eyebrow">업무 보고서 자동화 · 미션 04</span><h3>안전한 프롬프트 워크플로</h3><p>보안 지침 준수 여부와 산출물 품질을 중심으로 평가해 주세요.</p><footer><span>${icon("clock", 16)} 내일 18:00 마감</span><button class="secondary-button">평가 시작 ${icon("arrow", 15)}</button></footer></article>
      </div><aside class="peer-guide panel"><span class="eyebrow">GOOD REVIEW GUIDE</span><h3>좋은 피드백의 3가지 원칙</h3><ol><li><span>01</span><div><b>근거를 구체적으로</b><p>결과물의 어느 부분을 보고 판단했는지 알려주세요.</p></div></li><li><span>02</span><div><b>강점부터 발견하기</b><p>잘된 시도와 이어갈 방향을 먼저 짚어주세요.</p></div></li><li><span>03</span><div><b>다음 행동 제안하기</b><p>바로 시도할 수 있는 개선안을 제안하세요.</p></div></li></ol><button class="text-button">평가 가이드 전체 보기 ${icon("arrow", 15)}</button></aside></div>
    </section>`;
}

function growthView() {
  const skills = [["데이터 분석", 82], ["AI 모델링", 68], ["문제 해결", 76], ["AI 윤리", 91], ["협업", 73]];
  return `
    <section class="view growth-view">
      ${pageHeader("MY GROWTH", "나의 역량이 임무가 됩니다", "학습과 프로젝트 수행으로 증명한 역량을 한눈에 확인하세요.", '<button class="secondary-button">포트폴리오 보기</button>')}
      <div class="growth-grid">
        <article class="competency-card panel"><div class="section-heading"><div><span class="eyebrow">COMPETENCY MAP</span><h2>역량 현황</h2></div><span class="level-badge">LEVEL 04</span></div><div class="competency-body"><div class="radar-chart"><svg viewBox="0 0 220 200" role="img" aria-label="역량 레이더 차트"><g class="radar-rings"><polygon points="110,18 195,80 163,178 57,178 25,80"/><polygon points="110,45 168,87 146,154 74,154 52,87"/><polygon points="110,72 141,94 129,130 91,130 79,94"/></g><polygon class="radar-value" points="110,32 179,86 151,161 70,151 42,84"/><g class="radar-dots"><circle cx="110" cy="32" r="4"/><circle cx="179" cy="86" r="4"/><circle cx="151" cy="161" r="4"/><circle cx="70" cy="151" r="4"/><circle cx="42" cy="84" r="4"/></g></svg><span class="radar-label l1">데이터 분석</span><span class="radar-label l2">AI 모델링</span><span class="radar-label l3">문제 해결</span><span class="radar-label l4">AI 윤리</span><span class="radar-label l5">협업</span></div><div class="skill-list">${skills.map(([skill, score]) => `<div><span><b>${skill}</b><em>${score}</em></span>${progressBar(score)}</div>`).join("")}</div></div><footer><span>최근 30일 역량 점수</span><strong>+8.4 <small>↗ 성장 중</small></strong></footer></article>
        <article class="next-skill-card"><span class="eyebrow light">NEXT OBJECTIVE</span><h2>다음 목표까지<br /><strong>120 XP</strong> 남았어요.</h2><p>시계열 모델 성능 검증 미션을 완료하면 ‘AI 모델링’ 역량이 Level 4로 올라갑니다.</p>${progressBar(74)}<div><span>480 XP</span><span>600 XP</span></div><button class="primary-button light-button" data-action="continue-learning">미션 이어가기 ${icon("arrow", 16)}</button></article>
        <article class="panel growth-log"><div class="section-heading"><div><span class="eyebrow">GROWTH LOG</span><h2>최근 성장 기록</h2></div><button class="text-button">전체 보기 ${icon("arrow", 14)}</button></div><div class="timeline"><div><span class="log-icon skill">${icon("growth", 16)}</span><p><b>데이터 탐색 역량 +12</b><small>군수 수요 예측 · 미션 02 통과</small></p><time>오늘</time></div><div><span class="log-icon badge">${icon("shield", 16)}</span><p><b>‘데이터 정찰병’ 배지 획득</b><small>누적 데이터 분석 미션 5회 완료</small></p><time>7월 20일</time></div><div><span class="log-icon peer">${icon("users", 16)}</span><p><b>동료평가 기여도 상위 15%</b><small>구체적인 피드백 3회 제공</small></p><time>7월 18일</time></div></div></article>
        <article class="panel badges-card"><div class="section-heading"><div><span class="eyebrow">CERTIFICATES & BADGES</span><h2>인증서·배지</h2></div><span>4 / 12</span></div><div class="badge-row"><div class="earned"><span>✦</span><b>데이터<br/>정찰병</b></div><div class="earned"><span>⌁</span><b>협업<br/>전문가</b></div><div class="earned"><span>◈</span><b>AI 안전<br/>수호자</b></div><div class="locked"><span>?</span><b>잠김</b></div></div></article>
      </div>
    </section>`;
}

function commanderView() {
  return `
    <section class="view commander-view">
      ${pageHeader("COMMANDER WORKSPACE", "부대 AI 교육 현황", "데이터로 참여와 성장을 살피고 필요한 학습 지원을 결정하세요.", '<div class="header-controls"><select><option>최근 30일</option><option>이번 분기</option></select><button class="secondary-button">↓ 리포트</button></div>')}
      <div class="command-filter"><span>${icon("command", 18)}</span><div><small>조회 부대</small><b>제7기동군단 · 직할부대 포함</b></div><button>범위 변경</button><em>데이터 기준 18:30</em></div>
      <div class="kpi-grid"><div class="kpi dark"><span>교육 참여 인원</span><strong>428<small>명</small></strong><em>↗ 8.2% 전월 대비</em></div><div class="kpi"><span>평균 진도율</span><strong>68.4<small>%</small></strong><em class="positive">↗ 4.1% 개선</em></div><div class="kpi"><span>과정 완료율</span><strong>74.2<small>%</small></strong><em class="positive">목표 대비 +4.2%</em></div><div class="kpi alert"><span>지원 필요 인원</span><strong>12<small>명</small></strong><em>3명 긴급 확인</em></div></div>
      <div class="command-grid"><article class="panel participation-chart"><div class="section-heading"><div><span class="eyebrow">PARTICIPATION TREND</span><h2>참여·완료 추이</h2></div><div class="chart-legend"><span class="started">참여</span><span class="finished">완료</span></div></div><div class="line-chart"><div class="axis-labels"><span>500</span><span>400</span><span>300</span><span>200</span><span>100</span><span>0</span></div><svg viewBox="0 0 680 220" preserveAspectRatio="none" aria-label="참여 및 완료 추이"><g class="grid-lines"><path d="M0 10H680M0 50H680M0 90H680M0 130H680M0 170H680M0 210H680"/></g><path class="area" d="M0 178 C80 164 115 140 175 150 S275 102 345 112 S455 74 520 70 S620 30 680 24 V220H0Z"/><path class="start-line" d="M0 178 C80 164 115 140 175 150 S275 102 345 112 S455 74 520 70 S620 30 680 24"/><path class="finish-line" d="M0 205 C90 194 120 181 175 182 S280 153 345 157 S450 122 520 128 S620 88 680 82"/></svg><div class="x-labels"><span>2월</span><span>3월</span><span>4월</span><span>5월</span><span>6월</span><span>7월</span></div></div></article>
        <article class="panel risk-panel"><div class="section-heading"><div><span class="eyebrow">SUPPORT SIGNAL</span><h2>지원 필요 학습자</h2></div><span class="count-badge alert">12</span></div><div class="risk-list">${[["박○○ 중사", "3일 미접속 · 진도 24%", "긴급"], ["이○○ 하사", "평가 지연 2건", "확인"], ["최○○ 상병", "마감 1일 · 진도 61%", "확인"]].map(([name, reason, status], index) => `<button><span class="avatar ${index === 0 ? "coral" : "navy"}">${name[0]}</span><span><b>${name}</b><small>${reason}</small></span><em class="${index === 0 ? "urgent" : ""}">${status}</em>${icon("chevron", 15)}</button>`).join("")}</div><button class="full-link">지원 대상 전체 보기 ${icon("arrow", 15)}</button></article>
        <article class="panel unit-table"><div class="section-heading"><div><span class="eyebrow">UNIT COMPARISON</span><h2>부대별 학습 현황</h2></div><button class="text-button">상세 분석 ${icon("arrow", 14)}</button></div><div class="table-wrap"><table><thead><tr><th>부대</th><th>참여 인원</th><th>평균 진도</th><th>완료율</th><th>동료평가</th><th>상태</th></tr></thead><tbody>${[["제11기동여단", 126, 78, 82, 91, "우수"], ["제21기동여단", 118, 69, 75, 84, "정상"], ["군단정보대대", 76, 64, 71, 78, "정상"], ["군단공병대대", 108, 53, 59, 66, "관찰"]].map((row) => `<tr><td><b>${row[0]}</b></td><td>${row[1]}명</td><td><span class="table-progress">${progressBar(row[2])}<em>${row[2]}%</em></span></td><td>${row[3]}%</td><td>${row[4]}%</td><td><span class="chip ${row[5] === "우수" ? "green" : row[5] === "관찰" ? "orange" : "blue"}">${row[5]}</span></td></tr>`).join("")}</tbody></table></div></article>
      </div>
      <div class="privacy-note">${icon("shield", 17)}<p><b>학습자 개인정보 보호 안내</b> AI 교관 대화 원문과 개별 결과물은 조회되지 않으며, 지휘관에게는 교육 지원에 필요한 집계 정보만 제공됩니다.</p></div>
    </section>`;
}

function adminView() {
  return `
    <section class="view admin-view">
      ${pageHeader("OPERATIONS CENTER", "운영 대시보드", "콘텐츠 검수부터 교육 운영까지 플랫폼의 현재 상태를 확인하세요.", '<button class="primary-button">+ 새 프로젝트</button>')}
      <div class="ops-status"><span><i></i> 모든 시스템 정상</span><small>마지막 동기화 18:42:06</small><div><b>운영 회차 18</b><b>활성 사용자 1,284</b><b>AI 요청 8,492</b></div></div>
      <div class="kpi-grid ops-kpis"><div class="kpi"><span>오늘 활성 사용자</span><strong>842</strong><em class="positive">↗ 12.4% 어제 대비</em></div><div class="kpi"><span>진행 중 학습</span><strong>1,248</strong><em>프로젝트 418 · VOD 830</em></div><div class="kpi alert"><span>검수 대기</span><strong>7</strong><em>48시간 경과 2건</em></div><div class="kpi"><span>이번 달 수료</span><strong>326</strong><em class="positive">목표 달성률 81.5%</em></div></div>
      <div class="admin-grid">
        <article class="panel review-queue"><div class="section-heading"><div><span class="eyebrow">REVIEW QUEUE</span><h2>검수 대기 콘텐츠</h2></div><button class="text-button">전체 보기 ${icon("arrow", 14)}</button></div><div class="queue-list">${[["PROJECT", "전술 데이터 시각화", "김설계", "52시간", "긴급"], ["VOD", "생성형 AI 보안 실무", "이콘텐츠", "18시간", "검토"], ["PROJECT", "센서 로그 이상 탐지", "박교육", "6시간", "신규"]].map(([type, title, owner, age, stateLabel]) => `<button><span class="type-badge ${type.toLowerCase()}">${type}</span><span><b>${title}</b><small>${owner} · v1.2 · ${age} 전 요청</small></span><em class="${stateLabel === "긴급" ? "urgent" : ""}">${stateLabel}</em>${icon("chevron", 16)}</button>`).join("")}</div></article>
        <article class="panel operation-alerts"><div class="section-heading"><div><span class="eyebrow">OPERATIONS ALERT</span><h2>운영 알림</h2></div><span class="count-badge">4</span></div><div class="alert-list"><div><span class="alert-symbol red">!</span><p><b>동료평가 미배정 14건</b><small>평가자 풀 부족 · 2개 운영회차</small></p><button>처리</button></div><div><span class="alert-symbol yellow">!</span><p><b>신청 승인 대기 28명</b><small>24시간 이상 대기 6명</small></p><button>확인</button></div><div><span class="alert-symbol blue">i</span><p><b>인증서 발급 예정 46건</b><small>오늘 20:00 자동 발급</small></p><button>보기</button></div></div></article>
        <article class="panel content-status"><div class="section-heading"><div><span class="eyebrow">CONTENT PIPELINE</span><h2>콘텐츠 현황</h2></div><select><option>전체 유형</option></select></div><div class="pipeline"><div style="--value: 78"><span><b>42</b><small>초안</small></span></div><i></i><div style="--value: 42"><span><b>7</b><small>검수</small></span></div><i></i><div style="--value: 62"><span><b>18</b><small>승인</small></span></div><i></i><div style="--value: 92"><span class="active"><b>86</b><small>게시</small></span></div></div><div class="content-split"><span><i class="project"></i>프로젝트 <b>64</b></span><span><i class="vod"></i>VOD 과정 <b>89</b></span></div></article>
        <article class="panel service-log"><div class="section-heading"><div><span class="eyebrow">LIVE ACTIVITY</span><h2>실시간 운영 로그</h2></div><span class="live-label"><i></i> LIVE</span></div><div class="log-list"><p><time>18:42:06</time><span class="success">PUBLISH</span><b>Python 데이터 분석 기초 v2.1 게시 완료</b></p><p><time>18:41:22</time><span class="neutral">USER</span><b>제11기동여단 사용자 24명 일괄 등록</b></p><p><time>18:39:48</time><span class="warning">AI SAFE</span><b>AI 답변 신고 1건 자동 분류</b></p><p><time>18:37:03</time><span class="success">ISSUE</span><b>VOD 재생 지연 이슈 정상화</b></p></div></article>
      </div>
    </section>`;
}

function genericView() {
  const title = labels[state.route] || "준비 중인 메뉴";
  return `<section class="view generic-view">${pageHeader("MILI AI WORKSPACE", title, "기획 문서의 메뉴 구조를 반영한 다음 확장 화면입니다.")}<div class="empty-state large">${icon("folder", 40)}<span class="eyebrow">NEXT ITERATION</span><h2>${title} 화면은 다음 구축 단계에서 연결됩니다.</h2><p>현재 MVP에서는 핵심 학습 흐름과 역할별 대시보드 탐색을 우선 제공합니다.</p><button class="primary-button" data-action="go-home">대시보드로 돌아가기</button></div></section>`;
}

const views = {
  home: homeView,
  explore: exploreView,
  project: projectDetailView,
  learning: learningView,
  workspace: workspaceView,
  peer: peerView,
  growth: growthView,
  commander: commanderView,
  admin: adminView,
};

function render() {
  state.route = routeFromHash();
  const view = views[state.route] || genericView;
  document.querySelector("#app").innerHTML = shell(view());
  document.title = `${labels[state.route] || "MILI AI"} · MILI AI`;
}

function toast(message, type = "success") {
  const region = document.querySelector("#toast-region");
  const element = document.createElement("div");
  element.className = `toast ${type}`;
  element.innerHTML = `<span>${icon(type === "success" ? "check" : "bell", 16)}</span><p>${message}</p>`;
  region.append(element);
  window.setTimeout(() => element.classList.add("show"), 10);
  window.setTimeout(() => {
    element.classList.remove("show");
    window.setTimeout(() => element.remove(), 250);
  }, 3200);
}

function sendAiQuestion(question) {
  if (!question.trim()) return;
  state.aiMessages.push({ type: "user", text: question.trim() });
  state.aiMessages.push({
    type: "tutor",
    text: "좋은 질문이에요. 먼저 품목군별 오차를 비교해 보세요. 전체 MAPE만 볼 때 숨겨지는 변동성이 있는지 확인한 뒤, 계절성 변수를 제외한 모델과 다시 비교하면 선택 근거가 더 분명해집니다.",
  });
  render();
  window.setTimeout(() => document.querySelector(".ai-conversation")?.scrollTo({ top: 9999, behavior: "smooth" }), 10);
}

document.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  const projectTarget = event.target.closest("[data-project]");
  const filterTarget = event.target.closest("[data-filter]");
  const aiQuestion = event.target.closest("[data-ai-question]");

  if (projectTarget) navigate("project");
  if (filterTarget) {
    state.filter = filterTarget.dataset.filter;
    render();
  }
  if (aiQuestion) sendAiQuestion(aiQuestion.dataset.aiQuestion);
  if (!actionTarget) return;

  const actions = {
    "open-menu": () => { state.sidebarOpen = true; render(); },
    "close-menu": () => { state.sidebarOpen = false; render(); },
    "open-ai": () => { state.aiOpen = true; state.notificationsOpen = false; render(); },
    "close-ai": () => { state.aiOpen = false; render(); },
    "toggle-notifications": () => { state.notificationsOpen = !state.notificationsOpen; state.aiOpen = false; render(); },
    "go-search": () => navigate("explore"),
    "go-explore": () => navigate("explore"),
    "go-learning": () => navigate("learning"),
    "go-peer": () => navigate("peer"),
    "go-growth": () => navigate("growth"),
    "go-home": () => navigate(state.role === "learner" ? "home" : state.role),
    "continue-learning": () => navigate("workspace"),
    "start-project": () => { navigate("workspace"); toast("프로젝트 학습을 시작했습니다."); },
    "clear-filters": () => { state.filter = "전체"; state.search = ""; render(); },
    "submit-mission": () => { state.submitted = true; render(); toast("미션 결과물이 제출되었습니다. 동료평가를 요청할 수 있어요."); },
    "resubmit-mission": () => { state.submitted = true; render(); toast("수정본 v1.3이 안전하게 제출되었습니다."); },
  };
  actions[actionTarget.dataset.action]?.();
});

document.addEventListener("change", (event) => {
  if (event.target.id === "role-switch") {
    state.role = event.target.value;
    state.notificationsOpen = false;
    navigate(state.role === "learner" ? "home" : state.role);
  }
  if (event.target.id === "catalog-search") {
    state.search = event.target.value;
    render();
  }
  if (event.target.matches("[data-check]")) {
    event.target.checked ? state.checklist.add(event.target.dataset.check) : state.checklist.delete(event.target.dataset.check);
    render();
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "ai-form") return;
  event.preventDefault();
  sendAiQuestion(event.target.querySelector("#ai-question").value);
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    navigate("explore");
    window.setTimeout(() => document.querySelector("#catalog-search")?.focus(), 40);
  }
  if (event.key === "Escape") {
    if (state.aiOpen || state.notificationsOpen || state.sidebarOpen) {
      state.aiOpen = false;
      state.notificationsOpen = false;
      state.sidebarOpen = false;
      render();
    }
  }
});

window.addEventListener("hashchange", () => {
  state.sidebarOpen = false;
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
});

if (!window.location.hash) window.location.hash = "#/home";
render();
