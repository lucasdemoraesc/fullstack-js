import { isMainThread, parentPort, Worker } from "worker_threads";

// Comunicação entre threads

function fibonacci(n: number): number {
    return !n || n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (isMainThread) {
    console.log("Main thread", process.pid);
    const t1 = new Worker(__filename);
    const t2 = new Worker(__filename);
    const t3 = new Worker(__filename);

    t1.on("message", (data) => console.log(data));
    t2.on("message", (data) => console.log(data));
    t3.on("message", (data) => console.log(data));
}
else {
    console.log("Worker thread", process.pid);
    const f = fibonacci(42);
    parentPort?.postMessage(f);
}
