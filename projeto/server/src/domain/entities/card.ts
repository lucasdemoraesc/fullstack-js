export class Card {

    constructor(
        readonly idColumn: number,
        readonly idCard: number | undefined,
        readonly title: string,
        readonly estimative: number
    ) {
        if (title === "") throw new Error("Title is required");
        if (estimative < 0) throw new Error("Estimative must be positive");
    }
}
