import { Column } from "../../src/domain/entities/column";

test("Deve criar uma coluna", () => {
    const column = new Column(1, "Todo");
    expect(column.name).toBe("Todo");
    expect(column.hasEstimative).toBeFalsy();
});

test("Não deve criar uma coluna sem nome", () => {
    expect(() => new Column(1, "")).toThrow(new Error("Name is required"));
});
