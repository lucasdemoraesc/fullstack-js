import { Card } from "../entities/card";

export interface CardRepository {
    getAllByIdColumn(idColumn: number): Promise<Card[]>;
}
