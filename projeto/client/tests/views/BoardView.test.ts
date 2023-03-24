import { mount } from "@vue/test-utils";
import Board from "../../src/entities/Board";
import BoardService from "../../src/services/BoardService";
import BoardViewVue from "../../src/views/BoardView.vue";

test("Deve testar o board view", async () => {
    const BoardService: BoardService = {
        async getBoardById(idBoard: number): Promise<Board> {
            const board = new Board("Projeto 1");
            board.addColumn("Todo", true);
            board.addColumn("Doing", true);
            board.addColumn("Done", false);
            board.addCard("Todo", "Atividade 1", 3);
            board.addCard("Todo", "Atividade 2", 2);
            board.addCard("Todo", "Atividade 3", 1);
            return board;
        }
    };

    const wrapper = mount(BoardViewVue, {
        global: {
            provide: {
                BoardService
            }
        }
    });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    expect(wrapper.get("#estimative").text()).toBe("6");
});
