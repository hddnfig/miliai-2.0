# MILI AI 데이터베이스 지원 범위 및 갭 분석

> 문서 버전: 1.0
> 작성일: 2026-07-24
> 범위: 현재 확인 가능 범위, 부족 데이터, 권장 논리 모델·관계, 우선순위
> 중요: 이 문서는 migration 또는 물리 스키마가 아니다. `proposed_*`는 모두 제안 논리명이다.

## 1. 결론

사용자가 제공한 `/Users/hddn2/Desktop/mili AI/DB 설계.png`를 9개 영역으로 확대해 ERD의 테이블·주요 컬럼·관계를 판독했다. ERD는 PBL, VOD, 회원·조직·권한, AI 대화, 동료평가, 진단·추천, 커뮤니티, 수료·크레딧, 알림·로그를 폭넓게 포함한다. MILI AI의 학습 핵심 흐름은 상당 부분 현재 DB로 시작할 수 있다.

다만 프로젝트 결과물의 불변 버전과 재제출, 루브릭 항목별 평가·배정, 사용자별 역량 증거, 포트폴리오·배지·공개 범위, AI 출처·프롬프트 실행 이력, 조직 범위 권한, 콘텐츠 버전·검수 이력은 보완이 필요하다.

이미지 ERD만으로는 실제 DDL의 인덱스, check, cascade, trigger, view, 물리 enum, 실데이터 정합성을 확인할 수 없다. 이 문서에서 `[DB 확인]`은 **ERD에서 시각적으로 직접 확인**했다는 뜻이다.

### 1.1 판독한 주요 테이블

| 도메인 | ERD에서 확인한 주요 테이블 |
|---|---|
| 회원·조직·권한 | `tb_member`, `tb_member_role`, `tb_role`, `tb_mili_unit`, `tb_mili_rank`, `tb_menu`, `tb_menu_role`, `tb_oauth2_*`, `tb_cp_sso` |
| 온보딩·진단·추천 | `tb_onboarding_survey`, `tb_onboarding_question`, `tb_onboarding_answer`, `tb_level_test`, `tb_level_test_answer`, `tb_recommend` |
| PBL | `tb_pbl_project`, `tb_pbl_offering`, `tb_pbl_enrollment`, `tb_pbl_mission`, `tb_pbl_problem`, `tb_pbl_enroll_mission`, `tb_pbl_enroll_problem` |
| 팀·동료·AI | `tb_team`, `tb_team_member`, `tb_peer_review_request`, `tb_peer_review_post`, `tb_peer_review_likes`, `tb_mento_post`, `tb_ai_agent`, `tb_ai_chat_history` |
| VOD | `tb_vod_course`, `tb_vod_course_offering`, `tb_vod_enrollment`, `tb_vod_content`, `tb_vod_toc`, `tb_vod_toc_item`, `tb_vod_item`, `tb_vod_video`, `tb_vod_quiz`, `tb_vod_coding`, `tb_vod_data`, `tb_vod_learning_note`, `tb_vod_learn_data`, `tb_vod_learn_data_log` |
| 스킬·로드맵 | `tb_skill`, `tb_project_skill`, `tb_mission_skill`, `tb_vod_item_skill`, `tb_skill_quiz`, `tb_roadmap`, `tb_roadmap_item` |
| 커뮤니티 | `tb_board`, `tb_post`, `tb_board_attach`, `tb_post_likes`, `tb_attach` |
| 수료·보상 | `tb_certificate_template`, `tb_cert_issue`, `tb_user_wallet`, `tb_credit_transaction`, `tb_redemption_request` |
| 설문·알림 | `tb_survey`, `tb_survey_question`, `tb_survey_answer`, `tb_message_template`, `tb_message_history` |
| 시스템·감사 | `tb_admin_allow_ip`, `tb_log_role_history`, `tb_log_user_download`, `tb_log_admin_access`, `tb_log_page_view`, `tb_log_login`, `tb_user_info_history`, `tb_log_change_history`, `tb_code_group`, `tb_code`, `tb_page` |

## 2. DB에서 확인한 서비스 범위

### 2.1 도메인별 판정

