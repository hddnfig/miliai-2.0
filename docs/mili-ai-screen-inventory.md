# MILI AI 전체 화면 인벤토리

> 문서 버전: 1.0
> 작성일: 2026-07-24
> 범위: 전체 화면, 핵심 화면 상세, 화면–데이터 매핑
> 주의: 사용자 제공 ERD 이미지 `DB 설계.png`를 확대 판독해 지원 상태를 판정했다. DDL이 아니므로 인덱스·check·cascade·실데이터 동작은 별도 검증이 필요하다.

## 1. 지원 상태 판정

- `현재 지원`: 제공 ERD에서 화면 핵심 데이터를 직접 확인했고, 추가 전용 엔티티 없이 기본 기능 구성이 가능한 경우.
- `부분 지원`: 관련 테이블은 있으나 화면의 핵심 상태·정책·관계 일부가 부족한 경우.
- `추가 설계 필요`: 핵심 엔티티 또는 정책의 존재 근거가 없음.
- 관련 DB의 `proposed_*`는 권장 논리 엔티티이며 실제 테이블명이 아니다.

집계: **총 111개 화면 — 현재 지원 45, 부분 지원 56, 추가 설계 필요 10**. 지원 판정은 UI 구현 완료 여부가 아니라 ERD 데이터 지원 수준이다.

## 2. 전체 화면 목록

