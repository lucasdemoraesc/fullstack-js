interface Car {
    brand: string;
    model?: string;
}

// Required torna todas as props obrigatórias
const car: Required<Car> = {
    brand: "Fiat",
    model: "Uno"
};
