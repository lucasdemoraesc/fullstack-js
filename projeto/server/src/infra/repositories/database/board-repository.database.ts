import { Board } from "../../../domain/entities/board";
import { BoardRepository } from "../../../domain/repositories/board-repository";
import { Connection } from "../../database/connection";

export class BoardRepositoryDatabase implements BoardRepository {

    constructor(readonly connection: Connection) { }

    async getAll(): Promise<Board[]> {
        const boardsData: any[] = await this.connection.query("select * from fullstackjs.boards");
        const boards: Board[] = [];

        boardsData.forEach(boardData => {
            boards.push(new Board(boardData.id_board, boardData.name, boardData.description));
        });

        return boards;
    }

    async get(idBoard: number): Promise<Board> {
        const [boardData] = await this.connection.query("select * from fullstackjs.boards where id_board = $1", [idBoard]);
        if (!boardData) throw new Error("Board not found");
        const board = new Board(boardData.id_board, boardData.name, boardData.description);
        return board;
    }

    async save(board: Board): Promise<number> {
        const [boardData] = await this.connection.query(
            "insert into fullstackjs.boards (name, description) values ($1, $2) returning id_board",
            [board.name, board.description]
        );
        return boardData.id_board;
    }
    async update(board: Board): Promise<void> {
        await this.connection.query(
            "update fullstackjs.boards set name = $1, description = $2 where id_board = $3",
            [board.name, board.description, board.idBoard]
        );
    }
    async delete(idBoard: number): Promise<void> {
        await this.connection.query(
            "delete from fullstackjs.boards where id_board = $1",
            [idBoard]
        );
    }
}
