import { BoardRepositoryMemory } from "../../../src/infra/repositories/board-repository.memory";
import { BoardService } from "../../../src/services/board-service";

test("Deve retornar os quadros por meio do Serviço", async () => {
    const boardRepository = new BoardRepositoryMemory();
    const boardService = new BoardService(boardRepository);
    const boards = await boardService.getBoards();
    expect(boards).toHaveLength(1);
    const [board] = boards;
    expect(board.name).toBe("Projeto 1");
});
