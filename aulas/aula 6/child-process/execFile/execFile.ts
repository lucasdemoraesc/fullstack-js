import child_process from "child_process";

child_process.execFile("node", ["execFile/worker.js"], (exception, output, error) => {
    console.log(output);
});
