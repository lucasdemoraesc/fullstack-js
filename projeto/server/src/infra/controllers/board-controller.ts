import { BoardService } from "../../services/board-service";
import { CardService } from "../../services/card-service";
import { ColumnService } from "../../services/column-service";
import { BoardOutput, ColumnInput } from "../../services/types";
import { Http } from "../http/Http";

export class BoardController {

    constructor(
        private readonly http: Http,
        private readonly boardService: BoardService,
        private readonly columnService: ColumnService,
        private readonly cardService: CardService
    ) {
        this.addBoardEndpoints(http, boardService);
        this.addColumnsEndpoints(http, columnService);
        this.addCardsEndpoints(http, cardService);
    }

    private addBoardEndpoints(http: Http, boardService: BoardService) {
        http.route("get", "/boards", async (params: any, body: any) => {
            const boards = await boardService.getBoards();
            return boards;
        });

        http.route("get", "/boards/:idBoard", async (params: any, body: any) => {
            const boards = await boardService.getBoard(params.idBoard);
            return boards;
        });

        http.route("post", "/boards", async (params: any, body: BoardOutput) => {
            const idColumn = await boardService.saveBoard(body);
            return idColumn;
        });

        http.route("post", "/boards", async (params: any, body: BoardOutput) => {
            const idColumn = await boardService.saveBoard(body);
            return idColumn;
        });

        http.route("put", "/boards/:idBoard", async (params: any, body: BoardOutput) => {
            await boardService.updateBoard(params.idBoard, body);
        });

        http.route("delete", "/boards/:idBoard", async function (params: any, body: any) {
            await boardService.deleteBoard(parseInt(params.idBoard));
        });
    }

    private addColumnsEndpoints(http: Http, columnService: ColumnService) {
        http.route("get", "/boards/:idBoard/columns", async (params: any, body: any) => {
            const columns = await columnService.getColumns(parseInt(params.idBoard));
            return columns;
        });

        http.route("get", "/boards/:idBoard/columns/:idColumn", async (params: any, body: any) => {
            const columns = await columnService.getColumn(params.idColumn);
            return columns;
        });

        http.route("post", "/boards/:idBoard/columns", async (params: any, body: ColumnInput) => {
            const idColumn = await columnService.saveColumn(params.idBoard, body);
            return idColumn;
        });

        http.route("put", "/boards/:idBoard", async (params: any, body: ColumnInput) => {
            await columnService.updateColumn(params.idBoard, body);
        });

        http.route("delete", "/boards/:idBoard/columns/:idColumn", async function (params: any, body: any) {
            await columnService.deleteColumn(parseInt(params.idColumn));
        });
    }

    private addCardsEndpoints(http: Http, cardService: CardService) {
        http.route("get", "/boards/:idBoard/columns/:idColumn/cards", async (params: any, body: any) => {
            const cards = await cardService.getCards(parseInt(params.idColumn));
            return cards;
        });

        http.route("get", "/boards/:idBoard/columns/:idColumn/cards/:idCard", async (params: any, body: any) => {
            const columns = await cardService.getCard(params.idCard);
            return columns;
        });

        http.route("post", "/boards/:idBoard/columns/:idColumn/cards", async function (params: any, body: any) {
            const idCard = await cardService.saveCard(body);
            return idCard;
        });

        http.route("put", "/boards/:idBoard/columns/:idColumn/cards/:idCard", async function (params: any, body: any) {
            await cardService.updateCard(body);
        });

        http.route("delete", "/boards/:idBoard/columns/:idColumn/cards/:idCard", async function (params: any, body: any) {
            await cardService.deleteCard(parseInt(params.idCard));
        });
    }
}
