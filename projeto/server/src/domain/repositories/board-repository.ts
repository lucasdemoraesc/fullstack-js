import { Board } from "../entities/board";

export interface BoardRepository {
    getAll(): Promise<Board[]>;
    get(idBoard: number): Promise<Board>;
}
