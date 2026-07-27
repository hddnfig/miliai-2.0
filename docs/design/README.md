# MILI AI 화면 디자인 기반

이 디렉터리는 IA와 시각 컨셉 사이의 변경 가능한 계약을 관리한다.

## 현재 상태

- 화면 원장: `screen-registry.json`
- 후보 컨셉: `digital-camouflage`
- 후보 상태: `provisional`
- 최종 브랜드·디자인 승인: 미완료
- 독립 페이지 목표: `/screens/{SCREEN-ID}.html`
- 동적 상태 원칙: 화면 내부에서 처리하며 별도 HTML로 복제하지 않음

## 변경 계층

```text
IA
  → Screen Registry
  → Shell / Pattern
  → Semantic Token
  → Component
  → Screen
```

시각 컨셉이 바뀌면 `IA`, `Screen Registry`, 컴포넌트의 데이터 계약은 유지한다. 테마 토큰, 테마 전용 자산, 필요한 컴포넌트 외형만 교체한다.

## 실행 게이트

1. **Structure Gate**: 70개 화면, Shell, Pattern, 상태 경계가 모두 등록되어야 한다.
2. **Concept Gate**: 컨셉의 직접 관찰값과 추론값을 분리하고 토큰·자산에 매핑한다.
3. **Calibration Gate**: 원본 대응 화면과 고밀도·집중형·모바일 화면에서 컨셉을 검증한다.
4. **Rollout Gate**: 승인된 토큰과 컴포넌트로 전체 화면을 확장한다.
5. **Handoff Gate**: 독립 접근, 반응형, 접근성, 상태, 시각 회귀 검사를 통과한다.

## 컨셉 교체 규칙

- 컴포넌트는 원시 색상값 대신 시맨틱 토큰만 참조한다.
- 테마 전용 이미지 자산은 `assets/concepts/{concept-id}`에 격리한다.
- 화면에서 테마 자산 파일을 직접 참조하지 않는다. CSS 자산 토큰을 사용한다.
- 특정 화면 예외는 토큰이나 패턴으로 해결할 수 없는 경우에만 허용한다.
- 기존 컨셉은 삭제하지 않고 `retired`로 전환해 비교와 복구가 가능하게 한다.
