import { Entity } from "../entities/Entity";
import { Connection } from "../interfaces/Connection";

export class ORM {

    constructor(readonly connection: Connection) {
    }

    async save(entity: Entity) {
        const columns = entity.columns.map(column => column.column).join(",");
        const params = entity.columns.map((column, index) => `$${index + 1}`).join(",");
        const values = entity.columns.map(column => entity[column.property]);

        const statement = `insert into ${entity.schema}.${entity.table} (${columns}) values (${params});`;
        this.connection.query(statement, [...values]);
    }

    async list(entity: Function) {
        return this.connection.query(`select * from ${entity.prototype.schema}.${entity.prototype.table}`, []);
    }
}
