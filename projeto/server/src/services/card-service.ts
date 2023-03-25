import { CardRepository } from "../domain/repositories/card-repository";
import { CardOutput } from "./types";

export class CardService {

    constructor(protected readonly cardRepository: CardRepository) {
    }

    async getCards(idColumn: number) {
        const cards = await this.cardRepository.getAllByIdColumn(idColumn);
        return cards.map(card => (card as CardOutput));
    }
}
