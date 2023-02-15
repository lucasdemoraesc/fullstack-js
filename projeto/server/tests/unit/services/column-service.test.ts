import { ColumnRepositoryMemory } from "../../../src/infra/repositories/column-repository.memory";
import { ColumnService } from "../../../src/services/column-service";

test("Deve retornar as colunas de um quadro por meio do Serviço", async () => {
    const columnRepository = new ColumnRepositoryMemory();
    const boardService = new ColumnService(columnRepository);
    const columns = await boardService.getColumns(1);

    const [column1, column2, column3] = columns;
    expect(columns).toHaveLength(3);
    expect(column1.name).toBe("Todo");
    expect(column2.name).toBe("Doing");
    expect(column2.hasEstimative).toBeTruthy();
    expect(column3.name).toBe("Done");
});
