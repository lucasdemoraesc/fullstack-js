import { mount } from "@vue/test-utils";
import NewColumnComponentVue from "../../src/components/NewColumnComponent.vue";
import Board from "../../src/entities/Board";
import { DomainEvent } from "../../src/events/DomainEvents";

test("Deve adicionar uma coluna em um quadro", async () => {
    const board = new Board(1, "Projeto 1", "Teste");
    board.addColumn("Todo", true);
    board.addColumn("Doing", true);
    board.addColumn("Done", false);
    const events: DomainEvent[] = [];
    board.on("addColumn", (event: DomainEvent) => {
        events.push(event);
    });

    const wrapper = mount(NewColumnComponentVue, {
        props: {
            board: board
        }
    });

    wrapper.get("input[name=column-name]").setValue("Teste tela");
    wrapper.get("#btn-new-column").trigger("click");
    expect(board.columns.length).toBe(4);
    expect(events).toHaveLength(1);
    expect(events[0].name).toBe("addColumn");
    expect(events[0].data.name).toBe("Teste tela");
});
