import { Column } from "../../domain/entities/column";
import { ColumnRepository } from "../../domain/repositories/column-repository";

export class ColumnRepositoryMemory implements ColumnRepository {

    columns: Column[];

    constructor() {
        this.columns = [
            new Column("Todo"),
            new Column("Doing", true),
            new Column("Done")
        ];
    }

    async getAllByIdBoard(idBoard: number): Promise<Column[]> {
        return this.columns;
    }

}
