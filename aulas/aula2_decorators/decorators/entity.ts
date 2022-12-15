export function entity(config: { schema: string; table: string; }) {
    return (constructor: Function) => {
        constructor.prototype.schema = config.schema;
        constructor.prototype.table = config.table;
    };
}
