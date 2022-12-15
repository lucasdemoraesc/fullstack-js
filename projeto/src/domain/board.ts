import { Column } from "./column";

export class Board {

    private _name: string;
    private _description: string;
    private _columns: Column[];

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
        this._columns = [];
    }

    public get name() {
        return this._name;
    }

    public get description() {
        return this._description;
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
