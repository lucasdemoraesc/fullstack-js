import Board from "../entities/Board";
import Card from "../entities/Card";
import Column from "../entities/Column";

export default interface BoardService {
    getBoard(idBoard: number): Promise<Board>;
    saveBoard(board: Board): Promise<number>;
    saveColumn(idBoard: number, column: Column): Promise<number>;
    deleteColumn(idBoard: number, idColumn: number): Promise<void>;
    saveCard(idBoard: number, idColumn: number, card: Card): Promise<number>;
    deleteCard(idBoard: number, idColumn: number, idCard: number): Promise<void>;
    updateCard(idBoard: number, idColumn: number, card: Card): Promise<void>;
}
