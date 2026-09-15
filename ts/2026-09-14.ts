//-----------Q1-----------
type Account = { id: number; name: string; verified: boolean };
type AccountPatch = Partial<Account>;
type AccountFull = Required<Account>;

//-----------Q2-----------
type Article = {
  id: number;
  title: string;
  body: string;
  authorId: number;
  createdAt: string;
};
type ArticleCard = Pick<Article, "id" | "title">;
type ArticleDraft = Omit<Article, "createdAt">;

//-----------Q3-----------

const createUser = (name: string, age: number) => {
  return { id: 1, name, age };
};
type NewUser = ReturnType<typeof createUser>;
type CreateArgs = Parameters<typeof createUser>;

//-----------Q4-----------

type State14 =
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; message: string };
type SuccessState = Extract<State14, { status: "success" }>;

//-----------Q5-----------
const fetchUser = async (): Promise<{ id: number; name: string }> => {
  return { id: 1, name: "kim" };
};
// fetchUser의 "Promise를 벗긴 실제 반환 타입"을 추출
type FetchedUser = Awaited<ReturnType<typeof fetchUser>>;

const testFn = () => {
  let privateNum = 0;
  return {
    get: () => privateNum,
    set: (n: number) => {
      privateNum = n;
      return privateNum;
    },
  };
};

const counter = testFn();
const test1 = counter.get();

const test2 = counter.set(1000);
console.log(test1);
console.log(test2);
