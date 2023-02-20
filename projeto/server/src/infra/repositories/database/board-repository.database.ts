import { Board } from "../../../domain/entities/board";
import { BoardRepository } from "../../../domain/repositories/board-repository";
import { Connection } from "../../database/connection";

export class BoardRepositoryDatabase implements BoardRepository {

    constructor(readonly connection: Connection) { }

    async getAll(): Promise<Board[]> {
        const boardsData = await this.connection.query("select * from fullstackjs.boards");
        const boards: Board[] = [];

        for (const boardData of boardsData) {
            const board = new Board(boardData.name);
            boards.push(board);
        }

        return boards;
    }

    async get(idBoard: number): Promise<Board> {
        const [boardData] = await this.connection.query("select * from fullstackjs.boards where id_board = $1", [idBoard]);
        if (!boardData) throw new Error("Board not found");
        const board = new Board(boardData.name, boardData.description);
        return board;
    }
}
