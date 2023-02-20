import pgp from "pg-promise";
import { Connection } from "./connection";

export class PgPromiseConnection implements Connection {

    connection: any;

    constructor() {
        this.connection = pgp()("postgres://postgres:123456@localhost:5432");
    }

    query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params);
    }

    close(): Promise<void> {
        return this.connection.$pool.end();
    }
}
