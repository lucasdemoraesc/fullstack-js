import { Board } from "../../domain/entities/board";
import { BoardRepository } from "../../domain/repositories/board-repository";

export class BoardRepositoryMemory implements BoardRepository {

    boards: Board[];

    constructor() {
        this.boards = [new Board("Projeto 1")];
    }

    async getAll(): Promise<Board[]> {
        return this.boards;
    }
}
