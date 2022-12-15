drop table public.book;
drop table public.car;

create table public.book (
    id serial,
    title text,
    author text
);

create table public.car (
    id serial,
    md text,
    br text
);
