# 📚 study-log

프론트엔드 학습 기록. **매일 조금씩, 꾸준히 — 커밋으로 남긴다.** 🌱

## 🎯 목표 <!-- 고정 -->
- **방향**: 주니어 프론트엔드 취업 → 탄탄한 미들 → 시니어 초입
- **원칙**: 매일 조금 + 간격 반복 + 배운 건 BookIn에 적용

## ▶️ 지금 여기 (다음 세션 시작점) <!-- ⚠️ 매 세션 끝에 갱신 · 새 대화는 여기부터 읽고 바로 이어감 -->
- **현재 루프**: **메인 루프 — 코어 3종 `React/Next · TS · JS`** 3일 간격 순환
- **본격 시작**: 2026-09-22(월) ✅ 시작함
- **다음 세션**: TS=Block0 마무리(`void`·`interface vs type` 판단)→**Block1 타입설계** / JS=**Day2** / 코테=투포인터 남은 문제(숫자의 표현·보석 쇼핑)
- **각 코어 다음 진도**:
  - **React/Next** → Day2: `key`의 역할·리스트 재조정(reconciliation)·**커스텀훅** _(Day1 리렌더/메모이제이션 3형제 완료)_
  - **TS** → **커리큘럼 재설계 완료**(2026-09-23, [ts/CURRICULUM.md](ts/CURRICULUM.md)): 깊이 중심, 목표=**판단력**. **Block0 심화(unknown/never/판별유니온/assertNever) 완료** → 다음 Block0 마무리→Block1 타입설계
  - **JS** → **Day1(스코프·클로저·this) 완료** → Day2: 프로토타입·이벤트루프·비동기 예정
- **park(나중에)**: **Vue** = 작은 CRUD 프로젝트로 한 방에 중급 / **SQL** = 전환 턴에서
- **병렬 지원 트랙**: 매일 공고 확인 → 타당하면 지원 + 메모(회사·스택·결과). 준비도 무관, 사용자 직접 운영.
- **최근**: 09-23 대장정 — ①TS 커리큘럼 재설계(깊이/판단력) + Block0 심화(unknown·never·판별유니온·assertNever) ②JS Day1(스코프·클로저·this: 호출지점 vs 스코프) ③코테 투포인터 2문제 완주(팰린드롬·two-sum) + while 근육 5드릴. while 무한루프 원리 체득

## 🧭 학습 로드맵 <!-- 숙달 기반 진급 -->
| 단계 | 토픽 | 목표 수준 | 게이트(통과 기준) |
| --- | --- | --- | --- |
| **메인 루프 (현재)** | **React/Next · TS · JS** | 탄탄한 주니어 중급~상급 | React(리렌더·메모이제이션·커스텀훅·Context·RSC·Next 라우팅/데이터패칭 설명+구현) / TS(제네릭·조건부·`infer`·매핑드·유틸 콜드작성) / JS(클로저·this·프로토타입·이벤트루프·비동기 설명 + 프로그래머스 **Lv2~3 시간 내**) |
| **전환 턴** | SQL · Vue(프로젝트) · 코테 | 폭 넓히기 + 코어 consolidation | 코어가 쉬며 굳는 구간(확장 간격 반복). Vue는 CRUD 프로젝트로 중급, SQL은 window/상관서브쿼리 |
| **복귀** | ↩︎ 코어 상급 | 한 단계 레벨업 | 코어를 상급 주제로 재순환 |

> 코어 3일 간격 순환 → 게이트 통과 시 전환 턴(코어 휴식=간격 벌리기) → 코어 상급 복귀.

## 🗓️ 주간 루틴표 (메인 루프) <!-- 게이트 통과하면 전환 턴 표로 교체 -->
> 아침 ~90분 학습 / 오후~저녁 BookIn 프로젝트

| 요일 | 딥다이브 |
| --- | --- |
| 월 | **React/Next** |
| 화 | **TS** |
| 수 | **JS + 코테** |
| 목 | **React/Next** |
| 금 | **TS** |
| 토 | **JS + 코테** |
| 일 | 😮‍💨 휴식 / **면접·CS·포폴 로테이션** |

- 코어 3개를 하루씩 돌리면 각 토픽이 **정확히 3일 간격** 재방문 → 간격 반복 자동.
- **일요일 로테이션**: ① 면접 구술(BookIn 설명·기술문답) ② CS 상식(브라우저 렌더링·HTTP·이벤트루프) ③ 포폴·이력서 정비 ④ 복습 리스트 정리 — 매주 하나씩.

