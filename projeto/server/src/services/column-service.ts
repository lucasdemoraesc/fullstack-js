import { ColumnRepository } from "../domain/repositories/column-repository";
import { ColumnsOutput } from "./types";

export class ColumnService {

    constructor(protected readonly columnRepository: ColumnRepository) {
    }

    async getColumns(idBoard: number) {
        const columns = await this.columnRepository.getAllByIdBoard(idBoard);
        return columns.map(column => column as ColumnsOutput);
    }
}