| 서비스 도메인 | 상태 | ERD 직접 근거 | 핵심 미확인·갭 |
|---|---|---|---|
| 사용자 및 인증 | [DB 확인] | `tb_member`, OAuth2 3종, `tb_cp_sso` | 약관 정책 버전, MFA, 세션·탈퇴 보존 |
| 조직 및 권한 | [부분 지원] | `tb_mili_unit`, `tb_mili_rank`, role/menu 매핑 | 조직 parent 관계, 데이터 범위·유효기간 |
| VOD 학습 | [DB 확인] | 과정–운영–수강–목차–아이템–유형별 학습 구조 | 콘텐츠 버전, 수료 산식 버전 |
| 프로젝트 기반 학습 | [DB 확인] | 프로젝트–운영–수강–미션–문제–실행 관계 | 콘텐츠 불변 버전, 운영별 스냅샷 |
| 미션 수행 | [DB 확인] | 선행 미션, 수행 상태·진도·평가, 문제 응답 | 활동 로그 세분화, 재시도 이력 |
| 제출 및 결과물 | [부분 지원] | `submission_ty`, `problem_answer`, 공통 첨부 | 결과물 루트·버전·제출/재제출 이력 |
| 평가 및 피드백 | [부분 지원] | 미션/문제 점수·피드백, peer review 게시 구조 | 루브릭·배정·항목 평가·판정 이력 |
| 팀 및 협업 | [부분 지원] | 팀·팀원·Git URL·기여도·리뷰 상태 | 팀 과업, 공동 결과물, 역할 이력·대화 분리 |
| AI 교관 | [부분 지원] | agent, session/turn/context/message 기반 대화 | 출처, 지식 버전, 실행·신고·보존 |
| 역량 및 스킬 | [부분 지원] | 스킬 정의·콘텐츠 매핑·진단 문항 | 사용자별 역량 증거·수준·취소·만료 |
| 추천 및 로드맵 | [부분 지원] | 로드맵 항목, 스킬 기반 추천 결과 | 추천 이유 코드, 규칙 버전, 노출·반응 이력 |
| 학습 진도 | [DB 확인] | PBL/VOD 수강 진도, 미션·문제 실행, VOD 이벤트 로그 | 두 학습 유형의 통합 읽기 모델 |
| 수료 및 인증 | [DB 확인] | 인증서 템플릿·발급, 수강별 발급 여부 | 발급 취소·만료·외부 검증키 |
| 보상 | [부분 지원] | 지갑, 크레딧 거래, 교환 요청, 미션 보상 | 배지, 연속 학습, 정책 버전 |
| 커뮤니티 | [DB 확인] | 게시판·게시글·첨부·좋아요, 참조 객체 | 답변 채택·신고·moderation 세분화 |
| 공지 및 운영 | [부분 지원] | NOTICE/FAQ/NEWS 등 게시판 유형, page/menu | 대상 범위·검수 버전·예약 게시 |
| 알림 | [부분 지원] | 메시지 템플릿·발송 이력·채널 | 인앱 알림 객체, 읽음·딥링크·수신 설정 |
| 통계 및 리포트 | [부분 지원] | 진도·이벤트·로그 원천 데이터 | 지표 사전, 집계 스냅샷, 최소 집단 |
| 콘텐츠 관리 | [부분 지원] | PBL/VOD 테이블과 use/make 상태 | 불변 버전·검수·승인·게시 이력 |
| 시스템 관리 | [DB 확인] | OAuth/SSO, 메뉴·페이지, 공통코드, 접근·변경 로그 | 기능 플래그, 배치, 장애 관리 |

### 2.2 현재 지원 범위 해석

- ERD에서 핵심 구조 확인: 8/20 도메인
- 일부 구조 확인: 12/20 도메인
- 전체 구조 근거 없음: 0/20 도메인
- 단, `DB 확인`도 화면 전체가 완성됐다는 뜻은 아니며 정책·API·실데이터 검증은 별도다.

## 3. 가장 시급한 데이터 갭

