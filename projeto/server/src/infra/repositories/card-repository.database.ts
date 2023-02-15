import { Card } from "../../domain/entities/card";
import { CardRepository } from "../../domain/repositories/card-repository";
import { Connection } from "../database/connection";

export class CardRepositoryDatabase implements CardRepository {

    constructor(readonly connection: Connection) { }

    async getAllByIdColumn(idColumn: number): Promise<Card[]> {
        const cardsData = await this.connection.query("select * from fullstackjs.cards where id_column = $1", [idColumn]);
        const cards: Card[] = [];

        for (const columnData of cardsData)
            cards.push(new Card(columnData.title, columnData.estimative));

        return cards;
    }

}
