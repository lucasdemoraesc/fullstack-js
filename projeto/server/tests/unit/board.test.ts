import { Board } from "../../src/domain/entities/board";

test("Deve criar um quadro", () => {
    const board = new Board(1, "Projeto 1");
    expect(board.name).toBe("Projeto 1");
});

test("Não deve criar um quadro sem nome", () => {
    expect(() => new Board(1, "")).toThrow(new Error("Name is required"));
});