| 우선순위 | 갭 | 왜 먼저 필요한가 | 최소 결정사항 |
|---:|---|---|---|
| 1 | 결과물–제출–평가 모델 혼재 | 개선·재제출 이력을 안정적으로 표현하기 어려움 | 결과물 버전, 제출 사건, 평가 작업, 판정 분리 |
| 2 | 사용자별 역량 증거 부재 | 성장·추천·포트폴리오의 신뢰 근거가 없음 | 수준, 증거, 판정자, 유효기간 |
| 3 | 조직 범위 권한 부재 | 지휘관이 과도한 개인 데이터를 볼 위험 | 조직 트리, 역할, 범위, 목적, 유효기간 |
| 4 | AI 출처·버전·보존 부재 | 답변 검증과 책임 추적이 어려움 | 인용, 지식 버전, 모델/프롬프트, 보존 |
| 5 | 동료평가 정책 모델 부재 | 공정한 배정·익명·루브릭 평가가 어려움 | 배정, 이해충돌, 마감, 항목 평가, 공개 시점 |
| 6 | 콘텐츠 불변 버전·검수 이력 부재 | 수행 중 내용 변경과 평가 기준 불일치 위험 | 초안 버전, 승인, 게시 스냅샷, 적용 차수 |
| 7 | 포트폴리오·공개범위 부재 | 결과물 축적과 안전한 공유가 불가능 | 대표 결과물, 공개 대상, 민감정보 점검 |
| 8 | 물리 DDL·데이터 사전 부재 | 인덱스·제약·실데이터 상태를 확정할 수 없음 | DDL, enum, index, cascade, 보존기간 |

## 4. 권장 논리 데이터 모델

아래 `proposed_*`는 곧바로 새 테이블을 만들라는 뜻이 아니라, 화면과 API가 요구하는 **논리 계약**이다. 먼저 현재 `tb_*`의 컬럼·제약으로 흡수 가능한지 확인하고, 이력·다형성·보안 경계가 분리되어야 할 때만 추가한다.

### 4.0 ERD 핵심 관계와 화면에 쓸 컬럼

| 흐름 | ERD 관계 | 핵심 컬럼 | 판정 |
|---|---|---|---|
| PBL 정의 | `tb_pbl_project → tb_pbl_mission → tb_pbl_problem` | 목표·제약·결과물·평가기준, 선행미션, 제출유형 | [DB 확인] |
| PBL 운영 | `tb_pbl_project → tb_pbl_offering → tb_pbl_enrollment` | 신청기간, 학습기간, 신청/학습 상태, 진도, 수료·인증 여부 | [DB 확인] |
| PBL 실행 | `tb_pbl_enrollment → tb_pbl_enroll_mission → tb_pbl_enroll_problem` | 수행상태, 진도, 답안, 점수, 피드백 | [DB 확인] |
| 팀 실행 | `tb_pbl_offering → tb_team → tb_team_member → tb_pbl_enrollment` | Git URL, 리뷰 상태·결과, 팀원 역할, 기여도 | [DB 확인] |
| 동료평가 | `tb_peer_review_request → tb_peer_review_post → tb_peer_review_likes` | 대상유형/번호, 본문, 평가자, 좋아요 | [부분 지원] 루브릭·배정 부재 |
| AI 대화 | `tb_ai_agent → tb_ai_chat_history`와 team/enrollment 연결 | session, turn, object_type/id, message_data | [부분 지원] 출처·실행 이력 부재 |
| VOD 정의 | `tb_vod_course → tb_vod_course_offering → tb_vod_content → tb_vod_toc → tb_vod_item` | 난이도, 시간, 기간, 콘텐츠·아이템 유형 | [DB 확인] |
| VOD 실행 | `tb_vod_enrollment → tb_vod_learn_data → tb_vod_learn_data_log` | 상태, 진도, 학습결과 JSONB, PLAY/SEEK/PAUSE/STOP/PING | [DB 확인] |
| 스킬·진단 | `tb_skill ↔ tb_project_skill/tb_mission_skill/tb_vod_item_skill`, `tb_skill_quiz → tb_level_test_answer → tb_level_test` | 스킬 분야·명·레벨, 진단 응답·결과 | [부분 지원] 사용자 증거 부재 |
| 로드맵·추천 | `tb_roadmap → tb_roadmap_item`, `tb_recommend → tb_member` | 학습엔티티 유형/번호, 사용자별 스킬 분야·명·레벨 | [부분 지원] 이유·규칙 버전 부재 |
| 인증·보상 | `tb_certificate_template → tb_cert_issue`, `tb_user_wallet ↔ tb_credit_transaction` | 발급 파일, 잔액, 적립·사용 거래, 교환 요청 | [DB 확인] 배지·연속학습 제외 |
| 커뮤니티 | `tb_board → tb_post → tb_board_attach` 및 `tb_post_likes` | 게시판 유형, parent_post, 참조객체, 첨부, 좋아요 | [DB 확인] |
| 알림 | `tb_message_template → tb_message_history` | 목적·채널, 발신/수신, 성공 여부 | [부분 지원] 인앱 읽음·설정 부재 |
| 감사 | 회원·권한·접근·페이지·변경 로그군 | actor, target, URL, before/after, timestamp | [DB 확인] |

