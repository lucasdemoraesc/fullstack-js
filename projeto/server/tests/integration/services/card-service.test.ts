import { PgPromiseConnection } from "../../../src/infra/database/pg-promise-connection";
import { CardRepositoryDatabase } from "../../../src/infra/repositories/database/card-repository.database";
import { CardService } from "../../../src/services/card-service";

test("Deve retornar os cartões de uma coluna por meio da API", async function () {
    const connection = new PgPromiseConnection();
    const cardRepository = new CardRepositoryDatabase(connection);
    const cardService = new CardService(cardRepository);
    const cards = await cardService.getCards(1);

    const [column1, column2, column3] = cards;
    expect(cards).toHaveLength(3);
    expect(column1.title).toBe("Estudar NodeJS");
    expect(column2.title).toBe("Estudar Typescript");
    expect(column3.title).toBe("Estudar Vue.js");
    await connection.close();
});
