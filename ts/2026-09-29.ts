import { useState } from "react";

// 1. (기초 · void) 배열을 받아 각 원소를 콘솔 출력만 하는 함수의 타입 시그니처를 작성 (반환 타입 명시).
export type ArrType = (arr: number[]) => void;

const printAll: ArrType = (arr) => {
  arr.forEach((x) => console.log(x));
};

// 2. (기초 · interface/type 판단) 아래를 interface로 쓸 수 있어요? 안 되면 왜인지 + 올바른 방법으로 작성.

// "결제수단은 card 또는 cash 또는 point 중 하나"
type PayMethod = "card" | "cash" | "point";
//답 : 특정값을 명시하기위해 interface로 하지않고 type으로한다. 이는 객체로 정의해도되지만 다른타입과 공요하지않는관계로 type으로 한다.

// 3. (기초 · 선언 병합) 아래 두 선언이 에러 없이 병합되는 건 interface? type? 그리고 병합 결과 Book은 어떤 필드를 갖게 돼요?

interface Book {
  title: string;
}
interface Book {
  author: string;
}
//답 : 위 Book 방식으로 선언가능하고 병합됩니다. 그럼 Book에 title:string과 author:string이 같은 객체내에 병합
// 위가 가능? type으로 바꾸면?
type BookType = { title: string; author: string };

// 4. (응용 · 이전+오늘) interface로 도형 두 개를 정의하고, 그걸 판별 유니온 type으로 묶어서 넓이 함수를 작성 (interface + union + narrowing 결합).

interface Circle {
  type: "circle";
  r: number;
}
interface Square {
  type: "square";
  size: number;
}
type Shape = Circle | Square;
const area = (s: Shape): number => {
  switch (s.type) {
    case "circle":
      return 3.14 * s.r ** 2;
    case "square":
      return s.size ** 2;
    default:
      const _ex: never = s;
      return _ex;
  }
};

// 5. (심화 · 판단력) 아래 네 상황에서 interface vs type 중 뭘 쓸지 고르고 한 줄 이유:

// (a) 외부 라이브러리의 Window 타입에 내 전역 속성 추가
//답 : 외부라이브러리인경우 interface를 사용하는건 정석, 대부분 순수객체형태이니 Interface로 타입선언하는게 적합
// (b) API 응답: 성공/실패 두 형태의 union
// 답 : 순수객체로 나타나지않는 형태이기때문에  type으로 선언하는게 정석 type ApiResult = true|false
// (c) 여러 컴포넌트가 재사용하는 User 객체 형태
// 답 : 재사용하는거면 여기저기서 호출해서 더해져서 사용할수있는거면 interface로 타입선언하는게 정석
// (d) keyof로 기존 타입에서 파생한 새 타입
// 답 : interface로 선언한 타입으로 keyof로 기존타입에서 새 타입 파생하면 어디서 뭐랑 합쳐질지 불안정하니까 type로 하는게 맞음

// 1. (기초 · 리터럴 union) 아래 느슨한 타입을 정밀하게 고치세요.
// 방향은 'up'|'down'|'left'|'right' 중 하나여야 함
export type Dir = "up" | "down" | "left" | "right";
const move = (dir: Dir) => {};

// 2. (기초 · readonly/optional) User를 설계하세요: id는 절대 안 바뀜, name은 바뀔 수 있음, nickname은 정말 없을 수도 있음.

interface User {
  readonly id: string;
  name: string;
  nickName?: string;
}

// 3. (중 · illegal states) ★ 아래 나쁜 설계를 판별 유니온으로 리팩터하세요 (불가능한 조합 차단).

// 폼 제출 상태 — 나쁜 설계
interface FormState {
  submitting: boolean;
  submitted: boolean;
  errorMessage?: string;
}
// → 판별 유니온 type으로 (idle / submitting / success / error)

type FormStateType =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success" }
  | { type: "error"; errorMessage: string };

//   4. (응용 · 이전+오늘) 문제 3의 상태를 받아, 상태별 메시지를 반환하는 함수를 narrowing + exhaustiveness(never) 로 작성.

const getMessage = (s: FormStateType): string => {
  switch (s.type) {
    case "idle":
      return "아무것도 하지않는상태";
    case "submitting":
      return "제출중...";
    case "success":
      return "제출 성공";
    case "error":
      return "오류 발생";
    default:
      const _ex: never = s;
      return _ex;
  }
};

// 5. (심화 · 판단력 · 실무) 게이트 때 봤던 BookIn의 이 상태를 타입 설계 관점에서 평가하세요:

// // ChangePassWord.tsx 의 실제 상태
// const [checkPrevPW, setCheckPrevPW] = useState<'idle' | 'success' | 'error'>('idle');
// 이게 잘 된 설계인가요? (①리터럴 union 관점) → 판단 + 이유
// 답 : 비교적 잘한 선택이지만 error 또는 success일때 어떤 메시지를 들고있지않아 조금 보완필요해보임
// 만약 error일 때 에러 메시지도 같이 들고 다녀야 한다면, 어떻게 바꿔야 할까요? (②illegal states 관점)

type CheckPrevPwType =
  | { type: "idle" }
  | { type: "success" }
  | { type: "error"; errorMessage: string };

const [checkPrevPW, setCheckPrevPW] = useState<CheckPrevPwType>({
  type: "idle",
});
