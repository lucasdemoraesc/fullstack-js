export class Board {

    constructor(
        readonly idBoard: number | undefined,
        readonly name: string,
        readonly description?: string
    ) {
        if (name === "") throw new Error("Name is required");
    }
}
