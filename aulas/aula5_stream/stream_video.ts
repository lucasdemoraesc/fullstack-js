import fs from "fs";
import http from "http";

const fileSize = fs.statSync("video.mp4").size;

http.createServer(async function (req, res) {
    const range = req.headers.range;
    let start = 0;
    let end = 0;
    if (range) {
        let [startRange, endRange] = range.replace(/bytes=/, "").split("-");
        start = parseInt(startRange);
        end = endRange ? parseInt(endRange) : fileSize - 1;
    }

    res.writeHead(206, {
        "content-type": "video/mp4",
        "content-length": (end - start) + 1,
        "content-range": `bytes ${start}-${end}/${fileSize}`
    });

    const stream = fs.createReadStream("video.mp4", { start, end });
    stream.pipe(res);
}).listen(3000);
