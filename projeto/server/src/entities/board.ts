import { Column } from "./column";

export class Board {

    private _columns: Column[];

    constructor(
        readonly name: string,
        readonly description?: string
    ) {
        if (name === "") throw new Error("Name is required");

        this._columns = [];
    }

    public get columns() {
        return this._columns as ReadonlyArray<Column>;
    }

    public columnByName(name: string) {
        return this._columns.find(x => x.name === name);
    }

    public columnByIndex(index: number) {
        return this._columns[index];
    }

    public addColumn(column: Column) {
        this._columns.push(column);
    }
}
