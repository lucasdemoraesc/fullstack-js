import axios from "axios";
import { Card } from "../../src/domain/entities/card";
import { BoardOutput, BoardsOutput, ColumnOutput } from "../../src/services/types";

test("Deve retornar os quadros por meio da API", async () => {
    const response = await axios<BoardsOutput[]>({
        url: "http://localhost:3000/boards",
        method: "get"
    });

    const boards = response.data;
    const [board] = boards;

    expect(boards).toHaveLength(1);
    expect(board.idBoard).toBe(1);
    expect(board.name).toBe("Projeto 1");
    expect(board.description).toBe("Projeto de testes 1");
});

test("Deve retornar um quadro por meio da API", async () => {
    const response = await axios<BoardOutput>({
        url: "http://localhost:3000/boards/1",
        method: "get"
    });

    const board = response.data;

    expect(board.idBoard).toBe(1);
    expect(board.name).toBe("Projeto 1");
    expect(board.description).toBe("Projeto de testes 1");
});

test("Deve retornar as colunas de um quadro por meio da API", async function () {
    const response = await axios<ColumnOutput[]>({
        url: "http://localhost:3000/boards/1/columns",
        method: "get"
    });

    const columns = response.data;
    const [column1, column2, column3] = columns;
    expect(columns).toHaveLength(3);
    expect(column1.idColumn).toBe(1);
    expect(column1.name).toBe("Todo");
    expect(column2.name).toBe("Doing");
    expect(column2.hasEstimative).toBeTruthy();
    expect(column3.name).toBe("Done");
});

test("Deve retornar os cartões de uma coluna por meio da API", async function () {
    const response = await axios<Card[]>({
        url: "http://localhost:3000/boards/1/columns/1/cards",
        method: "get"
    });

    const cards = response.data;
    const [column1, column2, column3] = cards;
    expect(cards).toHaveLength(3);
    expect(column1.title).toBe("Estudar NodeJS");
    expect(column2.title).toBe("Estudar Typescript");
    expect(column3.title).toBe("Estudar Vue.js");
});
