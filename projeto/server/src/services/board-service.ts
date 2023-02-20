import { BoardRepository } from "../domain/repositories/board-repository";
import { CardRepository } from "../domain/repositories/card-repository";
import { ColumnRepository } from "../domain/repositories/column-repository";
import { ColumnOutput, GetBoardOutput } from "./types";

export class BoardService {

    constructor(
        protected readonly boardRepository: BoardRepository,
        protected readonly columnRepository: ColumnRepository,
        protected readonly cardRepository: CardRepository,
    ) {
    }

    async getBoards() {
        const boards = await this.boardRepository.getAll();
        return boards;
    }

    async getBoard(idBoard: number): Promise<GetBoardOutput> {
        const board = await this.boardRepository.get(idBoard);
        const output: GetBoardOutput = {
            name: board.name,
            description: board.description,
            estimative: 0,
            columns: []
        };

        const columns = await this.columnRepository.getAllByIdBoard(idBoard);
        for (const column of columns) {

            const columnOutput: ColumnOutput = {
                name: column.name,
                hasEstimative: column.hasEstimative,
                estimative: 0,
                cards: []
            };

            const cards = await this.cardRepository.getAllByIdColumn(column.idColumn);

            for (const card of cards) {
                columnOutput.estimative += card.estimative;
                columnOutput.cards.push({ title: card.title, estimative: card.estimative });
            }

            output.estimative += columnOutput.estimative;
            output.columns.push(columnOutput);
        }

        return output;
    }
}
