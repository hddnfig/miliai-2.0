# MILI AI 페이지 디자인 실행 원장

> 기준일: 2026-07-27 · 기준 IA: `docs/ia/02-screen-inventory.md` · 총 70페이지

이 문서는 디자인 착수 순서와 완료 상태를 관리하는 단일 체크리스트다. 각 화면은 `/screens/{ID}.html`로 독립 접근하며, 로딩·빈 결과·오류·권한 없음과 같은 동적 상태는 같은 HTML 안에서 처리한다.

## 상태 관리 규칙

- `[ ] 예정`: 아직 디자인하지 않음
- `[ ] 진행 중`: 현재 작업 중인 화면. 동시에 한 화면만 유지
- `[ ] 디자인 완료`: 기본·반응형·필수 상태를 구현함
- `[x] 검수 완료`: 브라우저 시각 검수, 핵심 상호작용, 빌드 검사를 통과함
- 화면을 완료할 때 이 문서의 체크박스·상태·완료일·산출물 링크를 즉시 갱신한다.
- 현재 후보 컨셉은 `digital-camouflage`이나 화면 구조와 컴포넌트 계약은 테마와 분리한다.
- 실사 인물·사물 이미지는 사용하지 않는다. 모든 화면의 1차 구축부터 추상 그래픽·패턴·키네틱 에셋을 적극 사용해 컨셉과 시각적 구분을 만든다.
- 1차 구축에서는 테마 토큰으로 교체 가능한 에셋과 가벼운 앰비언트 모션을 우선 적용한다. 마지막 그래픽 단계는 에셋을 처음 추가하는 단계가 아니라, 선호도 검토 후 이미지 품질·밀도·모션을 정교화하거나 교체하는 단계다.
- `docs/mili-ai-screen-inventory.md`의 장기 확장 목록(111개)은 현재 70개 IA와 ID 교차표를 확정하기 전까지 이 원장에 혼합하지 않는다.

## 진행 현황

| 항목 | 값 |
|---|---:|
| 전체 | 70 |
| 검수 완료 | 5 |
| 디자인 완료 · 검수 대기 | 7 |
| 진행 중 | 0 |
| 예정 | 58 |
| 완료 그룹 | 1단계 · 핵심 학습자 탐색 |
| 다음 디자인 화면 | PBL-02 |
| 다음 검수 화면 | VOD-02 |

## 1단계 · 핵심 학습자 탐색 (P0, 5)

로그인 이후의 핵심 흐름인 `오늘 할 일 확인 → 학습 탐색 → VOD/PBL 비교 → 통합 검색`을 먼저 고정한다. 이 그룹에서 학습자 Shell, 목록·카드·필터·진행률·상태 패턴을 확정한다.

- [x] **HOME-01 · 학습자 홈 · P0** — `검수 완료 · 2026-07-27` — 산출물: `/screens/HOME-01.html`
- [x] **EXP-01 · 학습 탐색 · P0** — `검수 완료 · 2026-07-27` — 선행: HOME-01 — 산출물: `/screens/EXP-01.html`
- [x] **VOD-01 · VOD 목록 · P0** — `검수 완료 · 2026-07-27` — 선행: EXP-01 — 산출물: `/screens/VOD-01.html`
- [x] **PBL-01 · PBL 목록 · P0** — `검수 완료 · 2026-07-27` — 선행: EXP-01 — 산출물: `/screens/PBL-01.html`
- [x] **SRCH-01 · 통합 검색 · P0** — `검수 완료 · 2026-07-27` — 선행: EXP-01 — 산출물: `/screens/SRCH-01.html`

## 2단계 · VOD 학습 여정 (P0/P1, 7)

- [ ] **VOD-02 · VOD 상세 · P0** — `디자인 완료 · 검수 대기` — 산출물: `/screens/VOD-02.html`
- [ ] **VOD-03 · 수강 신청 결과 · P0** — `디자인 완료 · 검수 대기` — 산출물: `/screens/VOD-03.html`
- [ ] **VOD-04 · VOD 플레이어 · P0** — `디자인 완료 · 검수 대기` — 산출물: `/screens/VOD-04.html`
- [ ] **VOD-05 · 퀴즈 · P0** — `디자인 완료 · 검수 대기` — 산출물: `/screens/VOD-05.html`
- [ ] **VOD-06 · 코딩 실습 · P0** — `디자인 완료 · 검수 대기` — 산출물: `/screens/VOD-06.html`
- [ ] **VOD-07 · 설문 · P1** — `디자인 완료 · 검수 대기` — 산출물: `/screens/VOD-07.html`
- [ ] **VOD-08 · 과정 완료 · P0** — `디자인 완료 · 검수 대기` — 산출물: `/screens/VOD-08.html`

