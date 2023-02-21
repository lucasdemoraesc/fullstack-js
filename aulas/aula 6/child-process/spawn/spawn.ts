import child_process from "child_process";

const workerProcess = child_process.spawn("node", ["spawn/worker.js"]);

workerProcess.stdout.on("data", (data) => {
    console.log(data.toString());
});

workerProcess.stderr.on("data", (data) => {
    console.error(data.toString());
});
