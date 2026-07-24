# 04. ERD–화면 추적표와 데이터 공백

## 1. 도메인별 ERD 해석

표의 엔티티명은 제공된 ERD 이미지에서 판독한 이름이다. 실제 DDL과 철자·컬럼은 구현 전에 반드시 대조한다.

| 도메인 | 핵심 엔티티 | 화면에서 가능한 기능 |
|---|---|---|
| 회원·조직 | `tb_member`, `tb_mil_unit`, `tb_mil_rank` | 로그인 사용자, 프로필, 소속 부대/계급, 회원 상태 |
| 역할·메뉴 | `tb_role`, `tb_member_role`, `tb_menu`, `tb_menu_role` | 역할별 메뉴 노출, 운영자 권한 |
| 온보딩 | `tb_onboarding_survey`, `tb_onboarding_question`, `tb_onboarding_answer` | 최초 질문, 답변 저장, 추천 초기값 |
| 역량 | `tb_skill`, `tb_skill_quiz`, `tb_level_test`, `tb_level_test_answer`, `tb_recommend` | 역량진단, 레벨, 스킬별 추천 |
| 로드맵 | `tb_roadmap`, `tb_roadmap_item` | 학습 목표별 VOD/PBL 단계 구성 |
| PBL 콘텐츠 | `tb_pbl_project`, `tb_project_category`, `tb_category`, `tb_project_skill`, `tb_project_resource` | 프로젝트 목록/상세, 분류, 난이도, 스킬, 자료 |
| PBL 구조 | `tb_pbl_mission`, `tb_mission_skill`, `tb_mission_resource`, `tb_pbl_problem`, `tb_problem_resource` | 미션/문제/자료/평가 규칙 |
| PBL 운영 | `tb_pbl_offering`, `tb_pbl_enrollment`, `tb_pbl_enroll_mission`, `tb_pbl_enroll_problem` | 차수, 신청, 진도, 답변, 평가 |
| 팀·AI | `tb_team`, `tb_team_member`, `tb_agent`, `tb_ai_chat_history` | 팀 구성, 리더, 팀원 상태, AI 교관, 대화 기록 |
| 동료평가 | `tb_peer_review_request`, `tb_peer_review_post`, `tb_peer_review_likes` | 평가 요청, 평가 결과/글, 좋아요 |
| VOD 콘텐츠 | `tb_vod_course_category`, `tb_vod_course`, `tb_vod_content`, `tb_content_provider`, `tb_csp` | 과정/분류/콘텐츠/제공처 |
| VOD 구조 | `tb_vod_toc`, `tb_vod_toc_item`, `tb_vod_item`, `tb_vod_video`, `tb_vod_quiz`, `tb_vod_coding`, `tb_vod_data` | 목차, 동영상, 퀴즈, 코딩, 자료 |
| VOD 운영·학습 | `tb_vod_course_offering`, `tb_vod_enrollment`, `tb_vod_learn_data`, `tb_vod_learn_data_log`, `tb_vod_learning_note` | 차수, 수강, 진도 이벤트, 노트 |
| 설문·수료 | `tb_survey`, `tb_survey_question`, `tb_survey_answer`, `tb_cert_template`, `tb_cert_issue` | 만족도 설문, 수료증 발급 |
| 관심 | `tb_wishlist` | VOD/PBL 관심 등록 |
| 게시판 | `tb_board`, `tb_board_post`, `tb_board_attach`, `tb_board_like`, `tb_mento_post` | 공지/Q&A/FAQ/뉴스, 첨부, 좋아요, 멘토 글 |
| 크레딧 | `tb_user_wallet`, `tb_credit_transaction`, `tb_redemption_request` | 잔액, 적립/사용 내역, 상환 요청 |
| 공통 콘텐츠 | `tb_page`, `tb_attach`, `tb_code_group`, `tb_code` | 정적 페이지, 공통 첨부, 코드성 옵션 |
| 메시지 | `tb_message_template`, `tb_message_history` | 알림 템플릿, SMS/KakaoTalk/Email 발송 이력 |
| 보안·로그 | `tb_admin_allow_ip`, `tb_log_login`, `tb_log_page_view`, `tb_log_change_history`, `tb_log_admin_access`, `tb_log_role_history`, `tb_log_user_download`, `tb_user_info_history` | 접근 허용, 로그인/조회/변경/다운로드 감사 |
| OAuth2 | `tb_oauth2_registered_client`, `tb_oauth2_authorization`, `tb_oauth2_authorization_consent` | 인증 클라이언트/토큰/동의 |