## 3단계 · PBL 및 내 학습 여정 (P0/P1, 11)

- [ ] **PBL-02 · PBL 상세 · P0** — `예정` — 산출물: `/screens/PBL-02.html`
- [ ] **PBL-03 · 참여 신청 · P0** — `예정` — 산출물: `/screens/PBL-03.html`
- [ ] **PBL-04 · 팀 구성 · P0** — `예정` — 산출물: `/screens/PBL-04.html`
- [ ] **PBL-05 · 프로젝트 워크스페이스 · P0** — `예정` — 산출물: `/screens/PBL-05.html`
- [ ] **PBL-06 · 미션 상세 · P0** — `예정` — 산출물: `/screens/PBL-06.html`
- [ ] **PBL-07 · 문제 수행 · P0** — `예정` — 산출물: `/screens/PBL-07.html`
- [ ] **PBL-08 · 미션 제출 · P0** — `예정` — 산출물: `/screens/PBL-08.html`
- [ ] **PBL-09 · 동료평가 허브 · P0** — `예정` — 산출물: `/screens/PBL-09.html`
- [ ] **PBL-10 · 동료평가 작성 · P0** — `예정` — 산출물: `/screens/PBL-10.html`
- [ ] **PBL-11 · 결과/회고 · P1** — `예정` — 산출물: `/screens/PBL-11.html`
- [ ] **MYL-01 · 내 학습 · P0** — `예정` — 산출물: `/screens/MYL-01.html`

## 4단계 · 공개·인증·알림 (P0/P1, 8)

- [ ] **PUB-01 · 서비스 홈 · P0** — `예정` — 산출물: `/screens/PUB-01.html`
- [ ] **AUTH-01 · 로그인 · P0** — `예정` — 산출물: `/screens/AUTH-01.html`
- [ ] **AUTH-02 · 회원가입 · P0** — `예정` — 산출물: `/screens/AUTH-02.html`
- [ ] **AUTH-03 · 온보딩 · P0** — `예정` — 산출물: `/screens/AUTH-03.html`
- [ ] **PUB-02 · 서비스 소개 · P1** — `예정` — 산출물: `/screens/PUB-02.html`
- [ ] **AUTH-04 · 계정 찾기 · P1** — `예정` — 산출물: `/screens/AUTH-04.html`
- [ ] **AUTH-05 · 접근 제한 · P1** — `예정` — 산출물: `/screens/AUTH-05.html`
- [ ] **NOTICE-01 · 알림 센터 · P1** — `예정` — 산출물: `/screens/NOTICE-01.html`

## 5단계 · 커뮤니티·성장·MY (P1/P2, 14)

- [ ] **COM-01 · 커뮤니티 허브 · P1** — `예정` — 산출물: `/screens/COM-01.html`
- [ ] **COM-02 · 게시판 목록 · P1** — `예정` — 산출물: `/screens/COM-02.html`
- [ ] **COM-03 · 게시글 상세 · P1** — `예정` — 산출물: `/screens/COM-03.html`
- [ ] **COM-04 · 게시글 작성·수정 · P1** — `예정` — 산출물: `/screens/COM-04.html`
- [ ] **GROW-01 · 성장 대시보드 · P1** — `예정` — 산출물: `/screens/GROW-01.html`
- [ ] **GROW-02 · 역량 맵 · P1** — `예정` — 산출물: `/screens/GROW-02.html`
- [ ] **GROW-03 · 역량진단 · P1** — `예정` — 산출물: `/screens/GROW-03.html`
- [ ] **GROW-04 · 로드맵 · P1** — `예정` — 산출물: `/screens/GROW-04.html`
- [ ] **GROW-05 · 수료증 · P1** — `예정` — 산출물: `/screens/GROW-05.html`
- [ ] **MY-01 · 프로필 · P1** — `예정` — 산출물: `/screens/MY-01.html`
- [ ] **MY-02 · 관심 콘텐츠 · P1** — `예정` — 산출물: `/screens/MY-02.html`
- [ ] **MY-03 · 내 활동 · P1** — `예정` — 산출물: `/screens/MY-03.html`
- [ ] **MY-05 · 계정 설정 · P1** — `예정` — 산출물: `/screens/MY-05.html`
- [ ] **MY-04 · 크레딧 · P2** — `예정` — 산출물: `/screens/MY-04.html`

