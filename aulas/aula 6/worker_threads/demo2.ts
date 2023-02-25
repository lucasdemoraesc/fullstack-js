import { isMainThread, Worker } from "worker_threads";

function fibonacci(n: number): number {
    return !n || n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (isMainThread) {
    console.log("Main thread", process.pid);
    new Worker(__filename);
    new Worker(__filename);
    new Worker(__filename);
}
else {
    console.log("Worker thread", process.pid);
    const f = fibonacci(46);
    console.log(f);
}
