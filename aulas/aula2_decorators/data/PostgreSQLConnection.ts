import pgp from "pg-promise";
import { Connection } from "../interfaces/Connection";

export class PostgreSQLConnection implements Connection {

    pgp: any;

    constructor() {
        this.pgp = pgp()("postgres://postgres:123456@localhost:5432");
    }
    query(statement: string, params: any): Promise<any> {
        return this.pgp.query(statement, params);
    }

    close(): Promise<void> {
        return this.pgp.$pool.end();
    }
}
