import { BoardRepository } from "../../domain/repositories/board-repository";
import { CardRepository } from "../../domain/repositories/card-repository";
import { ColumnRepository } from "../../domain/repositories/column-repository";
import { BoardService } from "../../services/board-service";
import { CardService } from "../../services/card-service";
import { ColumnService } from "../../services/column-service";
import { Connection } from "../database/connection";
import { Http } from "../http/Http";
import { CardRepositoryDatabase } from "../repositories/database/card-repository.database";
import { ColumnRepositoryDatabase } from "../repositories/database/column-repository.database";

export class BoardController {

    constructor(
        private readonly http: Http,
        private readonly connection: Connection,
        private readonly boardRepository: BoardRepository,
        private readonly columnRepository: ColumnRepository,
        private readonly cardRepository: CardRepository
    ) {
        http.route("get", "/boards", async (params: any, body: any) => {
            const boardService = new BoardService(boardRepository, columnRepository, cardRepository);
            const boards = await boardService.getBoards();
            return boards;
        });

        http.route("get", "/boards/:idBoard", async (params: any, body: any) => {
            const boardService = new BoardService(boardRepository, columnRepository, cardRepository);
            const boards = await boardService.getBoard(params.idBoard);
            return boards;
        });

        http.route("get", "/boards/:idBoard/columns", async (params: any, body: any) => {
            const repository = new ColumnRepositoryDatabase(connection);
            const columnService = new ColumnService(repository);
            const columns = await columnService.getColumns(parseInt(params.idBoard));
            return columns;
        });

        http.route("get", "/boards/:idBoard/columns/:idColumn/cards", async (params: any, body: any) => {
            const repository = new CardRepositoryDatabase(connection);
            const cardService = new CardService(repository);
            const cards = await cardService.getCards(parseInt(params.idColumn));
            return cards;
        });
    }
}
