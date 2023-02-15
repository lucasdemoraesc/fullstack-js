import http from "http";

http.createServer((req, res) => {
    let body = "";
    let i = 0;
    const encoding = req.headers["content-type"];
    console.log(encoding);
    req.on("data", (chunk) => {
        body = chunk;
        i = i + 1;
    });
    req.on("end", () => {
        console.log(body);
        console.log(i);
        res.end();
    });
}).listen(3000);