| 화면 ID | 1Depth | 2Depth | 기능 화면명 | 최종 노출명 | 세계관 적용 레벨 | 주요 사용자 | 화면 목적 | 핵심 기능 | 관련 DB | 지원 상태 |
|---|---|---|---|---|---|---|---|---|---|---|
| COM-001 | 공통 | 검색 | 통합 검색 | 통합 검색 | L1 | 전체 | 유형을 넘어 필요한 정보 탐색 | 검색, 유형 탭, 필터, 최근 검색 | proposed_search_index, contents | 부분 지원 |
| COM-002 | 공통 | 도움 | 고객지원 홈 | 도움말 | L1 | 전체 | 정책·사용법 확인 | FAQ 검색, 문의 진입 | proposed_faq, proposed_inquiries | 부분 지원 |
| COM-003 | 공통 | 도움 | 문의 작성 | 문의하기 | L1 | 전체 | 문제와 요청 접수 | 유형 선택, 첨부, 제출 | proposed_inquiries, `tb_attach` | 추가 설계 필요 |
| COM-004 | 공통 | 오류 | 오류 화면 | 요청을 완료하지 못했습니다 | L1 | 전체 | 복구 경로 제공 | 재시도, 홈, 오류코드 | proposed_incidents | 추가 설계 필요 |
| COM-005 | 공통 | 권한 | 접근 제한 | 접근할 수 없습니다 | L1 | 전체 | 권한 부족 설명 | 범위 확인, 권한 요청 | `tb_menu_role`, proposed_access_requests | 부분 지원 |
| AUTH-001 | 인증 | 로그인 | 로그인 | 로그인 | L1 | 전체 | 안전한 사용자 인증 | SSO, 일반 로그인, 보안 안내 | `tb_member`, `tb_cp_sso`, `tb_oauth2_registered_client`, `tb_oauth2_authorization` | 현재 지원 |
| AUTH-002 | 인증 | 가입 | 회원가입 | 가입하기 | L1 | 학습자 | 계정 생성과 약관 동의 | 본인확인, 약관, 기본정보 | `tb_member`, proposed_consents | 현재 지원 |
| AUTH-003 | 인증 | 계정 | 계정 찾기 | 계정 찾기 | L1 | 전체 | 계정 식별 복구 | 아이디 찾기, 인증 | `tb_oauth2_authorization`, `tb_cp_sso`, proposed_verifications | 부분 지원 |
| AUTH-004 | 인증 | 계정 | 비밀번호 재설정 | 비밀번호 재설정 | L1 | 전체 | 인증정보 복구 | 본인확인, 새 비밀번호 | `tb_member.password_hash`, `tb_oauth2_authorization`, proposed_verifications | 부분 지원 |
| AUTH-005 | 인증 | 보안 | 추가 인증 | 본인 확인 | L1 | 전체 | 민감 행동 재인증 | OTP/SSO 확인, 실패 처리 | proposed_mfa_challenges, `tb_oauth2_authorization` | 부분 지원 |
| ONB-001 | 온보딩 | 소개 | 세계관 소개 | 가능성의 장에 오신 것을 환영합니다 | L3 | 신규 학습자 | 서비스 목적 이해 | 4단계 소개, 건너뛰기 정책 | proposed_onboarding_state | 추가 설계 필요 |
| ONB-002 | 온보딩 | 프로필 | 기본 설정 | 기본 정보 확인 | L1 | 신규 학습자 | 소속·직무 정보 확인 | 정보 확인, 변경 요청 | `tb_member`, `tb_member.mili_unit_no` | 현재 지원 |
| ONB-003 | 온보딩 | 관심 | 관심 분야 선택 | 관심 분야 선택 | L2 | 신규 학습자 | 개인화 입력 수집 | 분야 선택, 목표 입력 | `tb_onboarding_survey`, `tb_onboarding_question`, `tb_onboarding_answer` | 부분 지원 |
| ONB-004 | 온보딩 | 진단 | 초기 역량 진단 | 현재 역량 확인 | L2 | 신규 학습자 | 선수 수준 측정 | 문항, 저장, 중단 재개 | `tb_level_test`, `tb_level_test_answer` | 현재 지원 |
| ONB-005 | 온보딩 | 결과 | 진단 결과·추천 | 나의 첫 학습 경로 | L3 | 신규 학습자 | 결과 해석과 첫 선택 | 역량 요약, 추천 이유, 저장 | `tb_level_test`, `tb_recommend` | 현재 지원 |
| HOME-001 | 홈 | 학습자 | 학습자 대시보드 | 홈 | L2 | 학습자 | 가장 중요한 다음 행동 제시 | 이어하기, 할 일, 피드백, 추천 | `tb_pbl_enrollment`, `tb_vod_enrollment`, `tb_pbl_enrollment`, `tb_pbl_enroll_mission`, `tb_vod_enrollment`, `tb_vod_learn_data`, `tb_message_history` | 부분 지원 |
| HOME-002 | 홈 | 역할 | 역할 선택 홈 | 워크스페이스 선택 | L1 | 복수 역할 사용자 | 학습자·관리 역할 전환 | 역할 카드, 최근 작업 | `tb_member_role`, `tb_oauth2_authorization` | 부분 지원 |
| EXP-001 | 탐색 | 통합 | 통합 학습 목록 | 학습 탐색 | L1 | 학습자 | 프로젝트·VOD 통합 탐색 | 검색, 필터, 정렬, 추천 | `tb_pbl_project`, `tb_vod_course`, `tb_category`, `tb_recommend` | 부분 지원 |
| EXP-002 | 탐색 | 추천 | 추천 학습 | 나를 위한 학습 | L2 | 학습자 | 개인화 후보와 이유 제공 | 적합도, 추천 이유, 숨기기 | `tb_recommend`, `tb_onboarding_answer` | 부분 지원 |
| EXP-003 | 탐색 | 프로젝트 | 프로젝트 목록 | 프로젝트 | L1 | 학습자 | PBL 후보 비교 | 필터, 카드, 신청 상태 | `tb_pbl_project`, `tb_project_category`, `tb_category`, `tb_pbl_offering` | 현재 지원 |
| EXP-004 | 탐색 | VOD | VOD 과정 목록 | VOD 과정 | L1 | 학습자 | 지식 과정 탐색 | 필터, 진도, 찜 | `tb_vod_course`, `tb_vod_course_category`, `tb_vod_enrollment`, `tb_wishlist` | 현재 지원 |
| EXP-005 | 탐색 | 경로 | 학습 경로 목록 | 학습 경로 | L2 | 학습자 | 목표별 순서 탐색 | 경로 카드, 단계 수 | `tb_roadmap`, `tb_roadmap_item` | 현재 지원 |
| EXP-006 | 탐색 | 경로 | 학습 경로 상세 | 추천 학습 경로 | L2 | 학습자 | 선수·후속 학습 이해 | 노드, 조건, 진행률 | `tb_roadmap`, `tb_pbl_project.prerequisite_subject`, `tb_pbl_mission.prev_mission_no` | 현재 지원 |
| EXP-007 | 탐색 | 저장 | 찜한 학습 | 저장한 학습 | L1 | 학습자 | 관심 콘텐츠 재탐색 | 유형 탭, 찜 해제 | `tb_wishlist` | 현재 지원 |
| EXP-008 | 탐색 | 비교 | 학습 비교 | 학습 비교 | L1 | 학습자 | 시간·난이도·성과 비교 | 최대 3개 비교 | `tb_pbl_project`, `tb_vod_course`, `tb_project_skill`, `tb_mission_skill`, `tb_vod_item_skill` | 부분 지원 |
| VOD-001 | VOD 학습 | 상세 | 과정 상세 | VOD 과정 상세 | L1 | 학습자 | 수강 여부 판단 | 목표, 목차, 시간, 수료조건 | `tb_vod_course`, `tb_vod_course_offering`, `tb_vod_content`, `tb_vod_toc`, `tb_vod_item` | 현재 지원 |
| VOD-002 | VOD 학습 | 신청 | 수강 신청 | 수강 신청 | L1 | 학습자 | 신청·승인 처리 | 약관, 일정, 신청 | `tb_vod_course_offering`, `tb_vod_enrollment` | 현재 지원 |
| VOD-003 | VOD 학습 | 플레이어 | 영상 학습 | VOD 학습 | L1 | 학습자 | 영상 기반 지식 습득 | 재생, 목차, 진도, 자막 | `tb_vod_toc`, `tb_vod_item`, `tb_vod_learn_data_log` | 현재 지원 |
| VOD-004 | VOD 학습 | 활동 | 차시 활동 | 학습 활동 | L1 | 학습자 | 퀴즈·자료·실습 수행 | 문제, 제출, 자료 | `tb_vod_item`, `tb_pbl_problem`, `tb_vod_learn_data`, `tb_pbl_enroll_problem` | 현재 지원 |
| VOD-005 | VOD 학습 | 결과 | 과정 진도 | 과정 진행 현황 | L2 | 학습자 | 수료 조건과 남은 행동 확인 | 진도, 점수, 미완료 항목 | `tb_pbl_enrollment`, `tb_pbl_enroll_mission`, `tb_vod_enrollment`, `tb_vod_learn_data`, `tb_pbl_offering`, `tb_vod_course_offering` | 현재 지원 |
| VOD-006 | VOD 학습 | 완료 | 과정 수료 | 과정 수료 | L3 | 학습자 | 완료 확인과 다음 연결 | 수료증, 역량, 후속 추천 | `tb_cert_issue`, `tb_certificate_template`, proposed_skill_evidence | 현재 지원 |
| PJT-001 | 프로젝트 학습 | 상세 | 프로젝트 상세 | 프로젝트 상세 | L2 | 학습자 | 프로젝트 적합성 판단 | 목표, 결과물, 미션, 역량, 선수학습 | `tb_pbl_project`, `tb_pbl_mission`, `tb_project_skill`, `tb_mission_skill`, `tb_vod_item_skill` | 현재 지원 |
| PJT-002 | 프로젝트 학습 | 신청 | 프로젝트 신청 | 프로젝트 참여 신청 | L1 | 학습자 | 개인·팀 참여 확정 | 신청, 팀 방식, 일정 | `tb_pbl_offering`, `tb_pbl_enrollment`, `tb_team` | 현재 지원 |
| PJT-003 | 프로젝트 학습 | 시작 | 프로젝트 시작 안내 | 프로젝트 시작 | L3 | 학습자 | 수행 의미·조건·계획 확인 | 체크리스트, 약속, 시작 | `tb_pbl_enrollment`, proposed_consents | 부분 지원 |
| PJT-004 | 프로젝트 학습 | 대시보드 | 프로젝트 대시보드 | 프로젝트 여정 | L2 | 학습자 | 현재 미션과 전체 흐름 관리 | 진행률, 다음 미션, 피드백, 팀 | `tb_pbl_enrollment`, `tb_pbl_enroll_mission` | 현재 지원 |
| PJT-005 | 프로젝트 학습 | 자료 | 프로젝트 자료실 | 프로젝트 자료 | L1 | 학습자 | 안전한 수행 자료 접근 | 파일, 링크, 버전 | `tb_attach`, `tb_project_resource`, `tb_mission_resource`, `tb_problem_resource` | 현재 지원 |
| PJT-006 | 프로젝트 학습 | 팀 | 팀 홈 | 팀 공간 | L2 | 팀 학습자 | 공동 수행 조율 | 팀원, 공지, 대화, 일정 | `tb_team`, `tb_team_member`, `tb_ai_chat_history` | 부분 지원 |
| PJT-007 | 프로젝트 학습 | 팀 | 팀 역할·일정 | 역할과 일정 | L1 | 팀 학습자 | 역할·마감 합의 | 역할, 체크리스트, 일정 | `tb_team_member.member_role`, proposed_team_tasks | 부분 지원 |
| PJT-008 | 프로젝트 학습 | 완료 | 프로젝트 완료 | 프로젝트 완료 | L3 | 학습자 | 결과·성장·다음 행동 확인 | 결과 요약, 역량, 포트폴리오 | `tb_pbl_enrollment`, proposed_skill_evidence | 현재 지원 |
| MIS-001 | 미션 수행 | 상세 | 미션 개요 | 미션 안내 | L1 | 학습자 | 목표·조건 이해 | 가이드, 산출물, 평가 기준 | `tb_pbl_mission.learning_goal`, `.output`, `.eval_guide`; `tb_pbl_problem` | 현재 지원 |
| MIS-002 | 미션 수행 | 활동 | 단계별 활동 | 미션 수행 | L1 | 학습자 | 문제 해결 활동 실행 | 단계, 자료, 메모, 저장 | `tb_pbl_problem`, `tb_pbl_enroll_problem`, `tb_problem_resource` | 현재 지원 |
| MIS-003 | 미션 수행 | 문제 | 문제·퀴즈 | 지식 확인 | L1 | 학습자 | 이해 확인 | 응답, 채점, 해설 | `tb_skill_quiz`, `tb_vod_quiz`, `tb_pbl_problem`, `tb_vod_learn_data`, `tb_pbl_enroll_problem` | 현재 지원 |
| MIS-004 | 미션 수행 | 실습 | 코드·데이터 실습 | 실습 공간 | L1 | 학습자 | 코드·데이터 결과 생성 | 파일, 실행, 테스트 | proposed_workspaces, proposed_executions | 부분 지원 |
| MIS-005 | 미션 수행 | 기록 | 미션 활동 기록 | 수행 기록 | L2 | 학습자 | 과정과 근거 확인 | 타임라인, 메모, AI 이용 | `tb_vod_learn_data_log`, proposed_ai_usage | 부분 지원 |
| MIS-006 | 미션 수행 | 잠금 | 잠금 조건 | 아직 시작할 수 없습니다 | L2 | 학습자 | 해금 조건과 다음 행동 안내 | 조건, 선수학습 CTA | `tb_pbl_project.prerequisite_subject`, `tb_pbl_mission.prev_mission_no`, `tb_pbl_enrollment`, `tb_pbl_enroll_mission`, `tb_vod_enrollment`, `tb_vod_learn_data` | 현재 지원 |
| SUB-001 | 제출 및 결과물 | 편집 | 결과물 작성 | 프로젝트 결과물 | L1 | 학습자 | 다형식 결과 작성 | 텍스트, 파일, URL, Git, 자동저장 | `tb_pbl_problem.submission_ty`, `tb_pbl_enroll_problem.problem_answer`, `tb_attach`, proposed_artifact_versions | 부분 지원 |
| SUB-002 | 제출 및 결과물 | 검토 | 제출 전 검토 | 제출 전 확인 | L1 | 학습자 | 누락·보안·평가기준 확인 | 체크리스트, 미리보기 | `tb_pbl_problem.output`, `.execute_guide`, `.eval_guide`; proposed_validation_results | 부분 지원 |
| SUB-003 | 제출 및 결과물 | 제출 | 결과 제출 | 결과물 제출 | L1 | 학습자 | 평가 대상 버전 확정 | 확인, 제출, 철회 정책 | `tb_pbl_enroll_problem.problem_enroll_st`, `.problem_answer`; proposed_submissions, proposed_artifact_versions | 부분 지원 |
| SUB-004 | 제출 및 결과물 | 결과 | 제출 상태 | 제출 결과 | L1 | 학습자 | 평가 진행과 판정 확인 | 상태, 점수, 피드백 | `tb_pbl_enroll_problem`·`tb_pbl_enroll_mission`의 상태·`eval_grade`·`eval_feedback` | 현재 지원 |
| SUB-005 | 제출 및 결과물 | 버전 | 결과물 버전 비교 | 수정 전·후 비교 | L2 | 학습자·평가자 | 개선 과정 확인 | diff, 버전 선택 | proposed_artifact_versions, proposed_feedback_links | 부분 지원 |
| SUB-006 | 제출 및 결과물 | 재제출 | 수정·재제출 | 수정 후 재제출 | L1 | 학습자 | 피드백 반영과 새 버전 제출 | 할 일, 수정, 재제출 | proposed_revision_requests, proposed_submissions | 부분 지원 |
| PEER-001 | 동료평가 | 할 일 | 평가할 과제 목록 | 평가할 과제 | L1 | 학습자·평가자 | 배정 과제와 마감 관리 | 상태 탭, 마감, 시작 | proposed_review_assignments | 부분 지원 |
| PEER-002 | 동료평가 | 평가 | 동료평가 작성 | 동료평가 | L1 | 학습자·평가자 | 루브릭 기반 평가 | 항목 점수, 근거, 저장 | proposed_rubrics, `tb_peer_review_post`, `tb_peer_review_likes` | 부분 지원 |
| PEER-003 | 동료평가 | 검토 | 평가 제출 전 확인 | 평가 내용 확인 | L1 | 평가자 | 피드백 품질·익명 확인 | 미리보기, 금칙어, 제출 | `tb_peer_review_post`, `tb_peer_review_likes`, proposed_review_policy | 부분 지원 |
| PEER-004 | 동료평가 | 요청 | 요청한 평가 현황 | 요청한 평가 | L1 | 학습자 | 배정·완료 상태 확인 | 진행 단계, 취소 정책 | `tb_peer_review_request`, proposed_review_assignments | 부분 지원 |
| PEER-005 | 동료평가 | 피드백 | 받은 피드백 | 받은 피드백 | L2 | 학습자 | 의견 통합·개선 계획 | 출처 구분, 항목 묶음, 할 일 | `tb_peer_review_post`, `tb_pbl_enroll_mission.eval_feedback`, `tb_pbl_enroll_problem.eval_feedback`, proposed_revision_requests | 부분 지원 |
| PEER-006 | 동료평가 | 기록 | 완료한 평가 | 평가 참여 기록 | L2 | 평가자 | 과거 참여와 품질 확인 | 기간, 프로젝트, 도움됨 | `tb_peer_review_post`, `tb_peer_review_likes`, proposed_feedback_ratings | 부분 지원 |
| AI-001 | AI 교관 | 대화 | AI 교관 패널 | AI 교관 | L2 | 학습자 | 현재 학습 맥락에서 도움 | 질문, 힌트, 출처, 피드백 | `tb_ai_agent`, `tb_ai_chat_history`; 출처는 proposed_ai_citations | 부분 지원 |
| AI-002 | AI 교관 | 전체 | 대화 기록 | AI 교관 대화 기록 | L1 | 학습자 | 대화 재개·삭제 | 검색, 대화, 보존 안내 | `tb_ai_chat_history`, proposed_retention_events | 부분 지원 |
| AI-003 | AI 교관 | 출처 | 답변 출처 상세 | 답변 근거 | L1 | 학습자 | 근거 검증 | 인용, 자료 버전, 신고 | proposed_ai_citations, proposed_knowledge_sources | 부분 지원 |
| AI-004 | AI 교관 | 안전 | 답변 신고 | AI 답변 신고 | L1 | 학습자 | 부정확·부적절 답변 신고 | 유형, 설명, 제출 | proposed_ai_reports, `tb_ai_chat_history.message_data` | 부분 지원 |
| GROW-001 | 역량 및 성장 | 역량 | 역량 현황 | 나의 역량 | L2 | 학습자 | 현재 역량·근거 해석 | 수준, 근거, 갭 | `tb_skill`, proposed_skill_evidence | 부분 지원 |
| GROW-002 | 역량 및 성장 | 상세 | 역량 상세 | 역량 상세 | L2 | 학습자 | 획득 근거와 다음 학습 확인 | 증거, 피드백, 추천 | proposed_skill_evidence, `tb_recommend` | 부분 지원 |
| GROW-003 | 역량 및 성장 | 기록 | 성장 타임라인 | 성장 기록 | L2 | 학습자 | 중요한 변화 회고 | 이벤트, 필터, 상세 | proposed_growth_events | 부분 지원 |
| GROW-004 | 역량 및 성장 | 진단 | 역량 진단 목록 | 역량 진단 | L1 | 학습자 | 진단 응시·비교 | 진단 카드, 이력 | `tb_skill`, `tb_skill_quiz`, `tb_level_test`, `tb_level_test_answer` | 현재 지원 |
| GROW-005 | 역량 및 성장 | 포트폴리오 | 포트폴리오 목록 | 포트폴리오 | L2 | 학습자 | 대표 성과 구성 | 결과 카드, 순서, 공개 | proposed_portfolios, proposed_portfolio_items | 추가 설계 필요 |
| GROW-006 | 역량 및 성장 | 포트폴리오 | 포트폴리오 공개 보기 | 공개 포트폴리오 | L3 | 허용된 사용자 | 성과 공유·검증 | 소개, 결과, 역량, 링크 | proposed_portfolios, proposed_visibility_rules | 추가 설계 필요 |
| REW-001 | 성취 및 보상 | 허브 | 성취 목록 | 나의 성취 | L2 | 학습자 | 배지·수료·연속학습 통합 확인 | 요약, 필터 | proposed_badges, `tb_cert_issue`, `tb_certificate_template` | 부분 지원 |
| REW-002 | 성취 및 보상 | 배지 | 배지 상세 | 성취 배지 | L3 | 학습자 | 달성 조건과 근거 확인 | 조건, 발급일, 대표 설정 | proposed_badge_definitions, proposed_badge_awards | 추가 설계 필요 |
| REW-003 | 성취 및 보상 | 인증 | 수료증 상세 | 수료증 | L1 | 학습자 | 공식 증명 확인 | 다운로드, 검증, 공유 | `tb_cert_issue`, `tb_certificate_template` | 현재 지원 |
| REW-004 | 성취 및 보상 | 포인트 | 포인트 내역 | 학습 포인트 | L1 | 학습자 | 적립·사용 근거 확인 | 잔액, 거래, 정책 | `tb_credit_transaction`, `tb_user_wallet`, proposed_reward_policy | 현재 지원 |
| CMT-001 | 커뮤니티 | 홈 | 커뮤니티 홈 | 커뮤니티 | L1 | 학습자 | 질문·자료·공지 탐색 | 유형 탭, 검색 | `tb_post`, `tb_board` | 현재 지원 |
| CMT-002 | 커뮤니티 | Q&A | 질문 목록 | 학습 Q&A | L1 | 학습자 | 학습 질문 탐색 | 검색, 해결 상태, 태그 | `tb_post`, `tb_post.parent_post_no` | 현재 지원 |
| CMT-003 | 커뮤니티 | Q&A | 질문 상세·작성 | 질문과 답변 | L1 | 학습자·멘토 | 질문·답변·채택 | 작성, 댓글, 신고 | `tb_post`, `tb_post.parent_post_no`, proposed_moderation | 현재 지원 |
| CMT-004 | 커뮤니티 | 자료 | 자료·뉴스 | 학습 자료 | L1 | 전체 | 공용 정보 제공 | 목록, 첨부, 저장 | `tb_post`, `tb_attach` | 현재 지원 |
| CMT-005 | 커뮤니티 | 활동 | 내 커뮤니티 활동 | 내 활동 | L1 | 학습자 | 작성·댓글·저장 이력 | 유형 탭, 삭제 | `tb_post`, `tb_post.parent_post_no`, `tb_wishlist` | 현재 지원 |
| MY-001 | MY | 프로필 | 프로필 | 프로필 | L1 | 전체 | 표시 정보 관리 | 사진, 소개, 관심 | `tb_member` | 현재 지원 |
| MY-002 | MY | 소속 | 소속·직무 정보 | 소속 정보 | L1 | 전체 | 조직 정보 확인·정정 | 조회, 변경 요청 | `tb_member.mili_unit_no`, proposed_change_requests | 현재 지원 |
| MY-003 | MY | 목표 | 관심·학습 목표 | 학습 목표 | L1 | 학습자 | 개인화 기준 관리 | 분야, 주간 목표 | `tb_onboarding_survey`, `tb_onboarding_question`, `tb_onboarding_answer` | 부분 지원 |
| MY-004 | MY | 공개 | 공개 범위 설정 | 공개 설정 | L1 | 학습자 | 프로필·성과 노출 제어 | 대상별 토글, 미리보기 | proposed_visibility_rules | 추가 설계 필요 |
| MY-005 | MY | 알림 | 알림 설정 | 알림 설정 | L1 | 전체 | 채널·유형별 수신 제어 | 토글, 채널, 조용한 시간 | proposed_notification_preferences | 부분 지원 |
| MY-006 | MY | 보안 | 개인정보·보안 | 개인정보 및 보안 | L1 | 전체 | 계정·동의·세션 관리 | 비밀번호, 세션, 동의, 탈퇴 | `tb_oauth2_authorization`, proposed_consents | 부분 지원 |
| NTF-001 | 알림 | 센터 | 알림 목록 | 알림 | L1 | 전체 | 행동 필요 정보 확인 | 유형, 읽음, 필터 | `tb_message_history` | 부분 지원 |
| NTF-002 | 알림 | 상세 | 알림 상세 | 알림 상세 | L1 | 전체 | 관련 대상과 행동 이해 | 본문, 딥링크, 보관 | `tb_message_history`, `tb_message_history` | 부분 지원 |
| CMD-001 | 지휘관 | 홈 | 교육 대시보드 | 교육 현황 | L1 | 지휘관 | 부대 교육 상태 요약 | 범위·기간, KPI, 위험 신호 | `tb_mili_unit`, proposed_aggregates | 부분 지원 |
| CMD-002 | 지휘관 | 학습자 | 학습자·그룹 목록 | 학습자·그룹 | L1 | 지휘관 | 교육 대상 탐색 | 검색, 그룹, 상태 | `tb_member.mili_unit_no`, proposed_cohorts | 부분 지원 |
| CMD-003 | 지휘관 | 학습자 | 학습자 교육 상세 | 학습 현황 상세 | L1 | 지휘관 | 허용 범위의 지원 근거 확인 | 진도, 완료, 지원 이력 | `tb_pbl_enrollment`, `tb_pbl_enroll_mission`, `tb_vod_enrollment`, `tb_vod_learn_data`, proposed_interventions | 부분 지원 |
| CMD-004 | 지휘관 | 계획 | 교육 계획 목록 | 교육 계획 | L1 | 지휘관 | 계획과 실행 상태 관리 | 생성, 배정, 기간 | proposed_learning_plans, proposed_assignments | 부분 지원 |
| CMD-005 | 지휘관 | 성과 | 부대 역량 분석 | 역량·성과 | L2 | 지휘관 | 조직 역량 분포·격차 이해 | 분포, 추이, 최소집단 | proposed_skill_aggregates | 부분 지원 |
| CMD-006 | 지휘관 | 지원 | 지원 필요 학습자 | 학습 지원 | L1 | 지휘관 | 중단 위험에 교육적 개입 | 사유, 연락, 조치 | proposed_risk_signals, proposed_interventions | 부분 지원 |
| CMD-007 | 지휘관 | 보고 | 보고서 생성·이력 | 보고서 | L1 | 지휘관 | 정기 보고와 내보내기 | 템플릿, 예약, 다운로드 | proposed_report_runs, proposed_exports | 추가 설계 필요 |
| CMS-001 | 콘텐츠 제작 | 홈 | 제작 작업대 | 작업 홈 | L1 | 콘텐츠 설계자 | 다음 제작·검수 작업 확인 | 초안, 반려, 이슈 | `tb_pbl_project.make_st`, `tb_pbl_project.use_yn`, `tb_vod_course.use_yn`; version/review는 제안 | 부분 지원 |
| CMS-002 | 콘텐츠 제작 | VOD | VOD 과정 목록·편집 | VOD 과정 관리 | L1 | 콘텐츠 설계자 | 과정 생애주기 관리 | 목록, 복제, 상태 | `tb_vod_course`, proposed_content_versions | 현재 지원 |
| CMS-003 | 콘텐츠 제작 | VOD | 차시 편집 | 차시 편집 | L1 | 콘텐츠 설계자 | 영상·활동·자료 구성 | 목차, 자산, 조건 | `tb_vod_toc`, `tb_vod_item`, `tb_vod_item`, `tb_pbl_problem`, `tb_attach` | 현재 지원 |
| CMS-004 | 콘텐츠 제작 | 프로젝트 | 프로젝트 목록·편집 | 프로젝트 관리 | L1 | 콘텐츠 설계자 | PBL 생애주기 관리 | 개요, 대상, 일정 | `tb_pbl_project`, proposed_content_versions | 현재 지원 |
| CMS-005 | 콘텐츠 제작 | 프로젝트 | 미션 설계 | 미션 설계 | L1 | 콘텐츠 설계자 | 단계·결과물·조건 정의 | 활동, 제출 규격, 선수조건 | `tb_pbl_mission`, `tb_pbl_problem`, `tb_mission_resource`, `tb_mission_skill` | 현재 지원 |
| CMS-006 | 콘텐츠 제작 | 평가 | 루브릭 편집 | 평가 기준 | L1 | 콘텐츠 설계자 | 평가 항목·수준 정의 | 항목, 가중치, 예시 | proposed_rubrics, proposed_rubric_items | 부분 지원 |
| CMS-007 | 콘텐츠 제작 | 경로 | 학습 경로 편집 | 학습 경로 설계 | L2 | 콘텐츠 설계자 | 선수·후속 관계 구성 | 노드, 조건, 검증 | `tb_roadmap`, `tb_pbl_project.prerequisite_subject`, `tb_pbl_mission.prev_mission_no` | 현재 지원 |
| CMS-008 | 콘텐츠 제작 | 검수 | 검수·게시 | 검수 및 게시 | L1 | 설계자·검수자 | 품질 승인과 배포 | 비교, 의견, 승인, 예약 | `tb_pbl_project.make_st`, `.use_yn`; `tb_vod_course.use_yn`; proposed_approvals, proposed_publications | 부분 지원 |
| OPS-001 | 운영자 | 홈 | 운영 대시보드 | 운영 현황 | L1 | 운영자 | 서비스·업무 상태 요약 | 지표, 이슈, 작업 | proposed_aggregates, proposed_incidents | 부분 지원 |
| OPS-002 | 운영자 | 사용자 | 사용자 관리 | 사용자 관리 | L1 | 운영자 | 계정 생애주기 운영 | 검색, 상태, 잠금 | `tb_member`, proposed_account_events | 현재 지원 |
| OPS-003 | 운영자 | 조직 | 조직 관리 | 조직·그룹 관리 | L1 | 운영자 | 부대 계층·교육 그룹 운영 | 트리, 구성원, 유효기간 | `tb_mili_unit`, `tb_member.mili_unit_no`; 계층·유효기간은 제안 | 부분 지원 |
| OPS-004 | 운영자 | 권한 | 역할·권한 관리 | 역할 및 권한 | L1 | 운영자 | 최소권한·범위 관리 | 역할, 권한, 범위, 이력 | `tb_role`, `tb_member_role`, `tb_menu_role`; 데이터 범위는 제안 | 부분 지원 |
| OPS-005 | 운영자 | 교육 | 교육 운영 | 교육 운영 | L1 | 운영자 | 모집·신청·평가·인증 운영 | 일괄처리, 배정, 발급 | `tb_pbl_offering`, `tb_vod_course_offering`, `tb_pbl_enrollment`, `tb_vod_enrollment`, `tb_cert_issue`, `tb_certificate_template` | 현재 지원 |
| OPS-006 | 운영자 | 소통 | 공지·알림 관리 | 공지 및 알림 | L1 | 운영자 | 대상별 메시지 운영 | 작성, 예약, 발송 이력 | `tb_board`, `tb_post`, `tb_message_history` | 현재 지원 |
| OPS-007 | 운영자 | 정책 | 정책 관리 | 운영 정책 | L1 | 운영자 | 수료·점수·보존 기준 버전 관리 | 초안, 승인, 적용 | proposed_policy_versions | 부분 지원 |
| SYS-001 | 시스템 관리 | 연동 | 외부 연동 관리 | 연동 관리 | L1 | 시스템 관리자 | SSO·LMS·메시지 연동 운영 | 상태, 키 참조, 재시도 | proposed_integrations, proposed_sync_runs | 부분 지원 |
| SYS-002 | 시스템 관리 | 작업 | 배치·작업 관리 | 작업 관리 | L1 | 시스템 관리자 | 비동기 작업 관찰·재처리 | 큐, 실패, 재실행 | proposed_jobs, proposed_job_runs | 부분 지원 |
| SYS-003 | 시스템 관리 | 로그 | 감사로그 | 감사 로그 | L1 | 보안·운영자 | 접근·변경 책임 추적 | 검색, 상세, 내보내기 | `tb_log_admin_access`, `tb_log_change_history` | 현재 지원 |
| SYS-004 | 시스템 관리 | 설정 | 기능 설정 | 기능 설정 | L1 | 시스템 관리자 | 기능 플래그·환경별 설정 | 플래그, 승인, 이력 | proposed_feature_flags, proposed_config_versions | 추가 설계 필요 |
| SYS-005 | 시스템 관리 | 장애 | 장애·상태 관리 | 서비스 상태 | L1 | 시스템 관리자 | 장애 기록과 공지 연계 | 사건, 영향, 타임라인 | proposed_incidents, proposed_status_updates | 추가 설계 필요 |

