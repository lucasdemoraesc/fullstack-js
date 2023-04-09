import { Card } from "../entities/card";

export interface CardRepository {
    getAllByIdColumn(idColumn: number): Promise<Card[]>;
    get(idCard: number): Promise<Card>;
    save(card: Card): Promise<number>;
    update(card: Card): Promise<void>;
    delete(idCard: number): Promise<void>;
}
