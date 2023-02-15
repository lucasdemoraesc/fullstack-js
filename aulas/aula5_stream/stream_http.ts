import fs from "fs";
import http from "http";

http.createServer(async function (req, res) {
    const stream = fs.createReadStream("file.txt", "utf-8");
    stream.pipe(res);
}).listen(3000);
