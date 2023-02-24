import { default as cluster } from "cluster";
import http from "http";

// Este exemplo inicia um Cluster Node com 4 Workers (instâncias) que executam cada
// uma cópia de um servidor HTTP, todas escutando na porta 3000. Ao receber uma request
// nesta porta o Node irá envia-la ao primeiro processo livre disponível para que seja
// processada.

if (cluster.isPrimary) {
    console.log("primary:", process.pid);
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
}
else {
    console.log("worker", process.pid);
    http.createServer((req, res) => {
        res.write(`${process.pid}\n`);
        res.end();
    }).listen(3000);
}
