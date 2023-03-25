import { BoardRepository } from "../domain/repositories/board-repository";
import { CardService } from "./card-service";
import { ColumnService } from "./column-service";
import { BoardOutput, BoardsOutput, ColumnOutput } from "./types";

export class BoardService {

    constructor(
        protected readonly boardRepository: BoardRepository,
        protected readonly columnService: ColumnService,
        protected readonly cardService: CardService,
    ) {
    }

    async getBoards() {
        const boards = await this.boardRepository.getAll();

        return boards.map(board => {
            const boardOutput = (<BoardsOutput> {
                idBoard: board.idBoard,
                name: board.name,
                description: board.description
            });
            return boardOutput;
        });
    }

    async getBoard(idBoard: number): Promise<BoardOutput> {
        const board = await this.boardRepository.get(idBoard);
        const columns = await this.columnService.getColumns(idBoard);

        const output: BoardOutput = {
            idBoard: board.idBoard,
            name: board.name,
            description: board.description,
            estimative: 0,
            columns: []
        };

        for (const column of columns) {
            const cards = await this.cardService.getCards(column.idColumn);

            const columnOutput: ColumnOutput = {
                ...column,
                estimative: 0,
                cards: cards
            };

            if (column.hasEstimative)
                columnOutput.estimative = cards.reduce((total, card) => total += card.estimative, 0);

            output.estimative += columnOutput.estimative;
            output.columns.push(columnOutput);
        }

        return output;
    }
}
