# 📚 study-log

프론트엔드 학습 기록. **매일 조금씩, 꾸준히 — 커밋으로 남긴다.** 🌱

## 🎯 목표 <!-- 고정 -->
- **방향**: 주니어 프론트엔드 취업 → 성장
- **원칙**: 매일 조금 + 주 1회 복습 + 배운 건 프로젝트에 적용

## 🔥 현재 집중 <!-- ⚠️ 이 블록만 주기적으로 교체 -->
**시즌: 2026-09 ~**
- **코어(매일)**: TypeScript · React/Next
- **로테이션(주 1~2)**: SQL(PostgreSQL) · Vue · 웹접근성 · 웹소켓

> 목표·관심사가 바뀌면 **이 블록만** 갈아끼운다. 아래 원칙·구조는 그대로.

## 🗓️ 루틴 원칙 <!-- 고정 (토픽 무관) -->
> 아침 ~90분 학습 / 오후~저녁 프로젝트

- **매일** = 코어 토픽 2개(문제풀이) + 로테이션 토픽 1개(학습)
- **토요일** = 주간 복습 (틀린 것 다시)
- **일요일** = 휴식
- 빈도 = ROI 순으로 배분 (약점·목표 직결 토픽 우선)

### 주간 루틴표 <!-- 로테이션 배치. 코어(TS·React/Next)는 매일 별도로 깔림 -->
> 🌱 **코어(매일 자습)**: TypeScript · React/Next — 아래 표는 그날의 **딥다이브(로테이션)** 배치

| 요일 | 딥다이브 | 비고 |
| --- | --- | --- |
| 월 | **SQL** | 지난 주 이어서 |
| 화 | **Vue** | 공식 튜토리얼 대조 |
| 수 | **SQL** | 심화(CTE·window·재귀) |
| 목 | **웹접근성** | MDN + BookIn 적용 |
| 금 | **Vue** | computed·watch·props |
| 토 | 🔁 주간 복습 | 틀린 것 다시 |
| 일 | 😴 휴식 | — |

> _웹소켓은 📌 예정 — 궤도 오르면 목/금 슬롯에 편입._

## 🎓 토픽 상태 <!-- 토픽 늘거나 졸업하면 여기만 갱신 -->
| 토픽 | 상태 | 방법 |
| --- | --- | --- |
| TypeScript | 🔥 진행중 | 실무형 문제(tsc/Playground) |
| SQL(PostgreSQL) | 🔥 진행중 | 프로그래머스 + Postgres 보충 |
| React/Next | 🔥 진행중 | 개념 문제 |
| Vue | 🔥 진행중 | 공식 튜토리얼 + 대조 실습 |
| 웹접근성 | 🔥 진행중 | MDN + BookIn 적용 |
| 웹소켓 | 📌 예정 | Supabase Realtime + 미니 기능 |
| _(미래: GraphQL, 테스트 심화 …)_ | 💭 후보 | |

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