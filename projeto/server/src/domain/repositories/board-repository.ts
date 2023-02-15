import { Board } from "../entities/board";

export interface BoardRepository {
    getAll(): Promise<Board[]>;
}
