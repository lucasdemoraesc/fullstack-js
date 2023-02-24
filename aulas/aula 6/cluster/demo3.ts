import { default as cluster } from "cluster";

function fibonacci(n: number): number {
    return !n || n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (cluster.isPrimary) {
    console.log("primary:", process.pid);
    for (let i = 0; i < 3; i++) {
        const worker = cluster.fork();
        console.log(`worker ${i}`, worker.process.pid);

        worker.on("message", (data) => {
            console.log(`${i} data`, data);
        });
    }
}
else {
    console.log("worker", process.pid);
    const f = fibonacci(43);
    process.send!(`${process.pid} ${f}`);
}