### 4.1 사용자·조직·권한

| 제안 엔티티 | 핵심 필드 | 관계·규칙 |
|---|---|---|
| `proposed_users` | id, status, display_name, locale, timezone | 인증 식별자와 분리; 삭제보다 상태·보존 정책 적용 |
| `proposed_identities` | id, user_id, provider, subject, verified_at | 사용자 1:N 인증수단; provider+subject unique |
| `proposed_consents` | user_id, policy_version_id, choice, decided_at | 약관 버전별 불변 동의 기록 |
| `proposed_org_units` | id, parent_id, type, name, active_period | adjacency 또는 closure table로 계층 표현 |
| `proposed_org_memberships` | user_id, org_unit_id, role_label, valid_from/to | 이력 보존, 현재 소속 파생 |
| `proposed_roles` | id, code, name | 학습자·지휘관·설계자·운영자 등 |
| `proposed_permissions` | id, resource, action | 화면 메뉴가 아닌 리소스 행동 기준 |
| `proposed_user_roles` | user_id, role_id, valid_from/to | 복수 역할과 유효기간 |
| `proposed_scope_assignments` | user_role_id, scope_type, scope_id, purpose | 조직·콘텐츠·프로젝트 범위 제한 |

### 4.2 콘텐츠 공통·버전

| 제안 엔티티 | 핵심 필드 | 관계·규칙 |
|---|---|---|
| `proposed_contents` | id, content_type, owner_id, status | PBL/VOD 공통 검색·찜 식별자 |
| `proposed_content_versions` | id, content_id, version, payload_ref, status | 게시 버전은 불변, 수정은 새 버전 |
| `proposed_publications` | id, content_version_id, audience, start/end | 노출 대상과 기간 분리 |
| `proposed_assets` | id, asset_type, storage_ref, checksum, security_level | 파일 내용과 메타 분리, 악성검사 상태 포함 |
| `proposed_asset_versions` | asset_id, version, checksum, created_by | 자료 교체 이력 |
| `proposed_review_requests` | target_type/id, version_id, status, requested_by | 콘텐츠 검수 공통 워크플로 |
| `proposed_approvals` | request_id, reviewer_id, decision, reason, decided_at | 승인 이력 불변 |

### 4.3 VOD 학습

| 제안 엔티티 | 핵심 필드 | 관계·규칙 |
|---|---|---|
| `proposed_courses` | content_id, title, level, duration | 공통 콘텐츠 1:1 확장 |
| `proposed_lessons` | id, course_version_id, order, required | 게시 버전에 귀속 |
| `proposed_activities` | id, parent_type/id, activity_type, order | 영상·읽기·퀴즈·실습 원자 활동 |
| `proposed_offerings` | id, content_id, version_id, period, capacity | 콘텐츠 정의와 운영 차수 분리 |
| `proposed_enrollments` | id, user_id, offering_id, status | 신청 승인과 학습 실행의 기준 연결 |
| `proposed_activity_runs` | enrollment_id, activity_id, status, progress | 사용자별 수행 상태 |
| `proposed_attempts` | activity_run_id, attempt_no, response, score | 재시도 이력 보존 |
| `proposed_completion_rules` | offering_id, rule_type, threshold | 수료 산식 버전 관리 필요 |

