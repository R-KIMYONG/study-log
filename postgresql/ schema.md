create table users (id int primary key, name text, created_at timestamptz);
create table books (id int primary key, title text, author text, genre text, price int, view_count int);
create table likes (user_id int, book_id int, created_at timestamptz);
create table comments (id int primary key, book_id int, user_id int, content text, created_at timestamptz);

insert into users values
(1,'김A','2026-01-01'),(2,'이B','2026-01-02'),(3,'박C','2026-01-03'),(4,'최D','2026-01-04'),(5,'정E','2026-01-05');

insert into books values
(1,'경제학콘서트','장하준','경제',18000,120),
(2,'주식투자','오버솔드','경제',22000,300),
(3,'어린왕자','생텍쥐페리','소설',12000,500),
(4,'1984','오웰','소설',15000,200),
(5,'클린코드','마틴','IT',33000,400),
(6,'리팩터링','파울러','IT',45000,150),
(7,'아무도모른다','김작가','에세이',9000,50),
(8,'습관의완성','제임스','자기계발',16000,90);

insert into likes values
(1,1,'2026-02-01'),(2,1,'2026-02-02'),
(1,2,'2026-02-03'),(2,2,'2026-02-04'),(3,2,'2026-02-05'),
(1,3,'2026-02-06'),
(1,5,'2026-02-07'),(2,5,'2026-02-08'),(3,5,'2026-02-09'),(4,5,'2026-02-10'),
(5,6,'2026-02-11');

insert into comments values
(1,1,1,'좋아요','2026-03-01 10:00'),
(2,3,1,'재밌음','2026-03-05 09:00'),
(3,5,2,'클린!','2026-03-02 11:00'),
(4,2,3,'주식 어렵다','2026-03-03 12:00');