import { Column } from "../entities/column";

export interface ColumnRepository {
    getAllByIdBoard(idBoard: number): Promise<Column[]>;
}
