import { Card } from "./card";

export class Column {

    private _cards: Card[];

    constructor(
        readonly name: string,
        readonly hasEstimative: boolean = false
    ) {
        if (name === "") throw new Error("Name is required");

        this._cards = [];
    }

    public addCard(card: Card) {
        this._cards.push(card);
    }

    public calculateEstimate() {
        return this._cards.reduce((partialSum, x) => partialSum + x.estimative, 0);
    }
}
