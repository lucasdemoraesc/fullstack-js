import { Board } from "../../src/entities/board";

test("Deve criar um quadro", function () {
    const board = new Board("Projeto 1");
    expect(board.name).toBe("Projeto 1");
});

test("Não deve criar um quadro sem nome", () => {
    expect(() => new Board("")).toThrow(new Error("Name is required"));
});
