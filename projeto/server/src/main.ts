import { BoardController } from "./infra/controllers/board-controller";
import { PgPromiseConnection } from "./infra/database/pg-promise-connection";
import { ExpressAdapter } from "./infra/http/ExpressAdapter";
import { BoardRepositoryDatabase } from "./infra/repositories/database/board-repository.database";
import { CardRepositoryDatabase } from "./infra/repositories/database/card-repository.database";
import { ColumnRepositoryDatabase } from "./infra/repositories/database/column-repository.database";
import { BoardService } from "./services/board-service";
import { CardService } from "./services/card-service";
import { ColumnService } from "./services/column-service";

const connection = new PgPromiseConnection();
const http = new ExpressAdapter();

const boardRepository = new BoardRepositoryDatabase(connection);
const columnRepository = new ColumnRepositoryDatabase(connection);
const cardRepository = new CardRepositoryDatabase(connection);

const columnService = new ColumnService(columnRepository);
const cardService = new CardService(cardRepository);
const boardService = new BoardService(boardRepository, columnService, cardService);

new BoardController(http, boardService, columnService, cardService);

http.listen(3000);
