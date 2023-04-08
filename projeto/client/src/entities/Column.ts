import Card from "./Card";

export default class Column {

    public cards: Card[];

    constructor(readonly name: string, readonly hasEstimative: boolean) {
        this.cards = [];
    }

    public get estimative() {
        return this.cards.reduce((total, card) => total += card.estimative, 0);
    }
}