### 4.4 프로젝트·미션

| 제안 엔티티 | 핵심 필드 | 관계·규칙 |
|---|---|---|
| `proposed_projects` | content_id, problem, objective, mode, duration | 공통 콘텐츠 1:1 확장 |
| `proposed_project_versions` | project_id, version, result_spec, constraints | 수행 시작 시 버전 고정 |
| `proposed_project_units` | id, project_version_id, order, title | 유닛이 실제로 필요할 때만 채택 |
| `proposed_missions` | id, parent_id, order, title, unlock_rule_id | 프로젝트 또는 유닛 소속 |
| `proposed_prerequisites` | target_type/id, source_type/id, condition | 콘텐츠·미션 공통 선수조건 |
| `proposed_project_runs` | id, offering_id, user_or_team, status | 개인/팀 주체를 명시적 모델로 처리 |
| `proposed_mission_runs` | project_run_id, mission_id, status, started/completed_at | 콘텐츠 미션과 실행 분리 |
| `proposed_learning_events` | actor, event_type, object, occurred_at, dedupe_key | 진도·통계의 원천 이벤트; 중복 방지 |

유닛 결정: 기본은 `프로젝트 → 미션 → 활동`으로 시작한다. 미션이 10개 이상이거나 단계별 공개·평가·운영이 필요한 프로젝트에서만 `유닛`을 추가한다.

### 4.5 결과물·제출·평가

| 제안 엔티티 | 핵심 필드 | 관계·규칙 |
|---|---|---|
| `proposed_deliverable_specs` | mission_id, allowed_types, constraints, schema | 제출 요구사항·검증 기준 |
| `proposed_artifacts` | id, owner_type/id, mission_run_id, type | 계속 편집되는 결과물의 논리 루트 |
| `proposed_artifact_versions` | artifact_id, version, content_ref, checksum, created_at | 불변 버전; 파일·URL·텍스트 메타 포함 |
| `proposed_submissions` | id, artifact_version_id, submitter, status, submitted_at | 특정 버전을 평가 대상으로 고정 |
| `proposed_validation_results` | submission_id, validator, result, details | 형식·보안·자동 테스트 결과 |
| `proposed_review_requests` | id, submission_id, review_type, status, due_at | AI·동료·멘토 평가 요청 공통 |
| `proposed_review_assignments` | request_id, reviewer_id, status, conflict_check | 누가 언제 평가하는지 관리 |
| `proposed_rubrics` | id, version, target_type/id | 평가 기준 버전 고정 |
| `proposed_rubric_items` | rubric_id, order, criterion, levels, weight | 항목·수준·가중치 |
| `proposed_evaluations` | assignment_id, submission_id, decision, score | 평가 결과 헤더; 판정과 상태 분리 |
| `proposed_evaluation_items` | evaluation_id, rubric_item_id, level, comment | 항목별 결과 |
| `proposed_feedback` | evaluation_id, body, visibility, published_at | 공개 시점과 대상 |
| `proposed_revision_requests` | submission_id, evaluation_id, status, due_at | 수정 요구와 후속 제출 연결 |

핵심 관계:

```text
artifact 1 ── N artifact_version
artifact_version 1 ── 0..1 submission
submission 1 ── N review_request 1 ── N review_assignment
review_assignment 1 ── 0..1 evaluation 1 ── N evaluation_item
submission 1 ── N revision_request ── 0..1 next_submission
```

### 4.6 팀·협업

ERD에서 확인한 `tb_team`, `tb_team_member`, `tb_ai_chat_history`는 유지·확장한다. 팀 대화와 AI 학습 대화가 같은 테이블에 혼재하는지 DDL·실데이터로 확인한다.

| 제안 보완 엔티티 | 핵심 필드 | 관계·규칙 |
|---|---|---|
| `proposed_team_roles` | team_id, member_id, role, valid_period | 실제 계급과 분리된 프로젝트 역할 |
| `proposed_team_tasks` | team_id, mission_run_id, assignee, status, due_at | 협업 체크리스트 |
| `proposed_team_artifact_links` | team_id, artifact_id, contribution_policy | 공동 소유와 개인 기여 정책 |
| `proposed_contributions` | artifact_version_id, member_id, type, evidence | 기여를 자동 점수화하지 않고 근거 보존 |
| `proposed_team_files` | team_id, asset_id, visibility | 채팅 첨부와 공식 결과 자료 구분 |

