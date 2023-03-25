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

}
