
export class Column {

    constructor(
        readonly idBoard: number,
        readonly idColumn: number,
        readonly name: string,
        readonly hasEstimative: boolean = false
    ) {
        if (name === "") throw new Error("Name is required");
    }
}
