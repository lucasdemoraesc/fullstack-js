import { Card } from "./card";
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

    public get estimative() {
        return this._columns.reduce((total, column) => {
            if (column.hasEstimative)
                total += column.estimative;
            return total;
        }, 0);
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

    public addColumns(columns: Column[]) {
        this._columns.push(...columns);
    }

    public addCard(columnName: string, card: Card) {
        const column = this.columnByName(columnName);
        if (!column) throw new Error("Column not found");
        column.addCard(card);
    }

    public addCards(columnName: string, cards: Card[]) {
        const column = this.columnByName(columnName);
        if (!column) throw new Error("Column not found");
        column.addCards(cards);
    }
}
