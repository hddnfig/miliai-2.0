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
  checklist: new Set(["문제 정의 확인", "데이터 품질 점검"]),
};

const navByRole = {
  learner: [
    ["home", "home", "메인화면"],
    ["vod", "play", "VOD 콘텐츠"],
    ["pbl", "compass", "PBL 콘텐츠"],
    ["community", "message", "커뮤니티"],
    ["intro", "shield", "소개"],
    ["personal", "user", "개인메뉴"],
    ["member", "users", "회원"],
    ["diagnosis", "chart", "역량진단"],
    ["roadmap", "growth", "로드맵"],
    ["admin", "settings", "관리시스템"],
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

const learnerChildren = {
  home: [["peer-request", "동료평가요청"], ["leaderboard", "부대별 리더보드"]],
  vod: [["vod-detail", "콘텐츠 상세"], ["vod-learning", "VOD 학습"]],
  pbl: [["pbl-detail", "콘텐츠 상세"], ["pbl-learning", "PBL 학습"]],
  community: [["notice", "공지사항"], ["qna", "Q&A"], ["faq", "FAQ"], ["news", "뉴스"]],
  personal: [["my-courses", "내 강의"], ["favorites", "관심강의"], ["dashboard", "대시보드"], ["my-posts", "작성한 게시글"], ["profile", "프로필"], ["skill-chart", "스파이더차트"]],
  member: [["signup", "회원가입"], ["login", "로그인·로그아웃"], ["account-recovery", "아이디·비밀번호찾기"], ["withdrawal", "회원탈퇴"]],
};

const learnerSectionLabels = {
  home: "SERVICE",
  personal: "MY SPACE",
  member: "ACCOUNT & GROWTH",
  admin: "SYSTEM",
};

const learnerRouteNames = new Set([
  "home", "vod", "pbl", "community", "intro", "personal", "member", "diagnosis", "roadmap",
  "explore", "project", "learning", "workspace", "peer", "growth", "my",
  "video-learning", "vod-resources", "coding-practice", "quiz", "vod-board", "team-space", "ai-chat",
  "vod-posts", "pbl-posts", "board-inquiries", "peer-reviews", "ai-dialogs", "profile-basic", "profile-interests",
  "diagnosis-start", "diagnosis-result", "roadmap-ai-basic", "roadmap-data", "roadmap-project",
  "peer-requested", "peer-feedback", "leaderboard-participation", "leaderboard-growth", "leaderboard-project",
  "recent-courses", "weekly-status", "annual-status", "growth-log", "recent-learning-list",
  "certificates", "badges", "skills", "credits",
  ...Object.values(learnerChildren).flat().map(([route]) => route),
]);

const labels = {
  home: "메인화면",
  vod: "VOD 콘텐츠 목록",
  "vod-detail": "VOD 콘텐츠 상세",
  "vod-learning": "VOD 학습",
  "video-learning": "동영상",
  "vod-resources": "자료·과제 제출",
  "coding-practice": "코딩",
  quiz: "퀴즈",
  "vod-board": "VOD 게시판",
  pbl: "PBL 콘텐츠 목록",
  "pbl-detail": "PBL 콘텐츠 상세",
  "pbl-learning": "PBL 학습",
  "team-space": "팀구성",
  "ai-chat": "AI채팅",
  explore: "통합 검색",
  project: "PBL 콘텐츠 상세",
  learning: "내 강의",
  workspace: "PBL 학습",
  peer: "동료평가요청",
  "peer-request": "동료평가요청",
  leaderboard: "부대별 리더보드",
  community: "커뮤니티",
  notice: "공지사항",
  qna: "Q&A",
  faq: "FAQ",
  news: "뉴스",
  intro: "소개",
  personal: "개인메뉴",
  "my-courses": "내 강의",
  favorites: "관심강의",
  dashboard: "대시보드",
  "recent-courses": "최근학습강의",
  "weekly-status": "주간학습현황",
  "annual-status": "연간학습현황",
  "growth-log": "성장로그",
  "recent-learning-list": "최근강의 학습목록",
  certificates: "수료증",
  badges: "뱃지",
  skills: "스킬",
  credits: "크레딧",
  "my-posts": "작성한 게시글",
  "vod-posts": "VOD 관련글",
  "pbl-posts": "PBL 관련글",
  "board-inquiries": "게시판 질의글",
  "peer-reviews": "동료평가글",
  "ai-dialogs": "AI교관 대화글",
  profile: "프로필",
  "profile-basic": "기본정보",
  "profile-interests": "관심 분야",
  "skill-chart": "스파이더차트",
  member: "회원",
  signup: "회원가입",
  login: "로그인·로그아웃",
  "account-recovery": "아이디·비밀번호찾기",
  withdrawal: "회원탈퇴",
  diagnosis: "역량진단",
  "diagnosis-start": "역량진단 시작",
  "diagnosis-result": "역량진단 결과",
  roadmap: "로드맵",
  "roadmap-ai-basic": "AI 기초 로드맵",
  "roadmap-data": "데이터 분석 로드맵",
  "roadmap-project": "실전 프로젝트 로드맵",
  "peer-requested": "내가 요청한 평가",
  "peer-feedback": "받은 피드백",
  "leaderboard-participation": "참여 순위",
  "leaderboard-growth": "성장 순위",
  "leaderboard-project": "프로젝트 성과",
  growth: "대시보드",
  my: "개인메뉴",
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
  if (learnerRouteNames.has(next)) state.role = "learner";
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
        ${items
          .map(
            ([route, iconName, label, count]) => {
              const children = state.role === "learner" ? learnerChildren[route] || [] : [];
              const isActive = state.route === route || children.some(([childRoute]) => childRoute === state.route);
              const caption = state.role === "learner" ? learnerSectionLabels[route] : route === items[0][0] ? "WORKSPACE" : "";
              return `
                ${caption ? `<p class="nav-caption ${route !== items[0][0] ? "section-start" : ""}">${caption}</p>` : ""}
                <div class="nav-tree ${isActive ? "expanded" : ""}">
                  <a href="#/${route}" class="nav-item ${isActive ? "active" : ""}" data-route="${route}">
                    ${icon(iconName)}<span>${label}</span>${count ? `<em>${count}</em>` : children.length ? `<span class="nav-chevron">${icon("chevron", 14)}</span>` : ""}
                  </a>
                  ${children.length ? `<div class="nav-sublist">${children.map(([childRoute, childLabel]) => `<a href="#/${childRoute}" class="nav-subitem ${state.route === childRoute ? "active" : ""}">${childLabel}</a>`).join("")}</div>` : ""}
                </div>`;
            },
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
  const items = state.role === "learner" ? navByRole.learner.slice(0, 4) : navByRole[state.role].slice(0, 4);
  return `<nav class="mobile-nav" aria-label="모바일 메뉴">
    ${items.map(([route, iconName, label]) => `<a href="#/${route}" class="${state.route === route || (learnerChildren[route] || []).some(([childRoute]) => childRoute === state.route) ? "active" : ""}">${icon(iconName, 19)}<span>${label.replace(" 콘텐츠", "")}</span></a>`).join("")}
    <button data-action="open-menu">${icon("menu", 19)}<span>전체</span></button>
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
      <button class="ai-fab" data-action="open-ai" aria-label="AI 교관 열기">${icon("sparkles", 20)}<span>AI 교관</span></button>
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

const iaPages = {
  "vod-learning": {
    eyebrow: "VOD LEARNING",
    title: "VOD 학습",
    description: "영상 시청부터 실습과 질의응답까지 한 과정 안에서 이어집니다.",
    groups: [
      ["학습 콘텐츠", "과정 순서에 맞춰 학습하고 완료 상태를 확인합니다.", [["video-learning", "동영상"], ["vod-resources", "자료·과제 제출"], ["coding-practice", "코딩"], ["quiz", "퀴즈"], ["vod-board", "게시판"]]],
    ],
  },
  "pbl-learning": {
    eyebrow: "PBL LEARNING",
    title: "PBL 학습",
    description: "미션 수행, 협업, 동료평가와 AI 교관을 하나의 프로젝트 흐름으로 제공합니다.",
    groups: [
      ["프로젝트 수행", "현재 미션과 협업 상태를 확인하고 결과물을 발전시킵니다.", [["workspace", "미션목록·현황"], ["peer-request", "동료평가"], ["team-space", "팀구성"], ["ai-chat", "AI채팅"]]],
    ],
  },
  community: {
    eyebrow: "COMMUNITY",
    title: "커뮤니티",
    description: "교육 소식과 학습 질문을 찾고 동료들과 경험을 나눕니다.",
    groups: [
      ["소식", "운영 공지와 최신 교육 자료를 확인합니다.", [["notice", "공지사항"], ["news", "뉴스"]]],
      ["질문과 도움", "학습 질문과 자주 묻는 내용을 빠르게 찾습니다.", [["qna", "Q&A"], ["faq", "FAQ"]]],
    ],
  },
  intro: {
    eyebrow: "ABOUT MILI AI",
    title: "소개",
    description: "임무 중심 AI 학습으로 개인과 부대의 디지털 역량을 연결합니다.",
    groups: [
      ["MILI AI 서비스", "실제 업무 문제를 프로젝트와 VOD 학습으로 전환하고, 수행 결과를 역량으로 기록하는 통합 학습 플랫폼입니다.", [["pbl", "PBL 프로젝트"], ["vod", "VOD 과정"], ["diagnosis", "역량진단"], ["roadmap", "맞춤 로드맵"]]],
    ],
  },
  personal: {
    eyebrow: "MY SPACE",
    title: "개인메뉴",
    description: "나의 강의, 활동, 성장 기록과 계정 정보를 한곳에서 관리합니다.",
    groups: [
      ["학습 관리", "PBL과 VOD 강의를 통합해 확인합니다.", [["my-courses", "내 강의"], ["favorites", "관심강의"]]],
      ["성장 대시보드", "학습 현황과 획득 역량을 확인합니다.", [["dashboard", "대시보드"], ["recent-courses", "최근학습강의"], ["weekly-status", "주간학습현황"], ["annual-status", "연간학습현황"], ["growth-log", "성장로그"], ["recent-learning-list", "최근강의 학습목록"], ["certificates", "수료증"], ["badges", "뱃지"], ["skills", "스킬"], ["roadmap", "로드맵"], ["credits", "크레딧"], ["skill-chart", "스파이더차트"]]],
      ["나의 활동", "작성한 글과 대화 기록을 유형별로 확인합니다.", [["my-posts", "작성한 게시글"], ["profile", "프로필"]]],
    ],
  },
  "my-posts": {
    eyebrow: "MY ACTIVITY",
    title: "작성한 게시글",
    description: "과정과 프로젝트에서 남긴 글, 평가와 AI 교관 대화를 모아봅니다.",
    groups: [
      ["학습 게시글", "콘텐츠 문맥별 활동 기록입니다.", [["vod-posts", "VOD 관련글"], ["pbl-posts", "PBL 관련글"], ["board-inquiries", "게시판 질의글"]]],
      ["학습 상호작용", "평가와 대화 기록은 일반 게시글과 분리해 관리합니다.", [["peer-reviews", "동료평가글"], ["ai-dialogs", "AI교관 대화글"]]],
    ],
  },
  profile: {
    eyebrow: "PROFILE",
    title: "프로필",
    description: "기본정보와 관심 분야, 역량진단 결과를 확인합니다.",
    groups: [
      ["프로필 정보", "학습 추천과 포트폴리오에 활용되는 정보입니다.", [["profile-basic", "기본정보"], ["profile-interests", "관심 분야"], ["diagnosis", "역량진단결과"]]],
    ],
  },
  member: {
    eyebrow: "MEMBERSHIP",
    title: "회원",
    description: "가입부터 계정 복구와 탈퇴까지 회원 절차를 관리합니다.",
    groups: [
      ["회원 서비스", "안전한 인증과 계정 관리를 제공합니다.", [["signup", "회원가입"], ["login", "로그인·로그아웃"], ["account-recovery", "아이디·비밀번호찾기"], ["withdrawal", "회원탈퇴"]]],
    ],
  },
  diagnosis: {
    eyebrow: "COMPETENCY DIAGNOSIS",
    title: "역량진단",
    description: "현재 AI 수준과 선수지식을 진단하고 다음 학습의 기준을 만듭니다.",
    groups: [
      ["진단 프로세스", "진단 응시 후 결과를 비교하고 추천 학습으로 연결합니다.", [["diagnosis-start", "역량진단 시작"], ["diagnosis-result", "진단 결과"], ["roadmap", "추천 로드맵"]]],
    ],
  },
  roadmap: {
    eyebrow: "LEARNING ROADMAP",
    title: "로드맵",
    description: "목표 역량까지 필요한 VOD와 PBL 프로젝트를 단계별로 안내합니다.",
    groups: [
      ["나의 학습 경로", "선수학습부터 실전 프로젝트까지 진행 순서를 확인합니다.", [["roadmap-ai-basic", "AI 기초"], ["roadmap-data", "데이터 분석"], ["roadmap-project", "실전 프로젝트"]]],
    ],
  },
  "peer-request": {
    eyebrow: "PEER REVIEW",
    title: "동료평가요청",
    description: "평가할 과제와 내가 요청한 평가의 진행 상태를 확인합니다.",
    groups: [
      ["동료평가", "마감과 배정 상태를 기준으로 평가 업무를 관리합니다.", [["peer", "평가할 과제"], ["peer-requested", "내가 요청한 평가"], ["peer-feedback", "받은 피드백"]]],
    ],
  },
  leaderboard: {
    eyebrow: "UNIT LEADERBOARD",
    title: "부대별 리더보드",
    description: "공개 기준에 따라 부대별 참여와 학습 성과를 비교합니다.",
    groups: [
      ["리더보드", "개인 정보 없이 집계된 학습 지표를 제공합니다.", [["leaderboard-participation", "참여 순위"], ["leaderboard-growth", "성장 순위"], ["leaderboard-project", "프로젝트 성과"]]],
    ],
  },
  "skill-chart": {
    eyebrow: "SKILL CHART",
    title: "스파이더차트",
    description: "분야별 역량 수준과 변화 추이를 시각적으로 비교합니다.",
    groups: [
      ["역량 분석", "프로젝트·진단 결과를 근거로 현재 수준을 표시합니다.", [["dashboard", "역량 현황"], ["diagnosis", "역량진단"], ["roadmap", "추천 로드맵"]]],
    ],
  },
};

function iaMenuView(route) {
  const page = iaPages[route];
  return `
    <section class="view ia-view">
      ${pageHeader(page.eyebrow, page.title, page.description)}
      <div class="ia-path"><span>서비스시스템</span>${icon("chevron", 13)}<strong>${page.title}</strong><em>IA 반영</em></div>
      <div class="ia-menu-grid ${page.groups.length === 1 ? "single" : ""}">
        ${page.groups.map(([title, description, items], groupIndex) => `<article class="ia-menu-card panel"><div class="ia-card-index">${String(groupIndex + 1).padStart(2, "0")}</div><div class="ia-card-head"><span>${icon(groupIndex % 2 ? "message" : "folder", 19)}</span><div><h2>${title}</h2><p>${description}</p></div></div><nav>${items.map(([itemRoute, itemLabel]) => `<a href="#/${itemRoute}"><span>${itemLabel}</span>${icon("arrow", 15)}</a>`).join("")}</nav></article>`).join("")}
      </div>
    </section>`;
}

function catalogDepthNav(kind) {
  const isVod = kind === "vod";
  const items = isVod
    ? [["vod-detail", "콘텐츠 상세"], ["vod-learning", "VOD 학습"], ["video-learning", "동영상"], ["vod-resources", "자료·과제 제출"], ["coding-practice", "코딩"], ["quiz", "퀴즈"], ["vod-board", "게시판"]]
    : [["pbl-detail", "콘텐츠 상세"], ["pbl-learning", "PBL 학습"], ["peer-request", "동료평가"], ["team-space", "팀구성"], ["ai-chat", "AI채팅"]];
  return `<nav class="catalog-depth-nav" aria-label="${isVod ? "VOD" : "PBL"} 하위 메뉴"><span>${isVod ? "VOD 콘텐츠 목록" : "PBL 콘텐츠 목록"}</span>${items.map(([route, label]) => `<a href="#/${route}">${label}</a>`).join("")}</nav>`;
}

function homeView() {
  return `
    <section class="view dashboard-view">
      <div class="welcome-row">
        <div><span class="eyebrow">2026. 07. 23 · 목요일</span><h1>좋은 저녁이에요, 김밀리 상병님.</h1><p>오늘의 작은 진전이 내일의 작전 역량이 됩니다.</p></div>
        <div class="streak-pill"><span>7</span><div><small>연속 학습</small><strong>이번 주 최고 기록</strong></div></div>
      </div>
      <div class="dashboard-grid">
        <article class="continue-card panel">
          <div class="card-topline"><span class="eyebrow light">CONTINUE MISSION</span><span class="sync-state">${icon("check", 14)} 2분 전 자동 저장</span></div>
          <div class="continue-body">
            <div class="mission-emblem"><span>M03</span><small>OF 06</small></div>
            <div class="continue-copy"><span class="chip glass">팀 프로젝트 · 중급</span><h2>AI로 군수 수요 예측하기</h2><p>미션 03. 예측 모델 설계 및 기준선 비교</p>
              <div class="continue-progress"><div><span>전체 진행률</span><strong>48%</strong></div>${progressBar(48)}</div>
              <div class="continue-actions"><button class="primary-button light-button" data-action="continue-learning">이어서 수행하기 ${icon("arrow", 17)}</button><span>D-09 · 8월 1일 마감</span></div>
            </div>
          </div>
          <div class="terrain-lines" aria-hidden="true"></div>
        </article>
        <article class="panel task-panel">
          <div class="section-heading"><div><span class="eyebrow">TODAY'S OBJECTIVE</span><h2>오늘의 할 일</h2></div><span class="count-badge">3</span></div>
          <div class="task-list">
            <button data-action="continue-learning"><span class="task-check urgent">!</span><span><b>예측 결과 해석 작성</b><small>군수 수요 예측 · 오늘 23:59</small></span>${icon("chevron", 18)}</button>
            <button data-action="go-peer"><span class="task-check">02</span><span><b>동료 결과물 평가</b><small>장비 이상 탐지 · 내일</small></span>${icon("chevron", 18)}</button>
            <button><span class="task-check done">${icon("check", 15)}</span><span><b>VOD 4강 학습</b><small>Python 데이터 분석 · 완료</small></span>${icon("chevron", 18)}</button>
          </div>
          <button class="full-link" data-action="go-learning">전체 일정 보기 ${icon("arrow", 15)}</button>
        </article>
        <article class="panel weekly-panel">
          <div class="section-heading"><div><span class="eyebrow">WEEKLY PULSE</span><h2>주간 학습 현황</h2></div><span class="trend up">↗ 12%</span></div>
          <div class="weekly-chart" aria-label="요일별 학습 시간 막대 차트">
            ${[["월", 46], ["화", 72], ["수", 52], ["목", 88], ["금", 32], ["토", 18], ["일", 12]].map(([day, value], index) => `<div class="bar-item ${index === 3 ? "today" : ""}"><span style="height:${value}%"></span><small>${day}</small></div>`).join("")}
          </div>
          <div class="weekly-stats"><div><strong>4<span>h</span> 32<span>m</span></strong><small>이번 주 학습</small></div><div><strong>72<span>%</span></strong><small>주간 목표</small></div><div><strong>3</strong><small>완료 미션</small></div></div>
        </article>
        <article class="panel feedback-panel">
          <div class="section-heading"><div><span class="eyebrow">NEW FEEDBACK</span><h2>새 피드백</h2></div><button class="icon-button">${icon("arrow", 18)}</button></div>
          <div class="feedback-author"><span class="avatar coral">AI</span><div><b>AI 교관 피드백</b><small>미션 02 · 데이터 탐색</small></div><span>12분 전</span></div>
          <blockquote>“결측치 처리 기준이 명확합니다. 다만 <mark>계절성 변화가 큰 품목군</mark>은 별도 검증 구간을 두어 보세요.”</blockquote>
          <button class="secondary-button" data-action="open-ai">피드백 이어서 보기</button>
        </article>
        <article class="panel recommendations-panel">
          <div class="section-heading"><div><span class="eyebrow">RECOMMENDED FOR YOU</span><h2>다음 역량을 준비하세요</h2></div><button class="text-button" data-action="go-explore">모두 보기 ${icon("arrow", 15)}</button></div>
          <div class="mini-course-row">
            ${projects.slice(1, 4).map((project) => miniCourse(project)).join("")}
          </div>
        </article>
      </div>
    </section>`;
}

function miniCourse(project) {
  const target = project.eyebrow.includes("VOD") ? "vod-detail" : "pbl-detail";
  return `<button class="mini-course" data-project="${project.id}" data-target="${target}"><span class="mini-cover ${project.tone}"><b>${project.eyebrow.split(" · ")[1]}</b><small>${project.level}</small></span><span class="mini-copy"><small>${project.eyebrow}</small><strong>${project.title}</strong><span><em>${project.fit}% 적합</em> · ${project.duration}</span></span>${icon("arrow", 17)}</button>`;
}

function projectCard(project) {
  const target = project.eyebrow.includes("VOD") ? "vod-detail" : "pbl-detail";
  return `<article class="project-card">
    <button class="project-cover ${project.tone}" data-project="${project.id}" data-target="${target}" aria-label="${project.title} 상세 보기">
      <span class="project-index">${project.id === "demand-forecast" ? "01" : String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
      <span class="cover-grid"></span>
      <span class="fit-score"><b>${project.fit}</b><small>% MATCH</small></span>
      ${project.mode.includes("모바일") ? '<span class="mobile-ready">모바일 학습</span>' : ""}
    </button>
    <div class="project-info"><div><span class="eyebrow">${project.eyebrow}</span><span class="bookmark" aria-label="찜하기">♡</span></div><h3>${project.title}</h3><p>${project.description}</p><div class="tag-row">${project.skills.map((skill) => `<span>${skill}</span>`).join("")}</div><footer><span>${icon("clock", 15)} ${project.duration}</span><span>${icon("users", 15)} ${project.mode}</span><button data-project="${project.id}" data-target="${target}">${icon("arrow", 17)}</button></footer></div>
  </article>`;
}

function exploreView(kind = "all") {
  const filtered = projects.filter((project) => {
    const query = state.search.toLowerCase();
    const matchesQuery = !query || `${project.title} ${project.description} ${project.skills.join(" ")}`.toLowerCase().includes(query);
    const matchesFilter = state.filter === "전체" || project.level === state.filter || project.mode.includes(state.filter) || project.eyebrow.includes(state.filter);
    const isVod = project.eyebrow.includes("VOD");
    const matchesKind = kind === "all" || (kind === "vod" ? isVod : !isVod);
    return matchesQuery && matchesFilter && matchesKind;
  });
  const isVod = kind === "vod";
  const isPbl = kind === "pbl";
  const pageTitle = isVod ? "VOD 콘텐츠 목록" : isPbl ? "PBL 콘텐츠 목록" : "통합 학습 검색";
  const pageDescription = isVod ? "짧은 이론 학습부터 코딩·퀴즈까지 과정별로 탐색하세요." : isPbl ? "실제 임무 문제를 해결하며 결과물과 역량을 함께 완성하세요." : "VOD와 PBL 콘텐츠를 한 번에 검색하세요.";
  const filterItems = isVod ? ["전체", "입문", "중급", "모바일"] : ["전체", "입문", "중급", "고급", "프로젝트"];
  return `
    <section class="view explore-view">
      ${pageHeader(isVod ? "VOD CATALOG" : isPbl ? "PBL CATALOG" : "LEARNING CATALOG", pageTitle, pageDescription, '<button class="secondary-button">♡ 관심강의 <span class="soft-count">4</span></button>')}
      ${kind !== "all" ? catalogDepthNav(kind) : ""}
      <div class="catalog-search">
        <label>${icon("search", 20)}<input id="catalog-search" type="search" value="${escapeHtml(state.search)}" placeholder="배우고 싶은 기술이나 해결하고 싶은 문제를 검색하세요" /></label>
        <button class="filter-button">${icon("filter", 18)} 상세 필터 <span>2</span></button>
      </div>
      <div class="catalog-toolbar">
        <div class="filter-chips" role="group" aria-label="콘텐츠 필터">
          ${filterItems.map((filter) => `<button data-filter="${filter}" class="${state.filter === filter ? "active" : ""}">${filter}</button>`).join("")}
        </div>
        <div class="result-meta"><span><b>${filtered.length}</b>개의 학습</span><select aria-label="정렬"><option>추천순</option><option>최신순</option><option>짧은 학습순</option></select></div>
      </div>
      ${filtered.length ? `<div class="project-grid">${filtered.map(projectCard).join("")}</div>` : `<div class="empty-state">${icon("search", 36)}<h3>조건에 맞는 학습이 없습니다.</h3><p>검색어나 필터를 바꾸어 다시 찾아보세요.</p><button class="secondary-button" data-action="clear-filters">필터 초기화</button></div>`}
    </section>`;
}

function projectDetailView() {
  return `
    <section class="view project-detail-view">
      <button class="back-link" data-action="go-explore">← PBL 콘텐츠 목록으로</button>
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

function vodDetailView() {
  const lessons = [["01", "AI와 데이터 기반 의사결정", "동영상 · 24분"], ["02", "좋은 지표와 나쁜 지표", "동영상 · 31분"], ["03", "작전 사례 데이터 읽기", "자료·과제 · 45분"], ["04", "의사결정 편향 점검", "퀴즈 · 12문항"], ["05", "나의 부대 지표 설계", "코딩·제출 · 60분"]];
  return `
    <section class="view project-detail-view vod-detail-view">
      <a class="back-link" href="#/vod">← VOD 콘텐츠 목록으로</a>
      <div class="project-hero vod-hero">
        <div class="hero-copy"><span class="eyebrow light">DATA LITERACY · VOD</span><div class="tag-row glass-tags"><span>입문</span><span>모바일 가능</span><span>총 4시간</span></div><h1>지휘관을 위한<br />데이터 리터러시</h1><p>교육과 작전 현황을 올바르게 읽고, 숫자 뒤의 맥락과 위험을 판단하는 데이터 기반 의사결정 과정을 익힙니다.</p><div class="hero-actions"><button class="primary-button light-button" data-action="start-vod">VOD 학습 시작 ${icon("play", 17)}</button><button class="outline-button light-outline">♡ 관심강의</button></div></div>
        <div class="hero-visual vod-visual"><div class="radar-grid"></div><div class="vod-play-symbol">${icon("play", 38)}</div><div class="hero-metric"><span>COURSE PROGRESS</span><strong>00<small>%</small></strong><em>5개 학습 콘텐츠</em></div></div>
      </div>
      <div class="detail-layout">
        <div class="detail-main"><nav class="detail-tabs"><button class="active">과정 소개</button><button>VOD 학습</button><button>자료·과제</button><button>게시판</button></nav><section class="detail-section"><span class="section-number">01</span><div><span class="eyebrow">CURRICULUM</span><h2>영상, 과제, 퀴즈를 순서대로 학습합니다</h2><p class="lead">각 차시의 완료 조건을 충족하면 다음 콘텐츠가 열리며, 학습 노트와 AI 교관을 모든 차시에서 사용할 수 있습니다.</p><div class="vod-lesson-list">${lessons.map(([number, title, meta]) => `<a href="#/vod-learning"><span>${number}</span><div><b>${title}</b><small>${meta}</small></div>${icon("chevron", 16)}</a>`).join("")}</div></div></section></div>
        <aside class="enroll-card panel"><span class="status-label"><i></i> 바로 학습 가능</span><h3>과정 정보</h3><dl><div><dt>콘텐츠</dt><dd>동영상 2 · 실습 3</dd></div><div><dt>난이도</dt><dd>입문</dd></div><div><dt>수료 조건</dt><dd>진도 90% · 퀴즈 70점</dd></div><div><dt>제공 기관</dt><dd>국방 AI 교육센터</dd></div></dl><button class="primary-button" data-action="start-vod">학습 시작하기</button></aside>
      </div>
    </section>`;
}

function learningView() {
  return `
    <section class="view learning-view">
      ${pageHeader("MY LEARNING", "내 학습", "프로젝트와 VOD를 한곳에서 확인하고 이어서 학습하세요.", '<button class="secondary-button">학습 기록 보기</button>')}
      <div class="summary-strip"><div><span class="summary-icon active">${icon("play", 19)}</span><p><small>진행 중</small><strong>4</strong></p></div><div><span class="summary-icon pending">${icon("clock", 19)}</span><p><small>승인 대기</small><strong>1</strong></p></div><div><span class="summary-icon complete">${icon("check", 19)}</span><p><small>완료·수료</small><strong>12</strong></p></div><div><span class="summary-icon time">${icon("chart", 19)}</span><p><small>누적 학습</small><strong>68<em>시간</em></strong></p></div></div>
      <div class="content-tabs"><button class="active">전체 4</button><button>PBL 2</button><button>VOD 2</button><button>동료평가 <span>3</span></button></div>
      <div class="learning-stack">
        <article class="learning-card featured-learning"><div class="learning-cover lime"><span>M03</span><small>PROJECT</small></div><div class="learning-copy"><div><span class="eyebrow">수송 · 데이터 분석</span><span class="chip orange">D-09</span></div><h3>AI로 군수 수요 예측하기</h3><p>미션 03 · 예측 모델 설계 및 기준선 비교</p><div class="progress-line"><span>전체 진행률</span><b>48%</b>${progressBar(48)}</div><div class="learning-meta"><span>${icon("clock", 15)} 최근 학습 2분 전</span><span>${icon("users", 15)} 알파 2팀</span></div></div><button class="primary-button" data-action="continue-learning">이어서 수행 ${icon("arrow", 16)}</button></article>
        <article class="learning-card"><div class="learning-cover blue"><span>07</span><small>VOD</small></div><div class="learning-copy"><div><span class="eyebrow">공통 · 데이터 기초</span><span class="chip blue">학습 중</span></div><h3>Python 데이터 분석 기초</h3><p>7강 · 데이터 시각화와 인사이트 도출</p><div class="progress-line"><span>과정 진도</span><b>72%</b>${progressBar(72)}</div><div class="learning-meta"><span>${icon("clock", 15)} 18분 남음</span><span>${icon("play", 15)} 9 / 12강</span></div></div><button class="secondary-button">이어서 보기 ${icon("arrow", 16)}</button></article>
        <article class="learning-card"><div class="learning-cover purple"><span>02</span><small>PROJECT</small></div><div class="learning-copy"><div><span class="eyebrow">정비 · 컴퓨터 비전</span><span class="chip yellow">피드백 대기</span></div><h3>장비 이상 이미지 탐지</h3><p>미션 02 · 이미지 라벨 품질 점검</p><div class="progress-line"><span>전체 진행률</span><b>31%</b>${progressBar(31)}</div><div class="learning-meta"><span>${icon("clock", 15)} 어제 학습</span><span>${icon("message", 15)} 동료평가 요청됨</span></div></div><button class="secondary-button">상태 확인 ${icon("arrow", 16)}</button></article>
      </div>
    </section>`;
}

function workspaceView() {
  const checklistItems = ["문제 정의 확인", "데이터 품질 점검", "기준선 모델 실행", "성능 비교표 첨부"];
  return `
    <section class="workspace-view">
      <div class="workspace-header"><button class="icon-button" data-action="go-learning" aria-label="내 학습으로">←</button><div><span class="eyebrow">AI로 군수 수요 예측하기</span><h1>미션 03. 예측 모델 설계</h1></div><div class="workspace-status"><span>${icon("check", 14)} 저장됨</span><span class="deadline">D-09</span><button class="secondary-button compact" data-action="open-ai">${icon("sparkles", 16)} AI 교관</button></div></div>
      <div class="workspace-grid">
        <aside class="mission-sidebar"><span class="eyebrow">MISSION MAP · 48%</span>${progressBar(48)}<nav>${["문제 이해", "데이터 탐색", "모델 설계", "성능 검증", "대시보드", "최종 브리핑"].map((title, index) => `<button class="${index < 2 ? "complete" : index === 2 ? "active" : ""}"><span>${index < 2 ? icon("check", 14) : String(index + 1).padStart(2, "0")}</span><div><small>MISSION ${index + 1}</small><b>${title}</b></div></button>`).join("")}</nav><div class="team-mini"><div><span class="avatar">김</span><span class="avatar navy">박</span><span class="avatar coral">이</span></div><p><small>알파 2팀</small><b>팀 공간 열기 →</b></p></div></aside>
        <article class="mission-content">
          <nav class="workspace-tabs"><button class="active">미션 개요</button><button>수행 가이드</button><button>자료·데이터</button><button>결과물</button><button>피드백 <span>1</span></button></nav>
          <div class="mission-document"><span class="eyebrow">MISSION OBJECTIVE</span><h2>기준선을 넘어서는 예측 모델을 설계하세요.</h2><p class="mission-lead">단순 이동평균 모델을 기준선으로 삼아 최소 두 가지 접근법을 비교하고, 선택한 모델이 현장 판단에 적합한 이유를 설명합니다.</p><div class="intel-box"><span>${icon("shield", 20)}</span><div><b>작전 요구사항</b><p>평균 절대 백분율 오차(MAPE) 18% 이하 · 추론 시간 2초 이내 · 선택 근거 3개 이상</p></div></div>
            <h3><span>01</span> 수행 단계</h3><div class="step-grid"><div><em>STEP 01</em><b>기준선 설정</b><p>최근 4주 이동평균을 기준선으로 실행합니다.</p></div><div><em>STEP 02</em><b>후보 모델 비교</b><p>ARIMA와 Gradient Boosting의 성능을 비교합니다.</p></div><div><em>STEP 03</em><b>결과 해석</b><p>품목군별 오차와 작전상 위험을 설명합니다.</p></div></div>
            <h3><span>02</span> 작업 노트</h3><div class="editor-shell"><div class="editor-toolbar"><button><b>B</b></button><button><i>I</i></button><button>☷</button><button>🔗</button><span></span><small>마지막 저장 18:41</small></div><textarea aria-label="작업 노트">기준선 모델의 MAPE는 23.7%였다. 계절성 변수를 추가한 Gradient Boosting 모델은 16.4%로 개선되었으며, 특히 정기 보급 품목군에서...</textarea></div>
          </div>
          <footer class="workspace-footer"><button class="secondary-button">임시저장</button><div><span>다음: 모델 성능 검증</span><button class="primary-button" data-action="submit-mission">${state.submitted ? "제출 완료" : "결과물 제출"} ${icon(state.submitted ? "check" : "arrow", 16)}</button></div></footer>
        </article>
        <aside class="mission-tools"><div class="tools-head"><span class="eyebrow">MISSION CHECK</span><strong>${state.checklist.size} / ${checklistItems.length} 완료</strong></div>${progressBar((state.checklist.size / checklistItems.length) * 100)}<div class="checklist">${checklistItems.map((item) => `<label class="${state.checklist.has(item) ? "done" : ""}"><input type="checkbox" data-check="${item}" ${state.checklist.has(item) ? "checked" : ""}/><span>${state.checklist.has(item) ? icon("check", 13) : ""}</span>${item}</label>`).join("")}</div><div class="rubric"><span class="eyebrow">EVALUATION RUBRIC</span><div><b>모델 성능</b><span>40%</span></div><div><b>선택 근거</b><span>30%</span></div><div><b>결과 해석</b><span>30%</span></div><button>전체 평가 기준 보기 ${icon("arrow", 14)}</button></div><div class="resource-box"><span>${icon("file", 20)}</span><div><b>군수 수요 데이터.csv</b><small>12.4 MB · 보안등급 일반</small></div><button aria-label="파일 받기">↓</button></div><button class="ai-callout" data-action="open-ai"><span>${icon("sparkles", 19)}</span><div><b>막힌 부분이 있나요?</b><small>답 대신 해결의 실마리를 드려요.</small></div>${icon("arrow", 16)}</button></aside>
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
  return `<section class="view generic-view">${pageHeader("INFORMATION ARCHITECTURE", title, "제공해주신 IA 기준으로 서비스 경로에 연결된 메뉴입니다.")}<div class="empty-state large">${icon("folder", 40)}<span class="eyebrow">MENU CONNECTED</span><h2>${title} 메뉴 구성이 반영되었습니다.</h2><p>현재는 메뉴와 탐색 경로를 우선 구성했으며, 세부 업무 기능은 다음 구현 단계에서 확장할 수 있습니다.</p><button class="primary-button" data-action="go-home">메인화면으로 돌아가기</button></div></section>`;
}

const views = {
  home: homeView,
  vod: () => exploreView("vod"),
  "vod-detail": vodDetailView,
  "vod-learning": () => iaMenuView("vod-learning"),
  pbl: () => exploreView("pbl"),
  "pbl-detail": projectDetailView,
  "pbl-learning": workspaceView,
  explore: exploreView,
  project: projectDetailView,
  learning: learningView,
  workspace: workspaceView,
  peer: peerView,
  "peer-request": peerView,
  leaderboard: () => iaMenuView("leaderboard"),
  community: () => iaMenuView("community"),
  intro: () => iaMenuView("intro"),
  personal: () => iaMenuView("personal"),
  "my-courses": learningView,
  favorites: () => exploreView("all"),
  dashboard: growthView,
  "my-posts": () => iaMenuView("my-posts"),
  profile: () => iaMenuView("profile"),
  "skill-chart": () => iaMenuView("skill-chart"),
  member: () => iaMenuView("member"),
  diagnosis: () => iaMenuView("diagnosis"),
  roadmap: () => iaMenuView("roadmap"),
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

  if (projectTarget) navigate(projectTarget.dataset.target || "pbl-detail");
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
    "go-explore": () => navigate("pbl"),
    "go-learning": () => navigate("my-courses"),
    "go-peer": () => navigate("peer-request"),
    "go-home": () => navigate(state.role === "learner" ? "home" : state.role),
    "continue-learning": () => navigate("pbl-learning"),
    "start-project": () => { navigate("pbl-learning"); toast("프로젝트 학습을 시작했습니다."); },
    "start-vod": () => { navigate("vod-learning"); toast("VOD 학습을 시작했습니다."); },
    "clear-filters": () => { state.filter = "전체"; state.search = ""; render(); },
    "submit-mission": () => { state.submitted = true; render(); toast("미션 결과물이 제출되었습니다. 동료평가를 요청할 수 있어요."); },
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
