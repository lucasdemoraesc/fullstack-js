import child_process from "child_process";

const cp = child_process.fork("fork/worker_date.js");

cp.on("message", (data) => {
    console.log(data);
});
