import { default as cluster } from "cluster";
import http from "http";
import { cpus } from 'os';

function fibonacci(n: number): number {
    return !n || n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (cluster.isPrimary) {
    console.log("primary:", process.pid);
    for (let i = 0; i < cpus().length; i++) {
        cluster.fork();
    }
}
else {
    console.log("worker", process.pid);
    http.createServer((req, res) => {
        const f = fibonacci(46);
        console.log(f);
        res.write(`${process.pid} ${f}\n`);
        res.end();
    }).listen(3000);
}
