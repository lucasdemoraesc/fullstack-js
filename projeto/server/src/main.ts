import { BoardController } from "./infra/controllers/board-controller";
import { PgPromiseConnection } from "./infra/database/pg-promise-connection";
import { ExpressAdapter } from "./infra/http/ExpressAdapter";
import { BoardRepositoryDatabase } from "./infra/repositories/database/board-repository.database";
import { CardRepositoryDatabase } from "./infra/repositories/database/card-repository.database";
import { ColumnRepositoryDatabase } from "./infra/repositories/database/column-repository.database";

const connection = new PgPromiseConnection();
const http = new ExpressAdapter();

const boardRepository = new BoardRepositoryDatabase(connection);
const columnRepository = new ColumnRepositoryDatabase(connection);
const cardRepository = new CardRepositoryDatabase(connection);

new BoardController(http, connection, boardRepository, columnRepository, cardRepository);

http.listen(3000);
