import type { ReactNode } from "react";
// Q1. union narrowing — string이면 대문자, number면 문자열로
const formatId = (id: string | number): string => {
  if (typeof id === "number") return String(id);
  return id.toUpperCase();
};

// Q2. 제네릭 — 첫 요소 반환, 빈 배열이면 undefined
// first([1,2,3]) → number | undefined,  first(['a']) → string | undefined
const first = <T>(arr: T[] | undefined): T | undefined => {
  return arr?.[0];
};

// Q3. React props 타입 정의
// variant: 'primary' | 'secondary'만 / onClick: 선택적(()=>void) / children: 필수
type ButtonProps = {
  variant: "primary" | "secondary";
  onClick?: () => void;
  children: ReactNode;
};

// Q4. 유틸리티 타입 — User에서 password 뺀 타입
type User4 = { id: string; name: string; email: string; password: string };
type PublicUser = Omit<User4, "password">;

// Q5. 유틸리티 타입 — id는 필수, name·email은 선택적 수정
type User5 = { id: string; name: string; email: string };
type UpdateUser = Pick<User5, "id"> & Partial<Pick<User5, "name" | "email">>;

// Q6. Record — 상태별 한국어 라벨 매핑 타입
type StatusLabel = Record<"idle" | "loading" | "success" | "error", string>;
const labels: StatusLabel = {
  idle: "대기",
  loading: "로딩중",
  success: "성공",
  error: "실패",
};

// Q7. 타입 추론 읽기 (답을 주석으로)
const arr7 = [1, "two", true]; // arr7의 타입은?  → (number|string|boolean)[]
const obj7 = { a: 1, b: "x" } as const; // obj7.a의 타입은? → a:1

// Q8. 함수 타입 — myMap: T[]와 (T)=>U 받아 U[] 반환 (제네릭)
const myMap = <T, U>(arr: T[], fn: (item: T) => U): U[] => {
  return arr.map(fn);
};

// Q9. null 가드 — null이면 0 반환
const getLength = (str: string | null): number => {
  return typeof str === "string" ? str.length : 0; // ❌ 고치기
};

// Q10. 도전 — 제네릭 제약(extends keyof)
// getProp({name:'kim', age:20}, 'name') → string
// getProp({name:'kim'}, 'xxx') → 컴파일 에러여야 함
const getProp = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};