## 2. 학습자 화면별 데이터 연결

| 화면 | 읽기 데이터 | 쓰기 데이터 | 비고 |
|---|---|---|---|
| HOME-01 | VOD/PBL 수강, 진도, 평가 요청, 게시판, 추천 | 알림 읽음(현재 엔티티 불명) | 홈 집계 API 필요 |
| SRCH-01 | 프로젝트, 과정, 게시글, 스킬 | 최근 검색(엔티티 없음) | 통합 검색 인덱스 필요 |
| EXP-01 | 프로젝트, 과정, 카테고리, 스킬, 관심 | `tb_wishlist` | PBL/VOD 공통 카드 ViewModel 권장 |
| VOD-02 | 과정, 차수, 목차, 제공처, 수료기준 | 수강 신청, 관심 | 신청 가능 여부 계산 필요 |
| VOD-04 | 목차/아이템/영상/자료, 수강 진도 | 학습 이벤트, 노트, AI 대화 | 재생 이벤트 빈도 정책 필요 |
| VOD-05 | 퀴즈/문항/선택지 | 학습 이벤트 또는 답안 | ERD상 개별 VOD 답안 저장 구조 확인 필요 |
| VOD-06 | 코딩 과제/샘플/정답·피드백 | 실행/제출 결과 | 실행 샌드박스는 ERD 외 인프라 |
| VOD-07 | 설문/문항 | 설문 답변 | 익명/수정 가능 여부 필요 |
| VOD-08 | 수강, 진도, 평가, 수료기준 | 수료증 발급 | 발급 중/실패 상태 필요 |
| PBL-02 | 프로젝트, 카테고리, 스킬, 미션, 자료, 차수 | 참여 신청, 관심 | 팀 방식 필드 위치 확인 |
| PBL-04 | 팀, 팀원, 차수, 회원 | 팀/팀원 생성·상태 변경 | 초대 토큰/코드는 ERD에서 불명확 |
| PBL-05 | 차수, 수강, 팀, 미션/문제 진도, 평가 | 활동 상태 | 활동 피드는 이벤트 집계 또는 별도 모델 필요 |
| PBL-06 | 미션, 스킬, 자료, 문제 | 미션 상태 | 허용/금지·AI 질문 가능 속성 존재 |
| PBL-07 | 문제, 자료, 수행 답변/평가 | 답변, 진도, 평가 | 자동평가/AI평가 실패 상태 정의 필요 |
| PBL-08 | 미션/문제 결과, 팀 | 최종 제출/상태 | 팀원별 기여 확인 데이터는 별도 필요 가능 |
| PBL-09/10 | 평가 요청, 팀/회원, 평가 글 | 평가 저장/제출 | 익명·수정·공개 정책 필요 |
| PBL-11 | 미션/문제 평가, 동료평가, 스킬 | 회고(엔티티 불명) | 결과 집계 ViewModel 필요 |
| COM-01~04 | 게시판/게시글/첨부/좋아요 | 글, 첨부, 좋아요 | 댓글/답변 구조 확인 필요 |
| GROW-01/02 | 학습·평가·스킬·크레딧 집계 | 없음 | 기간별 집계 API 필요 |
| GROW-03 | 레벨 테스트, 스킬 퀴즈 | 테스트 답안 | 세션/재응시 정책 필요 |
| GROW-04 | 로드맵/아이템, 과정/프로젝트 | 없음 또는 목표 선택 | 개인 로드맵 선택 저장 여부 불명 |
| GROW-05 | 수료증 발급/템플릿 | 발급 요청 | 외부 검증 URL 정책 필요 |
| MY-01 | 회원/부대/계급 | 회원 정보 | 변경 승인 항목 구분 필요 |
| MY-02 | 관심, 과정/프로젝트 | 관심 해제 | 삭제 대신 상태/실삭제 확인 |
| MY-03 | 게시글, 평가, AI 대화, 노트 | 삭제/숨김 | 보존 정책 필요 |
| MY-04 | 지갑/거래/상환 | 상환 요청 | 금전성·승인·취소 정책 필요 |

## 3. 운영자 화면별 데이터 연결

