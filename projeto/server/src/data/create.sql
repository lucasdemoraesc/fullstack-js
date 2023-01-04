drop table if exists fullstackjs.cards;
drop table if exists fullstackjs.columns;
drop table if exists fullstackjs.boards;

create table fullstackjs.boards (
    id_board serial primary key,
    name varchar(30) not null,
    description varchar(120)
);

create table fullstackjs.columns (
    id_column serial primary key,
    id_board integer references fullstackjs.boards (id_board) not null,
    name varchar(30) not null,
    has_estimative boolean
);

create table fullstackjs.cards (
    id_card serial primary key,
    id_column integer references fullstackjs.columns (id_column) not null,
    title varchar(200) not null,
    estimative integer
);

insert into fullstackjs.boards (id_board, name, description) values (1, 'Projeto 1', 'Projeto de testes 1');

insert into fullstackjs.columns (id_column, id_board, name, has_estimative) values (1, 1, 'Todo', false);
insert into fullstackjs.columns (id_column, id_board, name, has_estimative) values (2, 1, 'Doing', true);
insert into fullstackjs.columns (id_column, id_board, name, has_estimative) values (3, 1, 'Done', false);

insert into fullstackjs.cards (id_card, id_column, title, estimative) values (1, 1, 'Estudar NodeJS', 2);
insert into fullstackjs.cards (id_card, id_column, title, estimative) values (2, 1, 'Estudar Typescript', 2);
insert into fullstackjs.cards (id_card, id_column, title, estimative) values (3, 1, 'Estudar Vue.js', 2);
