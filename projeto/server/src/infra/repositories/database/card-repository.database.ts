import { Card } from "../../../domain/entities/card";
import { CardRepository } from "../../../domain/repositories/card-repository";
import { Connection } from "../../database/connection";

export class CardRepositoryDatabase implements CardRepository {

    constructor(readonly connection: Connection) { }

    async getAllByIdColumn(idColumn: number): Promise<Card[]> {
        const cardsData: any[] = await this.connection.query("select * from fullstackjs.cards where id_column = $1", [idColumn]);
        const cards: Card[] = [];

        cardsData.forEach(cardData => {
            cards.push(new Card(cardData.id_column, cardData.id_card, cardData.title, cardData.estimative));
        });

        return cards;
    }

    async get(idCard: number): Promise<Card> {
        const [cardData] = await this.connection.query("select * from fullstackjs.cards where id_card = $1", [idCard]);
        if (!cardData) throw new Error("Card not found");
        return new Card(cardData.id_column, cardData.id_card, cardData.title, cardData.estimative);
    }

    async save(card: Card): Promise<number> {
        const [cardData] = await this.connection.query("insert into fullstackjs.cards (id_column, title, estimative) values ($1, $2, $3) returning id_card", [card.idColumn, card.title, card.estimative]);
        return cardData.id_card;
    }

    async update(card: Card): Promise<void> {
        await this.connection.query("update fullstackjs.cards set title = $1, estimative = $2 where id_card = $3", [card.title, card.estimative, card.idCard]);
    }

    async delete(idCard: number): Promise<void> {
        await this.connection.query("delete from fullstackjs.cards where id_card = $1", [idCard]);
    }
}
