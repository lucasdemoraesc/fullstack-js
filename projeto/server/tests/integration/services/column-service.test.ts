import { PgPromiseConnection } from "../../../src/infra/database/pg-promise-connection";
import { ColumnRepositoryDatabase } from "../../../src/infra/repositories/database/column-repository.database";
import { ColumnService } from "../../../src/services/column-service";

test("Deve retornar as colunas de um quadro por meio do Serviço", async () => {
    const connection = new PgPromiseConnection();
    const columnRepository = new ColumnRepositoryDatabase(connection);
    const boardService = new ColumnService(columnRepository);
    const columns = await boardService.getColumns(1);

    const [column1, column2, column3] = columns;
    expect(columns).toHaveLength(3);
    expect(column1.name).toBe("Todo");
    expect(column2.name).toBe("Doing");
    expect(column2.hasEstimative).toBeTruthy();
    expect(column3.name).toBe("Done");
    await connection.close();
});
