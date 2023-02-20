export type CardOutput = {
    title: string;
    estimative: number;
};

export type ColumnOutput = {
    name: string;
    estimative: number;
    hasEstimative: boolean;
    cards: CardOutput[];
};

export type GetBoardOutput = {
    name: string,
    description?: string,
    estimative: number,
    columns: ColumnOutput[];
};
