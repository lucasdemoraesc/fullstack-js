import child_process from "child_process";

const cp1 = child_process.fork("fork/worker_date.js");
const cp2 = child_process.fork("fork/worker_date.js");
const cp3 = child_process.fork("fork/worker_date.js");

cp1.on("message", (data) => {
    console.log(data);
});
cp2.on("message", (data) => {
    console.log(data);
});
cp3.on("message", (data) => {
    console.log(data);
});