| 화면 | 주 엔티티 | CRUD 범위 | 확인할 정책 |
|---|---|---|---|
| ADM-PBL-01/02 | PBL 프로젝트, 카테고리, 스킬, 자료, 미션, 문제 | 전체 | 게시 전 검수 상태/버전 |
| ADM-PBL-03/04 | PBL 차수, 수강, 팀, 수행 결과 | 생성·운영·상태 | 강제 상태 변경 감사/복구 |
| ADM-PBL-05 | AI agent, chat history | agent 설정·연결 | API key 마스킹/암호화 |
| ADM-VOD-01/02 | VOD 과정, 콘텐츠, 카테고리, 목차, 아이템 | 전체 | 과정/차수 복제 기준 |
| ADM-VOD-03 | video, quiz, coding, data | 전체 | 파일 처리/변환/검수 |
| ADM-VOD-04 | 차수, 수강, 학습 데이터, 설문, 수료증 | 운영·상태 | 수동 수료/취소 권한 |
| ADM-USER-01/02 | 회원, 역할, 조직, 학습, 크레딧, 로그 | 조회·상태·권한 | 개인정보 마스킹/다운로드 사유 |
| ADM-ORG-01 | 부대, 계급 | 전체 | 참조 중 항목 삭제 제한 |
| ADM-COM-01 | 게시판, 글, 첨부, 좋아요, 멘토글 | 전체 | 숨김/삭제/신고/보존 |
| ADM-GROW-01 | 스킬, 퀴즈, 레벨 테스트, 추천 | 전체 | 배점/레벨 변경 영향 |
| ADM-SYS-01 | 역할, 회원 역할, 메뉴, 메뉴 역할 | 전체 | 자기 권한 회수 방지 |
| ADM-SYS-02 | 페이지, 로드맵, 메시지 템플릿, 첨부 | 전체 | 게시 예약/버전/미리보기 |
| ADM-SYS-03 | 접근 IP, 각종 로그 | 조회·IP 관리·내보내기 | 보존 기간, 다운로드 승인 |

## 4. 상태 코드의 UI 문구

ERD 메모를 기준으로 한 예상 매핑이다. 실제 enum과 API 응답은 백엔드 명세로 확정한다.

### 4.1 공통 콘텐츠 상태

| 예상 코드 | 사용자 UI | 운영자 UI |
|---|---|---|
| `ACTIVE` | 노출/참여 가능 | 게시됨 |
| `INACTIVE` | 비노출 또는 접근 종료 | 비활성 |
| `TODO` | 준비 중 | 작성 전 |
| `DRAFT` | 노출 안 함 | 임시저장 |
| `SUBMITTED` | 검토 중 | 검수 요청 |
| `DENIED` | 비노출 | 반려 |
| `ACCEPTED` | 노출/사용 가능 | 승인 |

### 4.2 수강 상태

| 예상 코드 | UI 문구 | 대표 액션 |
|---|---|---|
| `APPLIED` | 신청 완료/승인 대기 | 신청 취소 |
| `ACCEPTED` | 참여 확정 | 학습 준비 |
| `CANCELED` | 취소 | 재신청 가능 여부 안내 |
| `PREPARING` | 시작 전 | 일정 확인 |
| `READY` | 학습 가능 | 시작 |
| `LEARNING` | 학습 중 | 이어하기 |
| `FINISHED` | 완료 | 결과/수료증 |
| `DENIED` | 신청 반려 | 사유 확인 |

### 4.3 미션·팀원 상태

| 영역 | 예상 코드 | UI 문구 |
|---|---|---|
| 미션 | `STANDBY` | 대기 |
| 미션 | `DOING` | 진행 중 |
| 미션 | `DONE` | 제출 완료 |
| 미션 | `EVALUATED` | 평가 완료 |
| 팀원 | `ACTIVE` | 참여 중 |
| 팀원 | `WITHDRAWN` | 탈퇴 |
| 팀원 | `BANNED` | 참여 제한 |

코드값을 UI에 그대로 노출하지 않는다. 배지 색상만으로 상태를 구분하지 않고 문구와 아이콘을 함께 쓴다.

## 5. 화면 설계 전에 보완이 필요한 데이터 공백

### Blocker — P0 구현 전에 필요

| Gap ID | 공백 | 영향 화면 | 권장 조치 |
|---|---|---|---|
| G-01 | 인앱 알림과 읽음/삭제 상태 엔티티가 명확하지 않음 | HOME-01, NOTICE-01 | `notification` 또는 사용자별 메시지 read 상태 정의 |
| G-02 | VOD 퀴즈의 사용자별 답안/시도 구조가 명확하지 않음 | VOD-05, 완료 판정 | 답안, 시도, 점수, 제출시각 모델 확인 |
| G-03 | PBL 팀 초대/참여 방식과 토큰 구조가 불명확 | PBL-04 | 자동배정/코드/초대 중 MVP 정책 확정 |
| G-04 | 최종 제출 잠금·취소·재제출 규칙이 없음 | PBL-08, VOD-05/06 | 상태 전이와 권한 정의 |
| G-05 | 동료평가 익명/공개/수정 규칙이 없음 | PBL-09~11 | 평가 정책과 결과 ViewModel 정의 |

