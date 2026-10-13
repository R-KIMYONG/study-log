//========문제1========
type UserId = string & { readonly __brand: "UserId" };
type BookId = string & { readonly __brand: "BookId" };

const asBookId = (s: string): BookId => s as BookId;
const asUserId = (s: string): UserId => s as UserId;

const getUser = (id: UserId): void => {};

const uid = asUserId("user-1");
const bid = asBookId("book-1");

getUser(uid); //통과합니다. 왜냐면 uid는 이미 asUserId통해 'user-1'의 타입은 string인데 brand는 'UserId'에 한정되여있음을 명시했으니 통과
getUser(bid); // 오류납니다. 왜냐면 getUser의 파라미터엔 id는 받지만 타입이 UserId인것만 받으니까 그러나 bid는 asBookId 함수통해 BookId로 정의해서 그렇다.
getUser("user-1"); //오류나는게 분명합니다. 여기서 생으로 입력한 'user-1'은 단순히 string이다 asUserId로 string에서 브랜드 'UserId'로 변환하지않아서이다.
// 이렇게 체크하라는건가? 무슨말이지?
//========문제2========
const toUserId = (s: string): UserId => {
  if (s.trim() === "") throw new Error("id");
  return s as UserId;
};

//========문제3========
type EmailType = string & { readonly __brand: "Email" };

const toEmail = (e: string): EmailType => {
  if (!e.includes("@")) throw new Error("이메일 타입 올바르지않습니다.");

  return e as EmailType;
};

//========문제4========
type Brand<T, B> = T & { readonly __brand: B };
type Isbn13 = Brand<string, "isbn13">;
interface Book {
  readonly id: BookId;
  readonly isbn13: Isbn13;
  title: string;
  likeCount: number;
}

const getBook = (isbn13: Isbn13): void => {};

const testIsbn13 = getBook("isbn-1-2-23-3"); //오류남 그냥 string을 넣음 해당 string을 asIsbn13함수를 만들어서 type Isbn13으로 정의해둬야함
//========문제5========

type ItemId = Brand<string, "ItemId">;
const addLike = (userId: UserId, isbn: Isbn13): Book => {};

const asIsbn13 = (s: string): Isbn13 => s as Isbn13;
const asItemId = (s: string): ItemId => s as ItemId;
const itemId = asItemId("itemId-1-2");
const isbn13Id = asIsbn13("isbn13-1-2");

addLike(isbn13Id, uid);

// Argument of type 'Isbn13' is not assignable to parameter of type 'UserId'.
//  Type 'Isbn13' is not assignable to type '{ readonly __brand: "UserId"; }'.
//  Types of property '__brand' are incompatible.
//  Type '"isbn13"' is not assignable to type '"UserId"'.
