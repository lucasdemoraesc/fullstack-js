import { CardRepository } from "../domain/repositories/card-repository";

export class CardService {

    constructor(protected readonly cardRepository: CardRepository) {
    }

    async getCards(idColumn: number) {
        const cards = this.cardRepository.getAllByIdColumn(idColumn);
        return cards;
    }
}
