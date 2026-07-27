const NAV_ITEMS = [
  ["HOME-01", "홈"],
  ["EXP-01", "탐색"],
  ["VOD-01", "VOD"],
  ["PBL-01", "프로젝트"],
  ["SRCH-01", "통합 검색"],
];

class MiliShell extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute("active");
    const title = this.getAttribute("title") ?? "";
    const eyebrow = this.getAttribute("eyebrow") ?? "LEARNER";
    const mode = this.getAttribute("mode") ?? "standard";
    const content = this.innerHTML;
    const nav = NAV_ITEMS.map(
      ([id, label]) =>
        `<a class="shell-nav__item" ${id === active ? 'aria-current="page"' : ""} href="./${id}.html"><span>${label}</span><small>${id}</small></a>`,
    ).join("");

    this.innerHTML = `
      <a class="skip-link" href="#main-content">본문으로 건너뛰기</a>
      <div class="learner-shell learner-shell--${mode}">
        <aside class="shell-rail" aria-label="주요 메뉴">
          <a class="wordmark" href="./HOME-01.html" aria-label="MILI AI 홈">MILI <b>AI</b></a>
          <nav class="shell-nav">${nav}</nav>
          <div class="shell-rail__foot">
            <span class="status-dot" aria-hidden="true"></span>
            <div><strong>학습 시스템 정상</strong><small>마지막 동기화 14:32</small></div>
          </div>
        </aside>
        <div class="shell-stage">
          <header class="shell-header">
            <div><span class="eyebrow">${eyebrow}</span><strong>${title}</strong></div>
            <div class="shell-actions">
              <a class="text-action screen-index-action" href="../handoff.html">전체 화면</a>
              ${mode === "focus" ? '<a class="text-action" href="./VOD-01.html">학습 종료</a>' : '<a class="text-action" href="./SRCH-01.html">검색</a>'}
              <button class="text-action" type="button" data-toast="새 알림이 없습니다.">알림 <span class="notification-dot" aria-hidden="true"></span></button>
              <button class="profile-chip" type="button" data-toast="프로필 화면은 후속 단계에서 설계합니다.">김철수 <span>상병</span></button>
            </div>
          </header>
          <main id="main-content" class="screen-main" tabindex="-1">${content}</main>
        </div>
      </div>
      <div class="toast" role="status" aria-live="polite"></div>
      <form class="review-state" aria-label="화면 상태 검수">
        <label for="review-state-select">STATE</label>
        <select id="review-state-select">
          <option value="default">Default</option>
          <option value="loading">Loading</option>
          <option value="empty">Empty</option>
          <option value="error">Error</option>
          <option value="forbidden">Forbidden</option>
        </select>
      </form>
    `;

    this.bindInteractions();
  }

  bindInteractions() {
    const params = new URLSearchParams(window.location.search);
    const state = params.get("state") ?? "default";
    document.body.dataset.uiState = state;
    const select = this.querySelector("#review-state-select");
    select.value = state;
    select.addEventListener("change", () => {
      params.set("state", select.value);
      if (!params.has("review")) params.set("review", "1");
      window.location.search = params.toString();
    });

    if (params.get("review") === "1") this.querySelector(".review-state").dataset.visible = "true";

    this.querySelectorAll("[data-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        const group = button.closest("[data-tabs]");
        group.querySelectorAll("[data-tab]").forEach((item) => item.setAttribute("aria-selected", "false"));
        button.setAttribute("aria-selected", "true");
        const target = button.dataset.tab;
        document.querySelectorAll("[data-type]").forEach((item) => {
          item.hidden = target !== "all" && item.dataset.type !== target;
        });
      });
    });

    this.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        const selected = button.getAttribute("aria-pressed") === "true";
        button.setAttribute("aria-pressed", String(!selected));
      });
    });

    this.querySelectorAll("[data-wishlist]").forEach((button) => {
      button.addEventListener("click", () => {
        const selected = button.getAttribute("aria-pressed") === "true";
        button.setAttribute("aria-pressed", String(!selected));
        this.showToast(selected ? "관심 콘텐츠에서 해제했습니다." : "관심 콘텐츠에 저장했습니다.");
      });
    });

    this.querySelectorAll("[data-toast]").forEach((button) => {
      button.addEventListener("click", () => this.showToast(button.dataset.toast));
    });

    this.querySelectorAll("[data-toggle-target]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = this.querySelector(`#${button.dataset.toggleTarget}`);
        if (!target) return;
        const willOpen = target.hidden;
        target.hidden = !willOpen;
        button.setAttribute("aria-expanded", String(willOpen));
      });
    });

    this.querySelectorAll("[data-reveal-target]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = this.querySelector(`#${button.dataset.revealTarget}`);
        if (!target) return;
        target.hidden = false;
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        this.showToast(button.dataset.successMessage ?? "결과를 확인했습니다.");
      });
    });

    this.querySelectorAll("[data-progress-action]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = this.querySelector(button.dataset.progressAction);
        if (!target) return;
        const value = Number(target.getAttribute("aria-valuenow") ?? 0);
        const next = Math.min(value + 20, 100);
        target.setAttribute("aria-valuenow", String(next));
        target.querySelector("span").style.width = `${next}%`;
        this.showToast(next === 100 ? "학습 항목을 완료했습니다." : `진도를 ${next}%로 저장했습니다.`);
      });
    });

    this.querySelectorAll("form[data-demo-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const target = this.querySelector(`#${form.dataset.resultTarget}`);
        if (target) target.hidden = false;
        this.showToast(form.dataset.successMessage ?? "응답을 저장했습니다.");
      });
    });

    const searchInput = this.querySelector("[data-live-search]");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLocaleLowerCase("ko");
        this.querySelectorAll("[data-search-item]").forEach((item) => {
          item.hidden = Boolean(query) && !item.textContent.toLocaleLowerCase("ko").includes(query);
        });
      });
    }
  }

  showToast(message) {
    const toast = this.querySelector(".toast");
    toast.textContent = message;
    toast.dataset.open = "true";
    window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => {
      toast.dataset.open = "false";
    }, 2400);
  }
}

customElements.define("mili-shell", MiliShell);
