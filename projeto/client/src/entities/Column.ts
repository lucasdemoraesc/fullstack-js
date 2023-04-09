import Card from "./Card";

export default class Column {

    idColumn?: number;
    public cards: Card[];

    constructor(readonly name: string, readonly hasEstimative: boolean) {
        this.cards = [];
    }

    get estimative() {
        return this.cards.reduce((total, card) => total += card.estimative, 0);
    }

    cardById(idCard: number) {
        return this.cards.find(card => card.idCard === idCard);
    }

    deleteCard(idCard: number) {
        const card = this.cardById(idCard);
        if (!card) throw new Error("Card not found");
        this.cards.splice(this.cards.indexOf(card), 1);
    }

    addCard(card: Card) {
        this.cards.push(card);
    }
}
