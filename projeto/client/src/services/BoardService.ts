import Board from "../entities/Board";

export default interface BoardService {
    getBoardById(id: number): Promise<Board>;
}
