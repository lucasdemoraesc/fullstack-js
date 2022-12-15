import { Card } from "./card";

export class Column {

    private _name: string;
    private _countTime: boolean;
    private _cards: Card[];

    constructor(name: string, countTime: boolean = false) {
        this._name = name;
        this._countTime = countTime;
        this._cards = [];
    }

    public get name() {
        return this._name;
    }

    public get countTime() {
        return this._countTime;
    }

    public addCard(card: Card) {
        this._cards.push(card);
    }

    public calculateEstimate() {
        return this._cards.reduce((partialSum, x) => partialSum + x.timeEstimate, 0);
    }
}
