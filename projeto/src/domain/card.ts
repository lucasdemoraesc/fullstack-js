export class Card {

    private _title: string;
    private _timeEstimate: number;
    private _timeSpent: number;

    constructor(title: string, timeEstimate: number) {
        this._title = title;
        this._timeEstimate = timeEstimate;
        this._timeSpent = 0;
    }

    public get title() {
        return this._title;
    }

    public get timeEstimate() {
        return this._timeEstimate;
    }

    public get timeSpent() {
        return this._timeSpent;
    }
}