### Important — P1 전에 필요

| Gap ID | 공백 | 영향 화면 | 권장 조치 |
|---|---|---|---|
| G-06 | 게시글 댓글/Q&A 답변/신고 모델이 불명확 | COM-03 | 게시글 subtype인지 별도 엔티티인지 확인 |
| G-07 | 개인별 스킬 점수 산정·이력 저장 방식이 불명확 | GROW-01/02 | 계산식, 스냅샷, 근거 API 정의 |
| G-08 | 통합 검색/최근 검색/검색 추천 모델이 없음 | SRCH-01 | 검색 인덱스와 최근 검색 저장 정책 |
| G-09 | PBL 활동 피드/팀 기여도 모델이 없음 | PBL-05/11 | 감사 로그 재사용 또는 activity 모델 |
| G-10 | 지휘관의 과정 추천/배정과 조치 이력이 없음 | CMD-03~06 | assignment/support action 모델 |
| G-11 | 개인 로드맵 선택·진도 저장 구조가 불명확 | GROW-04 | 회원–로드맵 관계 정의 |
| G-12 | 수료증 공개 검증 키/URL 구조가 불명확 | GROW-05 | public verification token 정의 |

### Policy — P2 전에 필요

| Gap ID | 공백 | 영향 화면 | 권장 조치 |
|---|---|---|---|
| G-13 | 크레딧 적립률과 상환 조건 | MY-04 | 운영/법무 정책 확정 |
| G-14 | 콘텐츠 검수 버전·승인 이력 | 관리자 편집 | revision/review 모델 검토 |
| G-15 | 메시지 예약/재발송/사용자 수신 설정 | 알림·메시지 운영 | 발송 상태와 opt-out 정의 |
| G-16 | 로그 보존 기간·다운로드 승인 | ADM-SYS-03 | 보안 정책 확정 |

## 6. 프론트엔드용 최소 ViewModel

백엔드 테이블을 화면에 직접 맞추지 않고 다음 단위의 응답 모델을 권장한다.

```ts
type LearningCard = {
  id: string;
  type: "VOD" | "PBL";
  title: string;
  thumbnailUrl?: string;
  category: string;
  level: string;
  durationLabel: string;
  status: "OPEN" | "UPCOMING" | "LEARNING" | "COMPLETED" | "CLOSED";
  progress?: number;
  nextAction?: { label: string; href: string };
  skills: Array<{ id: string; name: string }>;
  isWishlisted: boolean;
  recommendationReason?: string;
};

type LearningResume = {
  enrollmentId: string;
  content: LearningCard;
  currentStep: { id: string; title: string; href: string };
  progress: number;
  dueAt?: string;
  pendingAction?: "QUIZ" | "MISSION" | "PEER_REVIEW" | "SURVEY";
};

type ProjectWorkspace = {
  project: { id: string; title: string; offeringLabel: string };
  team?: { id: string; name: string; role: "LEADER" | "MEMBER"; members: TeamMember[] };
  enrollmentStatus: string;
  progress: number;
  missions: MissionStep[];
  currentMissionId?: string;
  dueAt?: string;
  canSubmit: boolean;
};

type GrowthSummary = {
  period: { from: string; to: string };
  learningMinutes: number;
  completedCount: number;
  credits: number;
  skills: Array<{
    id: string;
    name: string;
    level: number;
    delta: number;
    evidenceCount: number;
  }>;
  recommendations: LearningCard[];
};
```

## 7. 추적성 체크리스트

화면/API 설계 리뷰 시 다음을 확인한다.

- [ ] 화면의 상태 배지가 ERD/API 상태와 1:1로 매핑되는가?
- [ ] `등록/수정 사용자·일시`는 운영자 상세에서 확인 가능한가?
- [ ] 개인정보·평가·AI 대화·다운로드에 권한과 감사 로그가 있는가?
- [ ] 콘텐츠 삭제가 기존 수강·진도·수료증을 깨뜨리지 않는가?
- [ ] VOD/PBL 카드가 공통 ViewModel로 표시 가능한가?
- [ ] 목록 필터 값이 카테고리/스킬/코드 테이블과 연결되는가?
- [ ] 제출·평가·수료의 서버 판정을 프론트가 임의 계산하지 않는가?
- [ ] 미확정 정책이 UI 문구로 사실처럼 표현되지 않았는가?

