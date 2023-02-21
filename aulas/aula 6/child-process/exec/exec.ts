import child_process from "child_process";

child_process.exec("node exec/worker.js", (exception, output, error) => {
    if (!error && !exception)
        console.log(output);
    else {
        console.error(error || exception);
    }
});