## 🧩 코테 패턴 커리큘럼 <!-- 랜덤 X, 패턴 하나 배우고 3~4문제 몰아 드릴 -->
해시맵 → 투포인터/슬라이딩윈도우 → 스택/큐 → 정렬·이분탐색 → BFS/DFS → 그리디 → DP 기초
> 진행: **해시맵** 워밍업 완료(신고결과·완주못한선수·두개뽑아더하기, 09-20) → 다음 투포인터

## 🔬 학습 원칙 (과학 기반) <!-- 고정 -->
1. **인터리빙**: 매일 토픽을 바꿔 섞는다 (한 과목 몰아치기 X).
2. **간격 반복(확장형)**: 배우는 중엔 ~3일 간격, 굳으면 전환 턴으로 간격을 벌린다.
3. **능동 회상**: 매 세션 **시작 5분**, 지난 회차 핵심을 **안 보고** 떠올린 뒤 시작.
4. **아웃풋 우선**: 개념 → 즉시 문제/미니구현으로 소화 (인풋만 X).
5. **실무=교재**: React 학습은 BookIn에서 나온 "왜?"를 주제로 (중복·누락 방지).
6. **지원은 병렬·상시**: 학습이 지원을 미루는 핑계가 되지 않게. 준비도 무관 상시 지원, 면접=무료 약점 진단 → 학습에 피드백.
7. **꾸준함 > 최고 강도**: 강도는 세션 안에서, 총량은 지속가능하게. 일요일은 진짜 쉼.

## 🎓 토픽 상태 <!-- 상태만 갱신 -->
| 토픽 | 트랙 | 상태 |
| --- | --- | --- |
| React/Next | 메인 루프 | 🔥 Day1 완료(리렌더·메모이제이션) |
| TypeScript | 메인 루프 | 🔄 커리큘럼 재설계(깊이 중심) · Block0 심화 완료 → [ts/CURRICULUM.md](ts/CURRICULUM.md) |
| JS + 코테 | 메인 루프 | 🔥 Day1 완료(스코프·클로저·this) · 코테 투포인터 진행 |
| SQL(PostgreSQL) | 전환 턴 | ⏸️ CTE 중급선 (park) |
| Vue | 전환 턴 | ⏸️ Day2까지 (park, 나중에 프로젝트로) |
| 웹접근성 | 확장 | 🌱 Day1 맛보기 |
| 웹소켓 | 확장 | 📌 예정 |
| _(GraphQL·테스트 심화 등)_ | 후보 | 💭 |

## ✅ 진행 기록 <!-- 누적 (새 토픽은 ### 섹션 추가) -->
### React / Next
- [x] 2026-09-22 — 렌더 2단계(Render Phase=함수 재호출·JSX 준비 / Commit Phase=diff 후 변경 DOM만 반영) · 리렌더≠DOM repaint · 리렌더 트리거 3가지(state·부모·context) · `React.memo`(props 얕은 비교로 스킵) · `useMemo`(값 캐싱) · `useCallback`(함수 참조 고정, `useMemo(()=>fn)`) · 실전 판단(BookListView: 아이템 20개·가벼움 → memo premature)

### TypeScript
- [x] 2026-09-09 — narrowing / 제네릭 / Omit·Pick·Partial / Record / map 콜백 / keyof 제약
- [x] 2026-09-23 — **커리큘럼 재설계**(깊이 중심, 목표=판단력, [ts/CURRICULUM.md]) · **Block0 심화**: any/unknown(경계·좁히기강제)·never(빈집합·exhaustiveness)·narrowing·**판별 유니온**(태그+switch)·**assertNever**(재사용 exhaustiveness 가드) · 문제 5개 완료

### SQL
- [x] 2026-09-16 — CTE / CTE 체이닝 / RANK vs ROW_NUMBER / 재귀 CTE / anti-join 복습
- [x] 2026-09-16 — CTE 조립(체이닝 vs 병렬) · 다중 소스 집계 LEFT JOIN · RANK 동점 처리 · SQL 디버깅(CTE 한 겹씩 `select *`)

### 웹접근성
- [x] 2026-09-17 — 시맨틱 HTML / 접근성 트리(role·name·state) / div버튼 4종세트 / 아이콘버튼 aria-label / heading 시맨틱

### Vue
- [x] 2026-09-15 — ref / v-model / 이벤트 / v-for / todo앱
- [x] 2026-09-18 — computed·watch·v-if·props·emit (미니프로젝트 "책 담기") · defineProps/defineEmits TS · 함수prop vs emit

