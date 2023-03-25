import { Column } from "../domain/entities/column";
import { ColumnRepository } from "../domain/repositories/column-repository";
import { ColumnsOutput } from "./types";

export class ColumnService {

    constructor(protected readonly columnRepository: ColumnRepository) {
    }

    async getColumns(idBoard: number) {
        const columns: Column[] = await this.columnRepository.getAllByIdBoard(idBoard);
        return columns.map(column => {
            const columnOutput = (<ColumnsOutput> {
                idColumn: column.idColumn,
                name: column.name,
                hasEstimative: column.hasEstimative
            });
            return columnOutput;
        });
    }
}
