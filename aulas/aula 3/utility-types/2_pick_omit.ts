interface Book {
    title: string;
    author: string;
    price: number;
}

const book: Book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 49
};

function updateProperties(updatedProperties: Partial<Book>) {
    return Object.assign(book, updatedProperties);
}

function updatePrice(prop: Pick<Book, "price">) {
    book.price = prop.price;
    return book;
}

function updateAuthor(prop: Omit<Book, "title" | "price">) {
    return { ...book, ...prop };
}

const updatedProperties = {
    title: "Teste",
    price: 69,
    author: "Novo"
};

console.log(updatePrice(updatedProperties));
console.log(updateAuthor(updatedProperties));
console.log(updateProperties(updatedProperties));
