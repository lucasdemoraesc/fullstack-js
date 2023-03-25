export type BoardsOutput = {
    idBoard: number;
    name: string;
    description?: string;
};

export type BoardOutput = BoardsOutput & {
    estimative: number;
    columns: ColumnOutput[];
};

export type ColumnsOutput = {
    idColumn: number;
    name: string;
    hasEstimative: boolean;
};

export type ColumnOutput = ColumnsOutput & {
    estimative: number;
    cards: CardOutput[];
};

export type CardOutput = {
    idCard: number;
    title: string;
    estimative: number;
};
