import { DomainEvent } from "../events/DomainEvents";
import { BaseEntity } from "./BaseEntity";
import Card from "./Card";
import Column from "./Column";

export default class Board extends BaseEntity {

    public columns: Column[];

    constructor(readonly idBoard: number, readonly name: string, readonly description?: string) {
        super();
        this.columns = [];
    }

    public columnByName(name: string) {
        return this.columns.find(column => column.name === name);
    }

    public addColumn(name: string, hasEstimative: boolean) {
        this.columns.push(new Column(name, hasEstimative));
        this.publish(new DomainEvent("addColumn", { idBoard: 1, name, hasEstimative }));
    }

    public addCard(columnName: string, cardTitle: string, cardEstimative: number) {
        const column = this.columnByName(columnName);
        column?.cards.push(new Card(cardTitle, cardEstimative));
    }

    public increaseEstimativeOf(card: Card) {
        card.increaseEstimative();
    }

    public decreaseEstimativeOf(card: Card) {
        card.decreaseEstimative();
    }

    public get estimative() {
        return this.columns.reduce((total, column) => {
            if (column.hasEstimative)
                total += column.estimative;
            return total;
        }, 0);
    }
}
