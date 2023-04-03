import { Column } from "../../../domain/entities/column";
import { ColumnRepository } from "../../../domain/repositories/column-repository";
import { Connection } from "../../database/connection";

export class ColumnRepositoryDatabase implements ColumnRepository {

    constructor(readonly connection: Connection) { }

    async getAllByIdBoard(idBoard: number): Promise<Column[]> {
        const columnsData: any[] = await this.connection.query("select * from fullstackjs.columns where id_board = $1", [idBoard]);
        const columns: Column[] = [];

        columnsData.forEach(columnData => {
            columns.push(new Column(columnData.id_board, columnData.id_column, columnData.name, columnData.has_estimative));
        });

        return columns;
    }

    async getById(idColumn: number): Promise<Column> {
        const [columnData] = await this.connection.query("select * from fullstackjs.columns where id_column = $1", [idColumn]);
        if (!columnData) throw new Error("Column not found");
        return new Column(columnData.id_board, columnData.id_column, columnData.name, columnData.has_estimative);
    }

    async save(column: Column): Promise<number> {
        const [columnData] = await this.connection.query("insert into fullstackjs.columns (id_board, name, has_estimative) values ($1, $2, $3) returning id_column",
            [column.idBoard, column.name, column.hasEstimative]
        );

        return columnData.id_column;
    }

    async delete(idColumn: number): Promise<void> {
        await this.connection.query("delete from fullstackjs.columns where id_column = $1", [idColumn]);
    }

}
