import express, { Request, Response } from "express";
import { Http, HttpMethod } from "./Http";

export class ExpressAdapter implements Http {

    readonly app: any;

    constructor() {
        this.app = express();
    }

    route(method: HttpMethod, url: string, callback: Function): void {
        this.app[method](url, async (req: Request, res: Response) => {
            const output = await callback(req.params, req.body);
            res.json(output);
        });
    }

    listen(port: number): void {
        this.app.listen(port);
    }

}
