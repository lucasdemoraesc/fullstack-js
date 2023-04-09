import { Card } from "../domain/entities/card";
import { CardRepository } from "../domain/repositories/card-repository";
import { CardInput, CardOutput } from "./types";

export class CardService {

    constructor(protected readonly cardRepository: CardRepository) {
    }

    async getCards(idColumn: number) {
        const cards = await this.cardRepository.getAllByIdColumn(idColumn);
        return cards.map(card => {
            const cardOutput = (<CardOutput> {
                idCard: card.idCard,
                title: card.title,
                estimative: card.estimative,
            });
            return cardOutput;
        });
    }

    async getCard(idCard: number) {
        const card = await this.cardRepository.get(idCard);
        return card;
    }

    async saveCard(input: CardInput): Promise<number> {
        const idCard = await this.cardRepository.save(new Card(input.idColumn, undefined, input.title, input.estimative));
        return idCard;
    }

    async updateCard(input: CardInput): Promise<void> {
        const card = new Card(input.idColumn, input.idCard, input.title, input.estimative);
        await this.cardRepository.update(card);
    }

    async deleteCard(idCard: number): Promise<void> {
        await this.cardRepository.delete(idCard);
    }
}
