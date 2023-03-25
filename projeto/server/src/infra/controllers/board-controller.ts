import { BoardService } from "../../services/board-service";
import { CardService } from "../../services/card-service";
import { ColumnService } from "../../services/column-service";
import { Connection } from "../database/connection";
import { Http } from "../http/Http";

export class BoardController {

    constructor(
        private readonly http: Http,
        private readonly connection: Connection,
        private readonly boardService: BoardService,
        private readonly columnService: ColumnService,
        private readonly cardService: CardService
    ) {
        http.route("get", "/boards", async (params: any, body: any) => {
            const boards = await boardService.getBoards();
            return boards;
        });

        http.route("get", "/boards/:idBoard", async (params: any, body: any) => {
            const boards = await boardService.getBoard(params.idBoard);
            return boards;
        });

        http.route("get", "/boards/:idBoard/columns", async (params: any, body: any) => {
            const columns = await columnService.getColumns(parseInt(params.idBoard));
            return columns;
        });

        http.route("get", "/boards/:idBoard/columns/:idColumn/cards", async (params: any, body: any) => {
            const cards = await cardService.getCards(parseInt(params.idColumn));
            return cards;
        });
    }
}