## 3. 핵심 화면 상세 정의

표의 문구는 대표안이며, 최종 카피 대안은 `mili-ai-worldbuilding.md`를 따른다.

| 화면 | 기능적 목적 | 세계관 의미·레벨 | 주요 영역·UI | 그래픽 모티프 | 주요 문구 / CTA | 상태별 메시지 | 빈 상태 | 완료 메시지 | 모바일 / PC | 추상성 방지 장치 |
|---|---|---|---|---|---|---|---|---|---|---|
| 로그인 | 인증·보안 안내 | 첫 연결, L1 | 로고, 인증수단, 보안·접근성 | 잔잔한 선과 광점 | 안전하게 학습을 이어가세요 / 로그인 | 인증 실패: 입력·재시도 안내 | 해당 없음 | 로그인했습니다 | 모바일 단일 열 / PC 설명 패널 | 실제 인증수단을 첫 화면에 명시 |
| 신규 온보딩 | 개인화 기준 수집 | 첫 탐색 경로 형성, L3 | 4단계 스테퍼, 관심·목표·진단 | 흐릿한 지형이 선명해짐 | 나에게 맞는 탐색 경로를 그려 보세요 / 시작하기 | 저장, 건너뛰기, 중단 재개 | 선택 전 예시 제공 | 첫 경로가 준비됐습니다 | 모바일 한 질문 / PC 요약 병행 | 단계 수·필수 여부·변경 가능성 표시 |
| 학습자 홈 | 다음 행동 우선 제시 | 현재 흐름과 연결, L2 | 이어하기, 할 일, 피드백, 추천, 현황 | 진행 선·활성 노드 | 오늘 연결할 지식이 내일의 해법이 됩니다 / 이어서 학습 | 마감·피드백·잠금·오류 | 첫 학습을 찾아보세요 | 오늘의 학습을 마쳤습니다 | 모바일 1열 우선순위 / PC 2열 요약 | 카드마다 이유·기한·상태 표시 |
| 통합 학습 목록 | PBL·VOD 탐색 | 가능성 영역 탐색, L1 | 검색, 유형 탭, 필터, 카드 | 저대비 지형 레이어 | 필요한 학습을 찾아보세요 / 상세 보기 | 모집·수강·잠금·완료 | 조건을 바꿔 다시 찾아보세요 | 해당 없음 | 모바일 필터 드로어 / PC 좌측 필터 | 유형·시간·난이도·추천 이유 텍스트화 |
| 프로젝트 상세 | 참여 판단 | 하나의 미완성 영역 해석, L2 | 목표, 결과물, 미션, 루브릭, 역량, 선수학습 | 영역 윤곽·노드 | 이 문제를 어떤 결과로 바꿀까요? / 참여하기 | 신청·잠금·진행·마감 | 미션 정보 준비 중 | 참여 준비가 완료됐습니다 | 모바일 요약+고정 CTA / PC 전체 로드맵 | 결과물 예시와 완료 조건을 상단에 제공 |
| 프로젝트 시작 | 조건·의미·계획 확인 | 영역 첫 활성화, L3 | 체크리스트, 일정, 팀, 보안 | 첫 선이 켜지는 연출 | 조건을 해석하고 실행 가능한 결과를 만드세요 / 프로젝트 시작 | 조건 미충족·팀 대기 | 해당 없음 | 첫 미션이 열렸습니다 | 모바일 짧은 확인 / PC 계획 상세 | 예상 시간·마감·제출 형식 명시 |
| 프로젝트 대시보드 | 전체 수행 관리 | 연결이 완성되어 가는 여정, L2 | 진행률, 다음 미션, 할 일, 팀, 피드백 | 연결 경로·선명해지는 면 | 지금 할 일부터 흐름을 이어가세요 / 미션 이어하기 | 잠김·진행·제출·수정·완료 | 아직 시작한 미션이 없습니다 | 모든 미션을 완료했습니다 | 모바일 다음 행동 우선 / PC 전체 상태 병렬 | 퍼센트+완료 수+구체적 다음 행동 |
| 미션 수행 | 단계 활동 실행 | 문제의 한 조각 해석, L1 | 가이드, 활동, 자료, 메모, 결과 | 단일 연결점·결정 조각 | 가장 작은 조건부터 확인하세요 / 저장하고 계속 | 자동저장·오프라인·잠금·검증 오류 | 제공 자료가 없습니다 | 미션 결과를 제출할 수 있습니다 | 모바일 읽기·메모 / PC 실습·분할뷰 | 목표·산출물·평가기준 고정 표시 |
| AI 교관 | 맥락형 질의·힌트 | 근거와 다음 방향을 비추는 안내자, L2 | 대화, 추천 질문, 출처, 신고 | 따뜻한 커서·파동 | 막힌 지점을 함께 해석해 볼까요? / 질문하기 | 생성 중·출처 없음·제한·오류 | 대화를 시작해 보세요 | 답변이 학습 기록에 연결됐습니다 | 모바일 바텀시트 / PC 사이드 패널 | AI 표시, 출처, 불확실성, 사용자 책임 안내 |
| 결과물 제출 | 평가 버전 확정 | 현재 해석을 흔적으로 남김, L1 | 편집기, 첨부, 자동저장, 체크리스트, 미리보기 | 조각이 한 면으로 정렬 | 제출 전 결과와 공개 범위를 확인하세요 / 제출 | 초안·업로드·검증·마감·철회 | 아직 작성한 결과가 없습니다 | 결과물이 안전하게 제출됐습니다 | 모바일 초안·확인 / PC 제작·버전 관리 | 파일 형식·용량·마감·되돌림 정책 표시 |
| 동료평가 | 루브릭 기반 상호 평가 | 다른 관점 연결, L1 | 제출물, 루브릭, 근거 의견, 익명 안내 | 두 흐름의 교차점 | 근거 있는 피드백으로 결과를 더 선명하게 해 주세요 / 평가 제출 | 임시저장·기한·이해충돌·완료 | 평가할 과제가 없습니다 | 평가가 전달되었습니다 | 모바일 항목 순차 / PC 제출물·루브릭 분할 | 평가 기준·예시·익명 정책 상시 표시 |
| 프로젝트 완료 | 완료 조건·성과 확인 | 영역 활성화와 흔적 축적, L3 | 결과 요약, 개선 전후, 역량, 포트폴리오 | 안정적 빛·완성 면 | 하나의 영역이 더 선명해졌습니다 / 결과 보기 | 통과·조건부·수정 필요 | 해당 없음 | 결과와 개선 기록이 역량 근거로 남았습니다 | 모바일 핵심 성취 / PC 증거 상세 | 완료 근거·점수·발급 상태를 수치로 제공 |
| 나의 역량 | 능력 수준과 증거 해석 | 연결된 역량 지도, L2 | 분야, 수준, 근거, 갭, 추천 | 노드망·층별 강조 | 수행의 흔적이 역량으로 이어집니다 / 근거 보기 | 갱신·검토·만료·미확정 | 아직 확인된 역량이 없습니다 | 새 역량이 반영됐습니다 | 모바일 리스트 / PC 지도+상세 | 차트에 이름·수준·근거 수 병기 |
| 성장 기록 | 변화 사건 회고 | 시간에 따라 쌓인 흔적, L2 | 타임라인, 필터, 이벤트 상세 | 이어지는 선·파동 | 지금까지의 변화가 한 흐름으로 이어집니다 / 기록 보기 | 로딩·필터·비공개 | 아직 성장 기록이 없습니다 | 새 성장 기록이 추가됐습니다 | 모바일 세로 타임라인 / PC 기간 비교 | 날짜·행동·증거 링크 제공 |
| 성취 및 배지 | 조건 기반 성취 확인 | 노력의 문양, L3 | 배지, 수료증, 연속학습, 조건 | 결정 문양·미세 광택 | 이어 온 학습이 하나의 표식이 됐습니다 / 성취 보기 | 잠김·획득·취소·만료 | 아직 획득한 성취가 없습니다 | 새 성취 배지를 획득했습니다 | 모바일 카드 / PC 갤러리+필터 | 장식 아래 조건·발급일·근거 표시 |
| 포트폴리오 | 대표 결과 구성·공개 | 남긴 흔적의 아카이브, L2 | 소개, 결과 카드, 역량, 공개설정 | 레이어 아카이브 | 해결한 문제와 개선의 과정을 보여 주세요 / 결과 추가 | 비공개·검토·링크 만료 | 대표 결과물을 추가해 보세요 | 포트폴리오를 업데이트했습니다 | 모바일 조회·순서 / PC 편집·미리보기 | 공개 대상과 민감정보 점검을 명확히 표시 |
| 지휘관 대시보드 | 조직 교육 지원 판단 | 공동 성장 흐름 관측, L1 | 범위, KPI, 추이, 지원 신호, 드릴다운 | 집계된 연결망·저대비 층 | 교육 참여와 지원이 필요한 지점을 확인하세요 / 상세 보기 | 데이터 지연·최소집단·권한 | 선택 범위에 데이터가 없습니다 | 보고서를 생성했습니다 | 모바일 요약·알림 / PC 비교·분석 | 집계 기준·갱신시각·최소집단·권한 범위 표시 |

