# 🟦 TypeScript 커리큘럼 (SSOT)

> **최종 목표:** 기초 사용법만 아는 상태 → **실무에서 "이거 여기서 이렇게 써야지, 이게 더 안전한 타입이지"를 스스로 판단**하는 상태.
> 지식 암기가 아니라 **판단력(언제·어디서·왜)**. 각 토픽마다 "언제/어디서 쓰나 + BookIn 적용"을 반드시 다룬다.
> **속도가 아니라 깊이.** 전체 커브 2~6개월(또는 더). 한 토픽을 기본→심화까지 판 뒤 다음.

## 진행 방식 (토픽별 유닛)
- (능동 회상) → **미니강의(기본 사용법 → 심화, 충분히 이해될 때까지)** → **문제 5개**
  - 1~3 = 오늘 배운 기초 / 4 = 이전+오늘 응용(인터리빙) / 5 = 오늘 심화
- 한 블록 완전히 다진 뒤 다음 블록 진급(게이트). 큰 토픽은 여러 유닛 OK.

## 검증 근거 (시니어 표준)
- **Effective TypeScript (Vanderkam)** — 목표 1순위 앵커. Type Design + Type Inference 챕터가 목표 직결.
- **Total TypeScript (Matt Pocock)** — Type Transformations → Generics → Advanced Patterns. 파생·에러주도.
- 공식 Handbook = 레퍼런스 / type-challenges = 근육(선택).

---

## Block 0 · 기초 다지기 (빠르게, 게이트로 확인)
- 원시타입 / 추론 기본 / union·intersection / 리터럴 + widening
- 배열·튜플(readonly, 라벨드) / 객체·`?`·`readonly`·index signature
- interface vs type / 함수타입(파라미터·반환·rest·void)
- **`any` vs `unknown` vs `never` vs `void`** (특수 4형제)
- **narrowing·타입가드(typeof/instanceof/in/truthiness) + 판별 유니온** ← 기초의 꽃

## Block 1 · 타입 설계 ★목표 핵심 (Effective TS: Type Design)
- string 대신 **정밀 union/리터럴**로 모델링
- **잘못된 상태를 표현 불가능하게** (make illegal states unrepresentable)
- optional 남발 줄이기 / `readonly` 불변
- 판별 유니온으로 **상태 모델링**
- **branded/nominal types** (UserId ≠ string, 도메인 안전)
- `any` 격리 · `unknown` 우선

## Block 2 · 타입 파생·추론 ★pain 직격 (Effective TS: Inference / Total TS: Transformations)
- 추론에 맡길 때 vs 명시할 때
- `typeof`(값→타입) / `keyof` / **indexed access `T[K]` / `T[keyof T]`**
- **`as const`** + 배열/객체에서 union 파생
- **`satisfies`** (추론 유지 + 제약)
- `Parameters<>`·`ReturnType<>`·`Awaited<>` 로 함수에서 파생
- 유틸타입(Pick/Omit/Partial/Record)로 기존 타입 변형
- **실전 과제: BookIn의 손으로 쓴 파라미터 타입들을 파생으로 리팩터**

## Block 3 · 제네릭 (Total TS: Generics)
- 제네릭 함수/제약(`extends`)/기본값/추론 흐름
- 제네릭 인터페이스·클래스 / **제네릭 컴포넌트(React)** / 커링·추론 고급

## Block 4 · 타입 변환 도구 (고급, Total TS)
- 조건부 타입 + 분배(distributive) / `infer`
- 매핑드 타입(수식어 +/-, readonly, ?) + **`as` 키 리매핑**
- 템플릿 리터럴 타입(Uppercase/Capitalize)
- 유틸리티 타입 **직접 구현**(콜드 작성) ← 게이트

## Block 5 · 실무 안전장치
- **커스텀 타입 가드(type predicate) · assertion function**
- `.d.ts` / 선언 병합 / 모듈 augmentation / `@types`
- **tsconfig strict 옵션 정복**
- 타입 에러 읽기 (feedback_ts_error_reading_practice)

## Block 6 · 심화 (실무 필요할 때만, 선택)
- 재귀 조건부/`infer`(DeepPartial/DeepReadonly) / 가변 튜플(variadic)
- variance(공변·반공변) / branded 심화 / 타입-레벨 프로그래밍(교양)

## 횡단 (상시 병행)
- **React + TS**: props·이벤트 타입·제네릭 컴포넌트·hooks 타이핑 (FE 직결)

---

## 진행 상태 <!-- 매 유닛 갱신 -->
- **현재 블록:** Block 0 (기초 게이트 2026-09-23 완료 → 진급 보류)
- **게이트 결과:** narrowing ✅ / any·unknown 개념OK 판단갭 🟡 / never 실전용도 모름 🟡 / **판별 유니온 ❌** / interface·type 판단 얇음 🟡
- **완료(얕음, 재학습):** narrowing 기본·제네릭 기본·Pick/Omit/Record·keyof
- **2026-09-23 완료:** Block 0 심화 유닛 = unknown(경계에서·좁히기강제)·never(빈집합·exhaustiveness)·narrowing(early return/typeof)·**판별 유니온**(태그+switch)·**assertNever**(재사용 exhaustiveness 가드, 컴파일+런타임 이중방어). 문제 5개 전부 통과.
- **다음 유닛:** Block 0 마무리(`void`, `interface vs type` 판단 5분) → **Block 1 타입 설계** 진급
