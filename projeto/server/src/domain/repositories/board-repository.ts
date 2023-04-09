import { Board } from "../entities/board";

export interface BoardRepository {
    getAll(): Promise<Board[]>;
    get(idBoard: number): Promise<Board>;
    save(board: Board): Promise<number>;
    update(board: Board): Promise<void>;
    delete(idBoard: number): Promise<void>;
}