## 4. 핵심 화면–DB 데이터 매핑

ERD에서 판독한 데이터는 실제 `table.column`으로 적고, 추가 제안은 `proposed_*`로 구분한다. DDL 수령 후 최종 검증한다.

| 화면 | 기본 데이터 | 사용자별 데이터 | 세계관 표현 데이터 | 저장 판단 |
|---|---|---|---|---|
| 학습자 홈 | 콘텐츠 제목·유형·마감·공지 | 최근 위치, 할 일, 미확인 피드백, 추천 | 활성 카드, 이어진 선, 오늘의 흔적 | 대부분 진도·알림에서 계산. 배경은 저장 안 함 |
| 통합 학습 목록 | 콘텐츠, 난이도, 시간, 역량, 모집 | 신청·진도·찜 | 탐색 영역의 활성도 | 개인 상태는 저장, 활성도는 계산 |
| 프로젝트 상세 | 목표, 결과물 규격, 미션, 루브릭, 선수학습 | 참여, 진행률, 현재 미션, 팀, 평가 | 영역 상태·완료 연출 | 진행 데이터로 계산. 별도 세계 테이블 불필요 |
| 프로젝트 대시보드 | 미션 순서·조건·기한 | 미션 상태, 제출, 피드백, 팀 할 일 | 연결된 노드 수·활성 정도 | 미션 실행에서 계산 |
| 미션 수행 | 가이드, 활동, 자료, 제출 규격 | 초안, 응답, 메모, AI 대화 | 현재 조각·연결 연출 | 초안·응답 저장, 연출은 저장 안 함 |
| 결과물 제출 | 허용 유형, 용량, 루브릭, 마감 | 결과물 버전, 제출 상태, 검증 결과 | 흔적 생성 연출 | 결과·버전·제출 저장, 연출은 저장 안 함 |
| 동료평가 | 루브릭, 익명·마감 정책 | 배정, 평가 초안·결과 | 관점 연결 수·파동 | 평가 데이터에서 계산 |
| AI 교관 | 프롬프트 버전, 지식 출처, 정책 | 대화, 메시지, 인용, 피드백 | 안내 파동·상태 | 대화·출처는 정책에 따라 저장, 그래픽은 미저장 |
| 나의 역량 | 역량 정의·수준 기준 | 증거, 판정, 취득·만료 | 역량 지도 연결 | 증거 저장, 지도 좌표는 가능하면 프론트 계산 |
| 성장 기록 | 이벤트 유형 | 학습·제출·평가·성취 이벤트 | 변화의 흔적 | 원천 이벤트에서 계산하거나 통합 이벤트 저장 |
| 포트폴리오 | 템플릿·공개 정책 | 선택 결과물, 소개, 순서, 공개범위 | 아카이브 레이어 | 선택·순서·공개범위 저장, 배경 미저장 |
| 지휘관 대시보드 | 조직·콘텐츠·지표 정의 | 권한 범위 | 조직 활성 흐름 | 집계 계산/스냅샷, 그래픽 미저장 |

## 5. 반응형·접근성 공통 기준

- 모바일은 핵심 행동 한 개를 상단에 두고, 복잡한 표는 카드/요약 후 상세로 전환한다.
- PC는 미션·결과물·평가에서 2분할 작업 공간을 제공하되 200% 확대에서도 내용 손실이 없어야 한다.
- 모든 상태는 색 외 텍스트·아이콘·수치로 구분한다.
- 세계관 애니메이션은 정보 전달을 대체하지 않으며 모션 축소 환경에서 제거한다.
- 차트는 데이터 테이블 또는 요약 문장을 함께 제공한다.
- 지휘관 집계는 최소 집단 크기, 갱신 시각, 산식, 열람 범위를 표시한다.
