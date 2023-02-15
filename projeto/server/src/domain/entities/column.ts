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

    public get cards(): readonly Card[] {
        return this._cards;
    }

    public addCard(card: Card) {
        this._cards.push(card);
    }

    public addCards(cards: Card[]) {
        this._cards.push(...cards);
    }

    public get estimative() {
        return this._cards.reduce((total, card) => total += card.estimative, 0);
    }
}
