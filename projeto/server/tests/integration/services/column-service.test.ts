import { PgPromiseConnection } from "../../../src/infra/database/pg-promise-connection";
import { ColumnRepositoryDatabase } from "../../../src/infra/repositories/database/column-repository.database";
import { ColumnService } from "../../../src/services/column-service";


test("Deve retornar as colunas de um quadro por meio do Serviço", async () => {
    const connection = new PgPromiseConnection();
    const columnRepository = new ColumnRepositoryDatabase(connection);
    const columnService = new ColumnService(columnRepository);
    const columns = await columnService.getColumns(1);

    const [column1, column2, column3] = columns;
    expect(columns).toHaveLength(3);
    expect(column1.name).toBe("Todo");
    expect(column2.name).toBe("Doing");
    expect(column2.hasEstimative).toBeTruthy();
    expect(column3.name).toBe("Done");
    await connection.close();
});

test("Deve salvar uma coluna por meio do Serviço", async () => {
    const connection = new PgPromiseConnection();
    const columnRepository = new ColumnRepositoryDatabase(connection);
    const columnService = new ColumnService(columnRepository);
    const idColumn = await columnService.saveColumn(1, { name: "Teste: Salvar por serviço", hasEstimative: true });
    const column = await columnService.getColumn(idColumn);

    expect(column.name).toBe("Teste: Salvar por serviço");
    expect(column.hasEstimative).toBeTruthy();

    await columnService.deleteColumn(idColumn);

    await connection.close();
});
