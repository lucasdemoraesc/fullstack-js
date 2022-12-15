import { column } from "../decorators/column";
import { entity } from "../decorators/entity";
import { Entity } from "./Entity";


@entity({ schema: "public", table: "book" })
export class Book extends Entity {

    @column({ name: "title" })
    title: string;

    @column({ name: "author" })
    author: string;

    constructor(title: string, author: string) {
        super();
        this.title = title;
        this.author = author;
    }
}