### 4.7 AI 교관

| 제안 엔티티 | 핵심 필드 | 관계·규칙 |
|---|---|---|
| `proposed_ai_conversations` | id, user_id, context_type/id, retention_class | 프로젝트·미션 문맥과 보존 등급 |
| `proposed_ai_messages` | conversation_id, role, content_ref, created_at | 민감정보 필터·삭제 정책 적용 |
| `proposed_ai_runs` | message_id, model, prompt_version, latency, token_usage | 모델·프롬프트·사용량 추적 |
| `proposed_ai_context_items` | run_id, source_type/id, version | 어떤 학습 맥락을 전달했는지 기록 |
| `proposed_ai_citations` | run_id, source_id, chunk_ref, quote_ref | 출처와 자료 버전 연결 |
| `proposed_knowledge_sources` | id, asset_version_id, status, security_level | 검색 가능한 승인 지식 |
| `proposed_ai_feedback` | message_id, user_id, rating, reason | 도움 여부·문제 신고 분리 |
| `proposed_ai_reports` | message_id, report_type, status, resolution | 안전·정확성 운영 |

AI 대화 원문은 역량 평가나 지휘관 감시의 기본 데이터로 사용하지 않는다. 학습자가 명시적으로 결과물에 포함한 내용만 제출 근거가 될 수 있다.

### 4.8 역량·성장·포트폴리오

| 제안 엔티티 | 핵심 필드 | 관계·규칙 |
|---|---|---|
| `proposed_skills` | id, parent_id, code, name, definition | 스킬 택소노미와 버전 필요 |
| `proposed_skill_levels` | skill_id, level, descriptor | 수준별 관찰 가능한 행동 |
| `proposed_content_skill_mappings` | content_version_id, skill_id, expected_level | 획득 가능과 실제 획득을 구분 |
| `proposed_skill_evidence` | user_id, skill_id, source_type/id, assessed_level | 제출·평가·진단에 연결된 증거 |
| `proposed_skill_assertions` | evidence_id, assessor, decision, valid_until | 판정·만료·취소 이력 |
| `proposed_growth_events` | user_id, event_type, source_type/id, occurred_at | 여러 원천을 한 타임라인으로 투영 |
| `proposed_portfolios` | user_id, title, intro, visibility | 기본 비공개 |
| `proposed_portfolio_items` | portfolio_id, artifact_version_id, order, note | 특정 결과물 버전 고정 |
| `proposed_visibility_rules` | subject_type/id, audience_type/id, permission | 프로필·결과물 공개 범위 통합 |

### 4.9 추천·알림·보상·인증

| 제안 엔티티 | 핵심 필드 | 관계·규칙 |
|---|---|---|
| `proposed_roadmaps` / `proposed_roadmap_nodes` | 목표, 노드, 순서·분기 | 경로 정의와 사용자 진행 분리 |
| `proposed_recommendations` | user_id, content_id, reason_code, model/rule_version | 추천 이유와 생성 시점 보존 |
| `proposed_recommendation_events` | recommendation_id, action, occurred_at | 노출·클릭·숨김·시작 측정 |
| `proposed_notifications` | recipient, type, object, read_at, deep_link | 인앱 알림 원장 |
| `proposed_notification_preferences` | user_id, type, channel, enabled, quiet_hours | 필수 운영 알림 예외 정책 |
| `proposed_deliveries` | notification_id, channel, status, provider_ref | 발송과 읽음 분리 |
| `proposed_badge_definitions` / `proposed_badge_awards` | 조건 버전, 수여·취소 | 배지 조건 변경 이력 |
| `proposed_point_ledger` | user_id, amount, reason, source, occurred_at | 잔액 직접 수정 금지, 원장 합산 |
| `proposed_credentials` | user_id, type, source, issued/revoked/expires_at, verify_key | 외부 검증·취소 지원 |
| `proposed_streak_daily` | user_id, local_date, qualifying_event | 타임존·휴일·복구 정책 필요 |

