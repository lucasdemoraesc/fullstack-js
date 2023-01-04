import axios from "axios";
import { Board } from "../../src/entities/board";
import { Card } from "../../src/entities/card";
import { Column } from "../../src/entities/column";

test("Deve retornar os quadros por meio da API", async () => {
    const response = await axios<Board[]>({
        url: "http://localhost:3000/boards",
        method: "get"
    });

    const boards = response.data;
    const [board] = boards;

    expect(boards).toHaveLength(1);
    expect(board.name).toBe("Projeto 1");
});

test("Deve retornar as colunas de um quadro por meio da API", async function () {
    const response = await axios<Column[]>({
        url: "http://localhost:3000/boards/1/columns",
        method: "get"
    });

    const columns = response.data;
    const [column1, column2, column3] = columns;
    expect(columns).toHaveLength(3);
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
