import child_process from "child_process";

const fbProcess1 = child_process.spawn("node", ["spawn/worker_fibonacci.js"]);
const fbProcess2 = child_process.spawn("node", ["spawn/worker_fibonacci.js"]);
const fbProcess3 = child_process.spawn("node", ["spawn/worker_fibonacci.js"]);

fbProcess1.stdout.on("data", (data) => {
    console.log(data.toString());
});
fbProcess2.stdout.on("data", (data) => {
    console.log(data.toString());
});
fbProcess3.stdout.on("data", (data) => {
    console.log(data.toString());
});
