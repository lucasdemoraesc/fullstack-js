import Board from "../entities/Board";
import Card from "../entities/Card";
import Column from "../entities/Column";
import { HttpClient } from "../infra/http/HttpClient";
import BoardService from "./BoardService";

export default class BoardServiceHttp implements BoardService {

    constructor(readonly httpClient: HttpClient, readonly baseUrl: string) { }

    async getBoard(idBoard: number): Promise<Board> {
        const boardData = await this.httpClient.get(`${this.baseUrl}/boards/${idBoard}`);
        const board = new Board(boardData.idBoard, boardData.name, boardData.description);
        for (const columnData of boardData.columns) {
            const column = new Column(columnData.name, columnData.hasEstimative);
            column.idColumn = columnData.idColumn;
            board.columns.push(column);
            for (const cardData of columnData.cards) {
                const card = new Card(cardData.title, cardData.estimative);
                card.idCard = cardData.idCard;
                column.cards.push(card);
            }
        }

        return board;
    }

    async saveBoard(board: Board): Promise<number> {
        const idBoard = await this.httpClient.post(`${this.baseUrl}/boards`, board);
        return idBoard;
    }

    async saveColumn(idBoard: number, column: Column): Promise<number> {
        const idColumn = await this.httpClient.post(`${this.baseUrl}/boards/${idBoard}/columns`, column);
        return idColumn;
    }

    async deleteColumn(idBoard: number, idColumn: number): Promise<void> {
        await this.httpClient.delete(`${this.baseUrl}/boards/${idBoard}/columns/${idColumn}`);
    }

    async saveCard(idBoard: number, idColumn: number, card: Card): Promise<number> {
        const idCard = await this.httpClient.post(`${this.baseUrl}/boards/${idBoard}/columns/${idColumn}/cards`, card);
        return idCard;
    }

    async deleteCard(idBoard: number, idColumn: number, idCard: number): Promise<void> {
        await this.httpClient.delete(`${this.baseUrl}/boards/${idBoard}/columns/${idColumn}/cards/${idCard}`);
    }

    async updateCard(idBoard: number, idColumn: number, card: Card): Promise<void> {
        await this.httpClient.put(`${this.baseUrl}/boards/${idBoard}/columns/${idColumn}/cards/${card.idCard}`, card);
    }
}
