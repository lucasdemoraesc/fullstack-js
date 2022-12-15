/*
    Vamos criar uma ferramenta para gestão utilizando um Kanban para equipes ágeis e para isso temos os seguintes testes:
        1 - Deve criar um novo quadro com nome e descrição OK
        2 - Deve permitir incluir colunas no quadro (por exemplo: Todo, Doing e Done) indicando se ela deve ou não contar o tempo do cartão
        3 - Deve associar cartões em cada uma das colunas contendo o título da tarefa e a estimativa em horas
        4 - Deve ser possível calcular a estimativa total de cada coluna
*/

import { Board } from "./domain/board";
import { Card } from "./domain/card";
import { Column } from "./domain/column";

const board = new Board("Meu quadro", "Quadro do curso do Rodrigo");

board.addColumn(new Column("Todo"));
board.addColumn(new Column("Doing", true));
board.addColumn(new Column("Done"));

board.columnByName("Todo")?.addCard(new Card("Estudar TS", 1));
board.columnByName("Todo")?.addCard(new Card("Estudar JS", 0.5));
board.columnByName("Todo")?.addCard(new Card("Namorar", 2));

console.log(`${board.columnByName("Todo")?.calculateEstimate()}hrs`);
