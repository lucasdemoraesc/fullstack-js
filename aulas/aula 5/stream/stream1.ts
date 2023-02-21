import fs from "fs";

async function read1() {
    // Isto faz traz todo o arquivo para a memória depois o envia para stdout
    const file = await require("fs/promises").readFile("file.txt", "utf-8");
    process.stdout.write(file);
}

async function read2() {
    const stream = fs.createReadStream("file.txt", "utf-8");
    stream.pipe(process.stdout);
}

read2();
