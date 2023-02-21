import { ORM } from "./data/ORM";
import { PostgreSQLConnection } from "./data/PostgreSQLConnection";
import { Book } from "./entities/Book";
import { Car } from "./entities/Car";

async function init() {
    const connection = new PostgreSQLConnection();
    const orm = new ORM(connection);

    const book = new Book("Clean Code", "Uncle Bob");
    const car = new Car("Mercedez", "Benz");
    await orm.save(book);
    await orm.save(car);

    const books = await orm.list(Book);
    const cars = await orm.list(Car);
    console.log(books);
    console.log(cars);

    await connection.close();
}

init();