## 6단계 · 지휘관/교육담당자 (P1/P2, 7)

- [ ] **CMD-01 · 현황 · P1** — `예정` — 산출물: `/screens/CMD-01.html`
- [ ] **CMD-02 · 부대 학습 · P1** — `예정` — 산출물: `/screens/CMD-02.html`
- [ ] **CMD-03 · 구성원 상세 · P1** — `예정` — 산출물: `/screens/CMD-03.html`
- [ ] **CMD-04 · 교육 프로그램 · P1** — `예정` — 산출물: `/screens/CMD-04.html`
- [ ] **CMD-05 · 역량 분석 · P1** — `예정` — 산출물: `/screens/CMD-05.html`
- [ ] **CMD-06 · 지원 대상 · P1** — `예정` — 산출물: `/screens/CMD-06.html`
- [ ] **CMD-07 · 리포트 · P2** — `예정` — 산출물: `/screens/CMD-07.html`

## 7단계 · 운영자 (P1/P2, 18)

- [ ] **ADM-01 · 운영 대시보드 · P1** — `예정` — 산출물: `/screens/ADM-01.html`
- [ ] **ADM-PBL-01 · 프로젝트 목록 · P1** — `예정` — 산출물: `/screens/ADM-PBL-01.html`
- [ ] **ADM-PBL-02 · 프로젝트 편집 · P1** — `예정` — 산출물: `/screens/ADM-PBL-02.html`
- [ ] **ADM-PBL-03 · PBL 차수 · P1** — `예정` — 산출물: `/screens/ADM-PBL-03.html`
- [ ] **ADM-PBL-04 · PBL 운영 · P1** — `예정` — 산출물: `/screens/ADM-PBL-04.html`
- [ ] **ADM-PBL-05 · AI 교관 · P1** — `예정` — 산출물: `/screens/ADM-PBL-05.html`
- [ ] **ADM-VOD-01 · 과정 목록 · P1** — `예정` — 산출물: `/screens/ADM-VOD-01.html`
- [ ] **ADM-VOD-02 · 과정 편집 · P1** — `예정` — 산출물: `/screens/ADM-VOD-02.html`
- [ ] **ADM-VOD-03 · 학습 아이템 편집 · P1** — `예정` — 산출물: `/screens/ADM-VOD-03.html`
- [ ] **ADM-VOD-04 · VOD 차수·수강 · P1** — `예정` — 산출물: `/screens/ADM-VOD-04.html`
- [ ] **ADM-USER-01 · 회원 목록 · P1** — `예정` — 산출물: `/screens/ADM-USER-01.html`
- [ ] **ADM-USER-02 · 회원 상세 · P1** — `예정` — 산출물: `/screens/ADM-USER-02.html`
- [ ] **ADM-COM-01 · 게시판 관리 · P1** — `예정` — 산출물: `/screens/ADM-COM-01.html`
- [ ] **ADM-ORG-01 · 부대·계급 · P2** — `예정` — 산출물: `/screens/ADM-ORG-01.html`
- [ ] **ADM-GROW-01 · 역량·진단 · P2** — `예정` — 산출물: `/screens/ADM-GROW-01.html`
- [ ] **ADM-SYS-01 · 역할·메뉴 권한 · P2** — `예정` — 산출물: `/screens/ADM-SYS-01.html`
- [ ] **ADM-SYS-02 · 공통 콘텐츠 · P2** — `예정` — 산출물: `/screens/ADM-SYS-02.html`
- [ ] **ADM-SYS-03 · 로그·보안 · P2** — `예정` — 산출물: `/screens/ADM-SYS-03.html`

## 8단계 · 그래픽 시스템 최종 고도화

각 화면 구축 단계에서 이미 적용한 그래픽·패턴·키네틱 에셋을 대상으로, 70개 화면의 구조와 공용 컴포넌트가 안정화된 뒤 최종 품질을 일괄 조정한다.

- [ ] 사용성 검토를 반영한 추상 그래픽 에셋 교체·리파인
- [ ] 선·형·면 기반 배경 패턴의 해상도·크롭·변형 보강
- [ ] 정적·호버·전환 상태 모션의 속도·이징 정교화
- [ ] 페이지군별 그래픽 밀도와 시선 집중도 최종 조정
- [ ] 성능·접근성(`prefers-reduced-motion`) 검수