### 4.10 운영·통계·시스템

| 제안 엔티티 | 핵심 필드 | 관계·규칙 |
|---|---|---|
| `proposed_metric_definitions` | code, formula_version, grain, owner | 화면마다 산식이 달라지는 문제 방지 |
| `proposed_aggregate_snapshots` | metric_id, dimensions, period, value, computed_at | 지휘관 대시보드 성능·재현성 |
| `proposed_report_runs` | definition_id, scope, requester, status, output_ref | 내보내기 감사와 만료 |
| `proposed_policy_versions` | policy_type, version, payload, effective_period | 수료·보존·공개·평가 정책 버전 |
| `proposed_audit_logs` | actor, action, resource, before/after_ref, occurred_at | append-only, 민감정보 최소화 |
| `proposed_access_logs` | actor, resource, purpose, scope, occurred_at | 민감 데이터 열람 감사 |
| `proposed_integrations` / `proposed_sync_runs` | provider, mapping_version, status | SSO·외부 시스템 동기화 |
| `proposed_jobs` / `proposed_job_runs` | job_type, dedupe_key, status, retry_count | 재처리와 중복 방지 |
| `proposed_incidents` | severity, impact, status, timeline | 장애 공지와 연결 |

## 5. 세계관과 DB의 관계

### 5.1 기존 학습 데이터로 계산 가능한 표현

| 표현 | 계산 원천 | 저장 권고 |
|---|---|---|
| 프로젝트 활성화 정도 | 완료 미션 / 필수 미션 | 별도 저장하지 않고 계산 또는 캐시 |
| 연결된 미션 수 | `mission_runs` 완료 수 | 계산 |
| 획득 역량 | 유효한 `skill_evidence/assertions` | 원천 증거 저장, 시각값 계산 |
| 연속 학습 | 현지 날짜별 유효 활동 | 일별 집계 저장 가능 |
| 동료평가 참여도 | 완료 배정 / 수락 배정 | 계산; 순위화 주의 |
| 성장 타임라인 | 학습·제출·평가·성취 이벤트 | 원천 이벤트 투영 또는 읽기 모델 |

### 5.2 별도 저장이 필요한 사용자 선택·상태

| 데이터 | 권장 위치 | 이유 |
|---|---|---|
| 프로필 이미지·아바타 선택 | profile/preferences | 사용자 선택 복원 |
| 세계관 온보딩 완료·버전 | onboarding_state | 반복 노출과 버전별 재안내 제어 |
| 대표 배지 | profile_featured_badge | 프로필 표시 선택 |
| 포트폴리오·성과 공개 설정 | visibility_rules | 개인정보와 결과물 보호 |
| 완료 연출 확인 여부 | user_ui_receipts | 중요한 안내의 중복 방지에만 제한 사용 |

### 5.3 저장하지 않아도 되는 표현

- 화면 배경의 입자 좌표, 파동, 빛의 세기
- 카드별 장식 패턴과 결정 배치
- 진행 시 선이 이어지는 애니메이션 프레임
- 완료 순간의 시각 효과
- 미션 노드의 순수 레이아웃 좌표(편집자가 의미 있게 배치하는 경우 제외)

## 6. 상태 모델 권고

| 대상 | 상태 필드 | 값 | 별도 필드 |
|---|---|---|---|
| 신청 | application_status | APPLIED, ACCEPTED, DENIED, CANCELED | reason, decided_by/at |
| 학습 실행 | learning_status | NOT_STARTED, READY, IN_PROGRESS, COMPLETED, EXPIRED | started_at, completed_at |
| 결과물 | artifact 상태 없음 또는 ACTIVE/ARCHIVED | 편집 루트만 관리 | 최신 버전은 쿼리/포인터 |
| 제출 | submission_status | SUBMITTED, WITHDRAWN, SUPERSEDED | submitted_at, superseded_by |
| 평가 작업 | review_status | REQUESTED, ASSIGNED, IN_REVIEW, COMPLETED, EXPIRED | due_at, reviewer |
| 판정 | decision | PASS, REVISION_REQUIRED, FAIL | score, rubric_version |
| 수정 요청 | revision_status | OPEN, RESUBMITTED, RESOLVED, EXPIRED | next_submission_id |

