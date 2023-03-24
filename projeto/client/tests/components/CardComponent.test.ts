import { mount } from "@vue/test-utils";
import CardComponentVue from "../../src/components/CardComponent.vue";
import Board from "../../src/entities/Board";

test("Deve testar o column component", async () => {
    const board = new Board("Projeto 1", "Teste");
    board.addColumn("Todo", true);
    board.addColumn("Doing", true);
    board.addColumn("Done", false);

    board.addCard("Todo", "Atividade 1", 3);
    board.addCard("Todo", "Atividade 2", 2);
    board.addCard("Todo", "Atividade 3", 1);

    const wrapper = mount(CardComponentVue, {
        props: {
            board: board,
            column: board.columns[0],
            card: board.columns[0].cards[0]
        }
    });

    expect(wrapper.get(".card-title").text()).toBe("Atividade 1");
    expect(wrapper.get(".card-estimative").text()).toBe("(3)");

    await wrapper.get(".card-increase-estimative").trigger("click");
    expect(wrapper.get(".card-estimative").text()).toBe("(4)");

    await wrapper.get(".card-decrease-estimative").trigger("click");
    await wrapper.get(".card-decrease-estimative").trigger("click");
    expect(wrapper.get(".card-estimative").text()).toBe("(2)");
});
