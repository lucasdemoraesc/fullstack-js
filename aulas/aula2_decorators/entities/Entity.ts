
export class Entity {
    [key: string]: any;
    declare schema: string;
    declare table: string;
    declare columns: { property: string; column: string; }[];
}
