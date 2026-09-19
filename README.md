# 📚 study-log

프론트엔드 학습 기록. **매일 조금씩, 꾸준히 — 커밋으로 남긴다.** 🌱

## 🎯 목표 <!-- 고정 -->
- **방향**: 주니어 프론트엔드 취업 → 탄탄한 미들 → 시니어 초입
- **원칙**: 매일 조금 + 간격 반복 + 배운 건 BookIn에 적용

## ▶️ 지금 여기 (다음 세션 시작점) <!-- ⚠️ 매 세션 끝에 갱신 · 새 대화는 여기부터 읽고 바로 이어감 -->
- **현재 페이즈**: **Phase 1 — 코어 3종(TS·SQL·Vue) 굳히기**
- **본격 시작**: 2026-09-22(월)
- **다음 세션**: 월 = **TS Day4**
- **각 토픽 다음 진도**:
  - **TS** → Day4: 조건부 타입 / `infer` / 매핑드 타입 심화 _(Day1~3 완료: narrowing·제네릭·keyof·discriminated union·유틸조합)_
  - **SQL** → window 심화: `LAG`/`LEAD` · 누적합 · `PARTITION BY` _(CTE·재귀 중급 도달선 통과)_
  - **Vue** → Day3: slots / 라이프사이클 / `provide`·`inject` (또는 Pinia 입문) _(ref·v-model·computed·watch·props·emit 완료)_
- **최근**: 09-19(토) 프로그래머스 JS/SQL 문제(루틴 외) · 09-20(일) 휴식/자습

## 🧭 학습 로드맵 (페이즈) <!-- 숙달 기반 진급 -->
| Phase | 토픽 | 목표 수준 | 다음으로 넘어갈 기준(게이트) |
| --- | --- | --- | --- |
| **1 (현재)** | **TS · SQL · Vue** | 탄탄한 주니어~미들 진입 | TS(제네릭·조건부·`infer`·유틸 콜드작성) / SQL(window·CTE·재귀·상관서브쿼리 = 프로그래머스 Lv2~3) / Vue(computed·watch·props·slots·Pinia로 컴포넌트 설계 자유) |
| **2** | 웹접근성 · 웹소켓 · React/Next | 주니어 심화~시니어 초입 | a11y(WCAG 기본 실무적용) / 웹소켓(실시간 미니기능 구현) / React·Next(RSC·라우팅·데이터패칭 심화) |
| **3** | ↩︎ TS·SQL·Vue 재순환 | 한 단계 레벨업 | (Phase 1 토픽을 상급 주제로 다시) |

> 코어 마스터(P1) → 심화 확장(P2) → 코어 레벨업(P3) 순환.

## 🗓️ 주간 루틴표 (Phase 1) <!-- 페이즈 바뀌면 토픽만 교체 -->
> 아침 ~90분 학습 / 오후~저녁 BookIn 프로젝트

| 요일 | 딥다이브 |
| --- | --- |
| 월 | **TS** |
| 화 | **SQL** |
| 수 | **Vue** |
| 목 | **TS** |
| 금 | **SQL** |
| 토 | **Vue** |
| 일 | 😴 휴식 / 자습(복습) |

- 같은 토픽은 **~3일 간격**(TS 월·목 / SQL 화·금 / Vue 수·토) → **간격 반복** 자동 적용.
- _Phase 2 예시: 월 웹접근성 · 화 웹소켓 · 수 React/Next · 목~토 반복 · 일 휴식 (게이트 통과 후 교체)_

## 🔬 학습 원칙 (과학 기반) <!-- 고정 -->
1. **인터리빙**: 매일 토픽을 바꿔 섞는다 (한 과목 몰아치기 X).
2. **간격 반복**: 같은 토픽 ~3일 간격 재방문 (요일표가 자동 처리).
3. **능동 회상**: 매 세션 **시작 5분**, 지난 회차 핵심을 **안 보고** 떠올린 뒤 시작.
4. **숙달 기반 진급**: Phase 게이트 통과해야 다음 Phase로.
5. **즉시 적용**: 배운 건 그 주에 BookIn에 반영 → 포폴 시그널.
6. **주말 정리**: 일요일 자습 때 복습 리스트 훑고 굳은 건 제거.

## 🎓 토픽 상태 <!-- 상태만 갱신 -->
| 토픽 | Phase | 상태 |
| --- | --- | --- |
| TypeScript | 1 | 🔥 Day3까지 |
| SQL(PostgreSQL) | 1 | 🔥 CTE 중급선 |
| Vue | 1 | 🔥 Day2까지 |
| 웹접근성 | 2 | 🌱 Day1 맛보기 |
| 웹소켓 | 2 | 📌 예정 |
| React/Next | 2 | 📌 예정(실무 병행) |
| _(GraphQL·테스트 심화 등)_ | 3+ | 💭 후보 |

## ✅ 진행 기록 <!-- 누적 (새 토픽은 ### 섹션 추가) -->
### TypeScript
- [x] 2026-09-09 — narrowing / 제네릭 / Omit·Pick·Partial / Record / map 콜백 / keyof 제약

### SQL
- [x] 2026-09-16 — CTE / CTE 체이닝 / RANK vs ROW_NUMBER / 재귀 CTE / anti-join 복습
- [x] 2026-09-16 — CTE 조립(체이닝 vs 병렬) · 다중 소스 집계 LEFT JOIN · RANK 동점 처리 · SQL 디버깅(CTE 한 겹씩 `select *`)

### 웹접근성
- [x] 2026-09-17 — 시맨틱 HTML / 접근성 트리(role·name·state) / div버튼 4종세트 / 아이콘버튼 aria-label / heading 시맨틱

### Vue
- [x] 2026-09-15 — ref / v-model / 이벤트 / v-for / todo앱
- [x] 2026-09-18 — computed·watch·v-if·props·emit (미니프로젝트 "책 담기") · defineProps/defineEmits TS · 함수prop vs emit

## 🔁 복습 리스트 <!-- 누적 (틀린 개념, 주말에 다시) -->
- [ ] `Element`(DOM) ≠ `ReactNode`(React 자식)
- [ ] `Record`는 키를 유니온으로
- [ ] `map` 콜백 = `(item: T) => U`
- [ ] `LEFT JOIN` + `WHERE 오른쪽테이블.컬럼` = 사실상 `INNER JOIN` (NULL 탈락)
- [ ] `RANK`(동점 건너뜀) vs `DENSE_RANK`(안 건너뜀) vs `ROW_NUMBER`(무조건 유일)
- [ ] window `order by`에 판별컬럼 추가 = 동점 **제거** / 동점 유지하며 표시만 정렬 = **바깥 `ORDER BY`**
- [ ] `*`는 SELECT(출력) 전용 — `GROUP BY`엔 컬럼 하나하나 명시
- [ ] div버튼 되살리기 = `role="button"`(≠tab) + `tabIndex={0}` + `aria-label` + `onKeyDown`(Enter/Space)
- [ ] Vue `:add`(프롭/v-bind) ≠ `@add`(이벤트/v-on) — 이름 겹치지 말 것
- [ ] Vue computed = 값 생성+캐싱 / watch = 부수효과(기본 lazy, 초기 실행은 `immediate:true`)
- [ ] Vue "props down, events up" — 자식은 부모 함수 모름, `emit`으로 신호만

## 📝 원칙 메모 <!-- 고정 -->
- 완벽한 시스템보다 오늘 한 문제
- 학습이 프로젝트를 잡아먹지 않게
- 틀린 건 부끄러운 게 아니라 복습 재료