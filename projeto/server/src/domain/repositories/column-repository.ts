import { Column } from "../entities/column";

export interface ColumnRepository {
    getAllByIdBoard(idBoard: number): Promise<Column[]>;
    getById(idColumn: number): Promise<Column>;
    save(column: Column): Promise<number>;
    delete(idColumn: number): Promise<void>;
}
