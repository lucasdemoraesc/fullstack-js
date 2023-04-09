export default class Card {

    idCard?: number;

    constructor(readonly title: string, public estimative: number) {
    }

    public increaseEstimative() {
        this.estimative++;
    }

    public decreaseEstimative() {
        if (this.estimative > 0)
            this.estimative--;
    }
}
