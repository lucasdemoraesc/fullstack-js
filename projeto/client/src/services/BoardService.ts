import Board from "../entities/Board";

export default interface BoardService {
    getBoard(id: number): Promise<Board>;
    saveColumn(column: ColumnInput): Promise<number>;
}

export type ColumnInput = {
    idBoard: number,
    name: string,
    hasEstimative: boolean;
};
