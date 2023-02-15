import { BoardRepository } from "../domain/repositories/board-repository";

export class BoardService {

    constructor(protected readonly boardRepository: BoardRepository) {
    }

    async getBoards() {
        const boards = await this.boardRepository.getAll();
        return boards;
    }
}
