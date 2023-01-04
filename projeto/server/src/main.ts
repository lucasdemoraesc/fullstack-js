import express from "express";
import pgp from "pg-promise";
import { Board } from "./entities/board";
import { Card } from "./entities/card";
import { Column } from "./entities/column";

const app = express();
const connection = pgp()("postgres://postgres:123456@localhost:5432");

app.get("/boards", async (req, res) => {
    const boardsData = await connection.query("select * from fullstackjs.boards");
    const boards: Board[] = [];

    for (const boardData of boardsData)
        boards.push(new Board(boardData.name));

    res.json(boards);
});

app.get("/boards/:idBoard/columns", async (req, res) => {
    const columnsData = await connection.query("select * from fullstackjs.columns where id_board = $1", [req.params.idBoard]);
    const columns: Column[] = [];

    for (const columnData of columnsData)
        columns.push(new Column(columnData.name, columnData.has_estimative));

    res.json(columns);
});

app.get("/boards/:idBoard/columns/:idColumn/cards", async (req, res) => {
    const cardsData = await connection.query("select * from fullstackjs.cards where id_column = $1", [req.params.idColumn]);
    const cards: Card[] = [];

    for (const columnData of cardsData)
        cards.push(new Card(columnData.title, columnData.estimative));

    res.json(cards);
});

app.listen(3000);
