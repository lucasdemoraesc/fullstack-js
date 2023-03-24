import { mount } from "@vue/test-utils";
import BoardComponentVue from "../../src/components/BoardComponent.vue";
import Board from "../../src/entities/Board";

test("Deve testar o board component", async () => {
    const board = new Board("Projeto 1", "Teste");
    board.addColumn("Todo", true);
    board.addColumn("Doing", true);
    board.addColumn("Done", false);

    board.addCard("Todo", "Atividade 1", 3);
    board.addCard("Todo", "Atividade 2", 2);
    board.addCard("Todo", "Atividade 3", 1);

    const wrapper = mount(BoardComponentVue, {
        props: {
            board: board
        }
    });

    expect(wrapper.get("#estimative").text()).toBe("6");
});
