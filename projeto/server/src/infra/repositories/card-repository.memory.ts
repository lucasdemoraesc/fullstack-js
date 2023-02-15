import { Card } from "../../domain/entities/card";
import { CardRepository } from "../../domain/repositories/card-repository";

export class CardRepositoryMemory implements CardRepository {

    cards: Card[];

    constructor() {
        this.cards = [
            new Card("Estudar NodeJS", 2),
            new Card("Estudar Typescript", 2),
            new Card("Estudar Vue.js", 2)
        ];
    }
    async getAllByIdColumn(idColumn: number): Promise<Card[]> {
        return this.cards;
    }

}
