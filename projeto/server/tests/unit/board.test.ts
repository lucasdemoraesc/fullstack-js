import { Board } from "../../src/domain/entities/board";
import { Card } from "../../src/domain/entities/card";
import { Column } from "../../src/domain/entities/column";

test("Deve criar um quadro", () => {
    const board = new Board("Projeto 1");
    expect(board.name).toBe("Projeto 1");
});

test("Não deve criar um quadro sem nome", () => {
    expect(() => new Board("")).toThrow(new Error("Name is required"));
});

test("Deve criar um quadro com 3 colunas", () => {
    const board = new Board("Projeto 1");
    board.addColumn(new Column("Todo", true));
    board.addColumn(new Column("Doing", true));
    board.addColumn(new Column("Done"));

    expect(board.columns).toHaveLength(3);
});

test("Deve criar um quadro com 3 colunas, adicionar cards e calcular a estimativa total", () => {
    const board = new Board("Projeto 1");

    board.addColumns([new Column("Todo", true), new Column("Doing", true), new Column("Done")]);

    board.addCards("Todo", [new Card("Atividade 1", 3), new Card("Atividade 2", 2)]);
    board.addCard("Doing", new Card("Atividade 3", 1));
    board.addCard("Done", new Card("Atividade concluída", 4));

    expect(board.estimative).toBe(6);
});
