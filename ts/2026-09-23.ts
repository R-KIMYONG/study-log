// 1. (기초 · unknown) x: unknown을 받아, 문자열일 때만 길이를 반환하고 아니면 0을 반환하는 함수의 body를 작성. (좁히기 필수)

const len = (x: unknown): number => {
  if (typeof x !== "string") return 0;

  return x.length;
};

//2. (기초 · never/exhaustiveness) 아래 유니온을 switch로 다 처리하고, default에 never로 누락 방지 장치를 넣으세요.
type Dir = "up" | "down" | "left" | "right";
const move = (d: Dir): string => {
  switch (d) {
    case "up":
      return "up";
    case "down":
      return "down";
    case "left":
      return "left";
    case "right":
      return "right";

    default:
      const _const: never = d;
      return _const;
  }
};
// 질문 : never로 뭐를 누락방지한다는거에요? Dir중의 유니온을 빠짐없이 하라는건가? 그리고 Dir이외의 어떤 유니온이 들어왔을때 어떤형태로 방어되는가? 이런거를 모르겠음 머리속에 되게 추상적으로 남아있어요 모호해요
// 내 이해 : Dir타입에 'center'를 추가하니까 Type '"center"' is not assignable to type 'never'.이런 오류 발생 뜻은 'center'는 never에 할당할수없다고, 그러면 default에서 하는건 _const는 아무것도 아니여야하는데 switch에서 'center'를 아직 case만들지않았으니 _const에 할당해서 return하는 셈되니까 이런오류 발생 맞나요?

// 3. (기초 · 판별 유니온) 아래 Shape를 정의하고(원/사각형), 넓이를 구하는 함수를 판별 유니온으로 안전하게 작성.

export type Shape =
  | { type: "circle"; r: number }
  | { type: "square"; size: number };

const area = (s: Shape): number => {
  switch (s.type) {
    case "circle":
      return 3.14 * s.r ** 2;
    case "square":
      return s.size ** 2;
    default:
      return assertNever(s);
  }
};
// 질문1: 다른 파일에 동일한 타입명으로 선언한거 있어서 충돌되서 지금 Shapes로함 다른파일은 다른파일 현재파일은 현재파일로 구분할수있는 방법없나요? 현재 하나의 필드로 인식하는거 같음
// 내 이해 : 선언한 타입앞에 export을 붙이면 해당파일에서만 사용된다 물론 다른파일에서 import를 하면 해당 파일에 export한 타입도 사용가능하다.
// 질문2: 이때 사용하는 default의 방어 return은 Shapes중의 type가 다른걸로 들어오면 안되다를 방어하는건가요?
// 내 이해 : 이해했습니다.

// 4. (응용 · 이전+오늘) 제네릭(이전) + 판별유니온(오늘) 결합. 아래 ApiResult<T>를 정의하고, 성공이면 data를, 실패면 예외를 던지는 unwrap을 작성.

type ApiResult<T> = { ok: true; data: T } | { ok: false; error: string };
const unwrap = <T>(r: ApiResult<T>): T => {
  if (r.ok === false) throw new Error(r.error);

  return r.data;
};
//질문: 근데 여기서의 T는 현재는 추론이고 정확하게 할려면 T extends data의 타입해야하는거죠? 이래야 정확하고
//내 이해 : 만약에 unwrap<Books> 이렇게 사용하면 APiResult의 T의 타입은 Books로 되니까 함수 내부로직에서 필요하면 사용하고, 그런데 대부분 T의 타입을 선언하지않음?

// 5. (심화 · never 실무 패턴) assertNever 헬퍼를 만들고, 문제 3의 area에 exhaustiveness 가드로 붙이세요. (새 도형 추가 시 컴파일 에러가 나야 함)

const assertNever = (x: never): never => {
  throw new Error(`area함수에서 처리/정의하지못한 case있음:${x}`);
};
//질문: 이 문제의 의도를 모르겠음 즉 뭐를 어떤형태로 만들어야하는지 감이 안옴
//내 이해 : 문제 2와 비슷하게 하는거군요 문제에서는 Default return에 순수 컴파일에러 나겠끔했다면 현재 assertNever검증함수를 만들어서 문제3에 만약에 처리하지못한 case가 있으면 바로 error를 던지겠끔한셈이네요 
const obj = {
  name: 'Kim',
  hi() { return `${this.name}`; },        // this = obj
};

obj.hi()
console.log(obj.hi())