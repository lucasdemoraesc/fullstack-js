import { PgPromiseConnection } from "../../../src/infra/database/pg-promise-connection";
import { BoardRepositoryDatabase } from "../../../src/infra/repositories/database/board-repository.database";
import { CardRepositoryDatabase } from "../../../src/infra/repositories/database/card-repository.database";
import { ColumnRepositoryDatabase } from "../../../src/infra/repositories/database/column-repository.database";
import { BoardService } from "../../../src/services/board-service";
import { CardService } from "../../../src/services/card-service";
import { ColumnService } from "../../../src/services/column-service";

test("Deve retornar os quadros por meio do Serviço", async () => {
    const connection = new PgPromiseConnection();
    const boardRepository = new BoardRepositoryDatabase(connection);
    const columnRepository = new ColumnRepositoryDatabase(connection);
    const cardRepository = new CardRepositoryDatabase(connection);
    const columnService = new ColumnService(columnRepository);
    const cardService = new CardService(cardRepository);

    const boardService = new BoardService(boardRepository, columnService, cardService);
    const boards = await boardService.getBoards();
    expect(boards).toHaveLength(1);
    const [board] = boards;
    expect(board.name).toBe("Projeto 1");
    await connection.close();
});

test("Deve retornar um quadro", async () => {
    const connection = new PgPromiseConnection();
    const boardRepository = new BoardRepositoryDatabase(connection);
    const columnRepository = new ColumnRepositoryDatabase(connection);
    const cardRepository = new CardRepositoryDatabase(connection);
    const columnService = new ColumnService(columnRepository);
    const cardService = new CardService(cardRepository);

    const boardService = new BoardService(boardRepository, columnService, cardService);
    const board = await boardService.getBoard(1);
    expect(board.name).toBe("Projeto 1");
    expect(board.columns).toHaveLength(3);
    const [column1, column2, column3] = board.columns;
    expect(column1.name).toBe("Todo");
    expect(column2.name).toBe("Doing");
    expect(column3.name).toBe("Done");
    expect(column1.estimative).toBe(6);
    expect(column2.estimative).toBe(0);
    expect(column3.estimative).toBe(0);
    expect(board.estimative).toBe(6);
    const [card1, card2, card3] = column1.cards;
    expect(card1.title).toBe("Estudar NodeJS");
    expect(card2.title).toBe("Estudar Typescript");
    expect(card3.title).toBe("Estudar Vue.js");
    expect(card1.estimative).toBe(2);
    expect(card2.estimative).toBe(2);
    expect(card3.estimative).toBe(2);
    await connection.close();
});
