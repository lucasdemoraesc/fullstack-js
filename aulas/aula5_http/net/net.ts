import net from "net";

// O pacote net implementa um Socket, puro.

net.createServer((socket) => {
    socket.on("data", function (chunk) {
        console.log(chunk.toString());
        socket.end();
    });
}).listen(3000);
