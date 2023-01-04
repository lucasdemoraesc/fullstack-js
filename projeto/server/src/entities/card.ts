export class Card {

    private _timeSpent: number;

    constructor(
        readonly title: string,
        readonly estimative: number
    ) {
        if (title === "") throw new Error("Title is required");
        if (estimative < 0) throw new Error("Estimative must be positive");

        this._timeSpent = 0;
    }

    public get timeSpent() {
        return this._timeSpent;
    }
}
