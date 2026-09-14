type State =
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; message: string };
const render = (state: State): string => {
  switch (state.status) {
    case "success":
      return state.data;
    case "error":
      return state.message;
    case "loading":
      return "로딩중";
  }
};

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };
const areaQ2 = (s: Shape): number => {
  switch (s.kind) {
    case "circle":
      return 3.14 * s.radius * s.radius;
    case "square":
      return s.size * s.size;
  }
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "set"; value: number };

const reducer = (count: number, action: Action): number => {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "set":
      return action.value;
  }
};

const areaQ4 = (s: Shape): number => {
  switch (s.kind) {
    case "circle":
      return 3.14 * s.radius * s.radius;
    case "square":
      return s.size * s.size;
    default: {
      const _exhaustive: never = s;
      return _exhaustive;
    }
  }
};

type LinkProps = {
  as: "link";
  href: string;
  onClick?: never;
};
type ClickProps = {
  as: "button";
  onClick: () => void;
  href?: never;
};

type ButtonProps = LinkProps | ClickProps;
