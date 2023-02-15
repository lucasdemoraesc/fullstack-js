import net from "net";

// Montando uma response pura

net.createServer((socket) => {
    let request: Request;
    let response: Response;

    let buffer = Buffer.alloc(0);
    let chunkCount = 0;
    let contentLength: number;

    socket.on("data", function (chunk) {
        chunkCount++;
        buffer = Buffer.concat(([buffer, chunk]));
        if (chunkCount === 1) {
            const requestRaw = chunk.toString("ascii");
            const [requestLineAndHeaders, body] = requestRaw.split("\r\n\r\n");
            const [requestLine, ...headersRaw] = requestLineAndHeaders.split("\r\n");
            const [method, url, protocol] = requestLine.split(" ");
            const headers: { [key: string]: string; } = {};

            for (const headerRaw of headersRaw) {
                const [key, value] = headerRaw.split(": ");
                headers[key] = value;
            }

            request = new Request(method, url, protocol, headers);
            contentLength = parseInt(headers["Content-Length"]);
        }

        const lastChunk = contentLength && buffer.length > contentLength;
        if (lastChunk) {
            if (request) {
                const encoding = request.headers["Content-Encoding"] as BufferEncoding;
                const data = buffer.toString(encoding);
                const [, body] = data.split(("\r\n\r\n"));
                request.body = body;
            }

            console.log(request);

            response = new Response(200, { "content-type": "text/plain", "User Agent": "net" }, "That's all folks!");
            socket.write(response.value || '');
            socket.end();
        }
    });
}).listen(3000);

class Request {

    body?: string;

    constructor(
        readonly method: string,
        readonly url: string,
        readonly protocol: string,
        readonly headers: { [key: string]: string; }
    ) {

    }
}

class Response {

    value?: string;
    statuses: { [key: string]: string; } = {
        200: "OK"
    };

    constructor(
        readonly statusCode: number,
        readonly headers: { [key: string]: string; },
        readonly body: string
    ) {
        const separator = "\r\n";
        const responseLine = `HTTP/1.1 ${statusCode} ${this.statuses[statusCode]}`;
        this.value = [
            responseLine,
            separator,
            Object.entries(headers).map(entry => `${entry[0]}:${entry[1]}`).join(separator),
            separator,
            body,
            separator
        ].join('');
    }
}
