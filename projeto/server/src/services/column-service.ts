import { Column } from "../domain/entities/column";
import { ColumnRepository } from "../domain/repositories/column-repository";
import { ColumnInput } from "./types";

export class ColumnService {

    constructor(protected readonly columnRepository: ColumnRepository) {
    }

    async getColumns(idBoard: number): Promise<Column[]> {
        return await this.columnRepository.getAllByIdBoard(idBoard);
    }

    async getColumn(idColumn: number): Promise<Column> {
        return this.columnRepository.getById(idColumn);
    }

    async saveColumn(idBoard: number, columnInput: ColumnInput): Promise<number> {
        return this.columnRepository.save(new Column(idBoard, undefined, columnInput.name, columnInput.hasEstimative));
    }

    async deleteColumn(idColumn: number): Promise<void> {
        await this.columnRepository.delete(idColumn);
    }
}
