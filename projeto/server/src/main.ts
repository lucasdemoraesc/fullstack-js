import { BoardController } from "./infra/controllers/board-controller";
import { PgPromiseConnection } from "./infra/database/pg-promise-connection";
import { ExpressAdapter } from "./infra/http/ExpressAdapter";

const connection = new PgPromiseConnection();
const http = new ExpressAdapter();

new BoardController(http, connection);

http.listen(3000);
