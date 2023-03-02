import axios from "axios";
import Board from "../entities/Board";
import BoardService from "./BoardService";

export default class BoardServiceHttp implements BoardService {

    async getBoards(): Promise<Board[]> {
        throw new Error("Method not implemented.");
    }

    async getBoardById(idBoard: number): Promise<Board> {
        const response = await axios({
            url: `http://localhost:3000/boards/${idBoard}`,
            method: "get"
        });
        const boardData = response.data;
        const board = new Board(boardData.name, boardData.description);
        for (const columnData of boardData.columns) {
            board.addColumn(columnData.name, columnData.hasEstimative);
            for (const cardData of columnData.cards) {
                board.addCard(columnData.name, cardData.title, cardData.estimative);
            }
        }

        return board;
    }
}
