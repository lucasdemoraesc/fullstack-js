// import fs from "fs";
import fs from "fs/promises";

// fs.readFile("teste.csv", "utf-8", (error, data) => {
//     console.log(data.toString());
// });

// async function read() {
//     const data = await fs.readFile("teste.csv", "utf-8");
//     console.log(data);
// }

// read();

function write() {
    const values: string[] = [];
    values.push(["Teste 1", "Teste 2", "Teste 3", "Teste 4"].join(";"));
    values.push(["Teste 1", "Teste 2", "Teste 3", "Teste 4"].join(";"));
    values.push(["Teste 1", "Teste 2", "Teste 3", "Teste 4"].join(";"));
    fs.writeFile("./teste.csv", values.join("\n"));
}

write();
