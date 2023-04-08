import { mount } from "@vue/test-utils";
import ColumnComponentVue from "../../src/components/ColumnComponent.vue";
import Board from "../../src/entities/Board";

test("Deve testar o column component", async () => {
    const board = new Board(1, "Projeto 1", "Teste");
    board.addColumn("Todo", true);
    board.addColumn("Doing", true);
    board.addColumn("Done", false);

    board.addCard("Todo", "Atividade 1", 3);
    board.addCard("Todo", "Atividade 2", 2);
    board.addCard("Todo", "Atividade 3", 1);

    const wrapper = mount(ColumnComponentVue, {
        props: {
            board: board,
            column: board.columns[0]
        }
    });

    expect(wrapper.get(".header h3").text()).toBe("Todo (6)");
    expect(wrapper.get(".column-estimative").text()).toBe("(6)");
    expect(wrapper.get(".badge").text()).toBe("3");
});
