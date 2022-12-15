import express from "express";

export default class HttpServer {
    app: any;

    constructor() {
        this.app = express();
    }

    route(config: { method: string, path: string; }) {
        return (target: any, propertyKey: string, descriptor: any) => {
            this.app[config.method](config.path, function (req: any, res: any) {
                const output = descriptor.value(req.params, req.body);
                res.json(output);
            });
        };
    }

    listen(port: number) {
        this.app.listen(port);
    }
}