`EVALUATED`를 미션·제출·평가 상태 모두에서 혼용하지 않는다. 미션 완료는 정책에 따라 최신 제출의 판정과 필수 활동 완료 여부로 계산한다.

## 7. 무결성·보안·운영 요구사항

- 모든 교육·평가·정책 콘텐츠는 실행 시 사용한 버전을 고정한다.
- 파일은 DB blob보다 안전한 객체 저장소 참조, checksum, MIME, 용량, 악성검사 상태를 저장한다.
- 사용자·조직·역할·범위에는 유효기간과 변경 이력을 둔다.
- 통계는 원천 이벤트의 `dedupe_key`와 지표 산식 버전으로 재현 가능하게 한다.
- AI 입력·출력과 결과물은 보안 등급, 보존 기간, 접근 목적을 적용한다.
- 지휘관 통계는 최소 집단 크기 이하에서 개인 추론이 되지 않도록 숨김/병합한다.
- 포트폴리오는 기본 비공개이며 공개 전 민감정보 확인 절차를 둔다.
- 감사로그에는 비밀값·전체 결과물 본문을 복제하지 않고 참조와 변경 요약만 남긴다.

## 8. 물리 DDL 수령 후 검증 체크리스트

1. 모든 테이블·뷰·enum·trigger와 row count를 추출한다.
2. PK/FK, unique, nullability, cascade 규칙을 ERD로 검증한다.
3. `tb_team`, `tb_team_member`, `tb_ai_chat_history`의 실제 제약과 대화 분류 데이터를 확인한다.
4. PBL/VOD의 콘텐츠 정의, 운영 차수, 사용자 실행이 분리되어 있는지 확인한다.
5. 상태값이 코드·DB·화면에서 동일한 의미인지 데이터 프로파일링한다.
6. 결과물 버전과 제출·평가·재제출의 실제 샘플 흐름을 추적한다.
7. 회원별 스킬이 단순 매핑인지 평가 근거가 있는 취득 이력인지 구분한다.
8. 부대 계층과 지휘관 열람범위가 데이터 수준에서 강제되는지 확인한다.
9. AI 대화·출처·모델·프롬프트·보존·삭제 데이터를 확인한다.
10. 알림 발송, 인앱 읽음, 수신 설정이 분리되어 있는지 확인한다.
11. 인덱스·대용량 이벤트·집계 전략과 개인정보 삭제 영향을 검토한다.
12. 화면 인벤토리의 각 `관련 DB`를 실제 `table.column`으로 치환하고 지원 상태를 재집계한다.

## 9. 구축 우선순위

| 단계 | 범위 | 완료 기준 |
|---|---|---|
| P0-A | 물리 DDL 확보·데이터 사전 | 실제 인덱스·제약·상태·보존정책까지 문서화 |
| P0-B | 사용자·조직·권한 | 역할+범위 기반 접근 테스트 통과 |
| P0-C | 콘텐츠 버전·학습 실행 | PBL/VOD 한 차수의 시작–진도–완료 재현 |
| P0-D | 결과물·제출·평가 | 초안–제출–수정–재제출–판정 이력 무손실 |
| P1 | AI 출처·알림·역량 증거 | 답변 근거, 행동 알림, 수행 증거 기반 역량 표시 |
| P2 | 팀·동료평가·포트폴리오·지휘관 집계 | 개인정보·익명·공개정책 포함한 E2E 검증 |
| P3 | 추천·배지·포인트·리더보드 | 정책·편향·게임화 위험 검토 후 도입 |

## 10. 최종 데이터 권고

가장 먼저 해야 할 일은 새 테이블을 만드는 것이 아니라 **실제 스키마를 확보해 현재 모델을 검증하는 것**이다. 이후 첫 번째 구조 보완은 결과물, 결과물 버전, 제출, 평가 작업, 평가 결과, 수정 요청을 분리하는 것이다. 이 경계가 잡혀야 MILI AI의 핵심 가치인 `피드백을 통한 개선`과 `근거 기반 역량 축적`을 데이터로 신뢰성 있게 구현할 수 있다.
