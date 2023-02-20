import { Column } from "../../../domain/entities/column";
import { ColumnRepository } from "../../../domain/repositories/column-repository";
import { Connection } from "../../database/connection";

export class ColumnRepositoryDatabase implements ColumnRepository {

    constructor(readonly connection: Connection) { }

    async getAllByIdBoard(idBoard: number): Promise<Column[]> {
        const columnsData = await this.connection.query("select * from fullstackjs.columns where id_board = $1", [idBoard]);
        const columns: Column[] = [];

        for (const columnData of columnsData)
            columns.push(new Column(columnData.id_column, columnData.name, columnData.has_estimative));

        return columns;
    }

}
