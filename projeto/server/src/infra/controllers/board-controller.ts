import { BoardService } from "../../services/board-service";
import { CardService } from "../../services/card-service";
import { ColumnService } from "../../services/column-service";
import { Connection } from "../database/connection";
import { Http } from "../http/Http";
import { BoardRepositoryDatabase } from "../repositories/board-repository.database";
import { CardRepositoryDatabase } from "../repositories/card-repository.database";
import { ColumnRepositoryDatabase } from "../repositories/column-repository.database";

export class BoardController {

    constructor(
        private readonly http: Http,
        private readonly connection: Connection
    ) {
        http.route("get", "/boards", async (params: any, body: any) => {
            const repository = new BoardRepositoryDatabase(connection);
            const boardService = new BoardService(repository);
            const boards = await boardService.getBoards();
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
