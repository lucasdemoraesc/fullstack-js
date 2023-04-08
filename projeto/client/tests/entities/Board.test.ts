import Board from "../../src/entities/Board";

test("Deve criar um quadro", () => {
    const board = new Board(1, "Projeto 1", "Projeto para teste 1");

    expect(board.columns).toHaveLength(0);
    expect(board.name).toBe("Projeto 1");
    expect(board.description).toBe("Projeto para teste 1");
    expect(board.estimative).toBe(0);
});

test("Deve criar um quadro com 3 colunas", () => {
    const board = new Board(1, "Projeto 1", "Projeto para teste 1");
    board.addColumn("Todo", true);
    board.addColumn("Doing", true);
    board.addColumn("Done", false);
    const [column1, column2, column3] = board.columns;

    expect(board.columns).toHaveLength(3);
    expect(column1.name).toBe("Todo");
    expect(column1.hasEstimative).toBeTruthy();
    expect(column2.name).toBe("Doing");
    expect(column2.hasEstimative).toBeTruthy();
    expect(column3.name).toBe("Done");
    expect(column3.hasEstimative).toBeFalsy();
});

test("Deve criar um quadro com 3 colunas e com cartões", () => {
    const board = new Board(1, "Projeto 1");
    board.addColumn("Todo", true);
    board.addColumn("Doing", true);
    board.addColumn("Done", false);

    board.addCard("Todo", "Atividade 1", 3);
    board.addCard("Todo", "Atividade 2", 2);
    board.addCard("Todo", "Atividade 3", 1);
    board.addCard("Doing", "Atividade 4", 4);
    board.addCard("Done", "Atividade 5", 5);


    expect(board.estimative).toBe(10);
    expect(board.columns[0].cards).toHaveLength(3);
    expect(board.columns[0].estimative).toBe(6);
    expect(board.columns[1].cards).toHaveLength(1);
    expect(board.columns[1].estimative).toBe(4);
    expect(board.columns[2].cards).toHaveLength(1);
    expect(board.columns[2].estimative).toBe(5);

    const [card1, card2, card3] = board.columns[0].cards;
    const [card4] = board.columns[1].cards;
    const [card5] = board.columns[2].cards;

    expect(card1.title).toBe("Atividade 1");
    expect(card1.estimative).toBe(3);
    expect(card2.title).toBe("Atividade 2");
    expect(card2.estimative).toBe(2);
    expect(card3.title).toBe("Atividade 3");
    expect(card3.estimative).toBe(1);
    expect(card4.title).toBe("Atividade 4");
    expect(card4.estimative).toBe(4);
    expect(card5.title).toBe("Atividade 5");
    expect(card5.estimative).toBe(5);
});

test("Deve criar um quadro com uma coluna e um card e aumentar a estimativa", () => {
    const board = new Board(1, "Projeto 1");
    board.addColumn("Todo", true);
    board.addCard("Todo", "Atividade 1", 3);

    expect(board.columns).toHaveLength(1);
    expect(board.columns[0].cards).toHaveLength(1);
    expect(board.columns[0].cards[0].estimative).toBe(3);

    board.columns[0].cards[0].increaseEstimative();
    expect(board.columns[0].cards[0].estimative).toBe(4);
    board.increaseEstimativeOf(board.columns[0].cards[0]);
    expect(board.columns[0].cards[0].estimative).toBe(5);
});