### JS / 코테
- [x] 2026-09-20 — 해시맵 패턴 3문제 · Map/Set 숙지 · 배열 도구 지도(map/filter/reduce/forEach/find) · reduce 실전(카운팅/그룹핑) · Big-O 시간복잡도
- [x] 2026-09-23 — **JS Day1**: 스코프(렉시컬)·클로저(makeCounter)·**this(호출지점 vs 스코프, 화살표=렉시컬)** · **코테 투포인터**: 팰린드롬(양끝 동시)·two-sum(양끝 소거)·연속부분수열합(슬라이딩) · **while 근육 5드릴**(3박자: 초기화·조건·전진)

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
- [ ] JS: `arr.map()`(행동) ≠ `new Map()`(그릇) · `forEach`는 반환 없음(→새 배열은 map/filter)
- [ ] JS: 카운팅 관용구 `map.set(k,(map.get(k)||0)+1)` · reduce 3단계(초기값→acc업데이트→return acc)
- [ ] Big-O: 루프 중첩=차수, 해시(O(1))로 O(n²)→O(n) = 시간초과 해결 핵심
- [ ] React: 리렌더(함수 재호출) ≠ DOM repaint(반환 JSX가 이전과 다를 때만) — 함수 100번 재호출돼도 JSX 같으면 DOM 안 건드림
- [ ] React: "props가 연결됨" ≠ "props가 바뀜" — `React.memo`는 부모 리렌더가 아니라 **props 값 변화** 기준으로 스킵 판단
- [ ] React: `useCallback`은 함수 **참조 고정**(계산 절약 아님!) / `useMemo`는 **값 계산 결과 캐싱** — `useCallback(fn,d) ≡ useMemo(()=>fn,d)`
- [ ] React: 인라인 `()=>{}`는 매 렌더 새 객체(참조 다름) → `React.memo` 자식의 얕은 비교 깨뜨림 → `useCallback` 필요
- [ ] React: memo는 "리렌더 빈번 + 무겁거나 개수 많음"일 때만. 숫자 props는 값 비교(참조 무관)
- [ ] React: 함수는 리렌더 때 **재정의(생성)**되지 **재실행 아님** — 생성 비용은 함수 무게와 무관(≈0). 무거운 계산 캐싱은 `useMemo`(실행+결과저장), `useCallback`은 실행 안 함
- [ ] React: **단독 `useCallback`은 순손해** — 참조를 소비하는 상대(`React.memo` 자식 / `useEffect`·`useMemo` deps / 커스텀훅 반환함수)가 있을 때만 켠다. 습관적 래핑 = 안티패턴
- [ ] JS this: 일반함수=**호출지점(점 앞 누구냐)** 로 결정(`obj.hi()`→obj, `f()`→undefined) / 화살표=**정의된 곳의 바깥 this**(렉시컬, 객체리터럴은 스코프 아님). this는 스코프 체인 lookup 아님
- [ ] JS 클로저: 반환된 안쪽 함수가 바깥 변수를 "기억" → 바깥함수 끝나도 살아있음(makeCounter). 은닉·상태유지·useState 근원
- [ ] JS while 무한루프 방지 3박자: ①조건 변수 확인 ②모든 갈래에서 전진 or 탈출(return/break) ③언젠가 조건 false. for의 `i++`를 몸통에 직접 넣은 게 while
- [ ] TS unknown: any의 안전판(좁히기 전 사용 불가) → API응답·JSON.parse·`catch(e)` 경계에서 / never: 빈집합, exhaustiveness(`assertNever`)
- [ ] TS 판별 유니온: 공통 리터럴 태그 + switch로 갈래 좁힘 + default `never`로 누락 검사(상태 모델링 핵심)
- [ ] 투포인터: 슬라이딩(같은 방향, 창문 넓혔다 좁힘) vs 양끝(소거: 합 크면 큰쪽 버림 right--, 작으면 left++) / 팰린드롬=양끝 동시 이동
- [ ] JS: 배열에 값 담기 — `push`=끝에 추가(변경) / `=`=통째 교체. 기본값 있는 배열에 push하면 덧붙음 주의. return 값은 자동으로 안 찍힘(호출을 log해야)

## 📝 원칙 메모 <!-- 고정 -->
- 완벽한 시스템보다 오늘 한 문제
- 학습이 프로젝트를 잡아먹지 않게
- 틀린 건 부끄러운 게 아니라 복습 재료