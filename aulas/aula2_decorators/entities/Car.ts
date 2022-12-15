import { column } from "../decorators/column";
import { entity } from "../decorators/entity";
import { Entity } from "./Entity";


@entity({ schema: "public", table: "car" })
export class Car extends Entity {
    @column({ name: "br" }) brand: string;
    @column({ name: "md" }) model: string;

    constructor(brand: string, model: string) {
        super();
        this.brand = brand;
        this.model = model;
    }
}
