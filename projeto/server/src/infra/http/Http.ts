export interface Http {
    route(method: HttpMethod, url: string, callback: Function): void;
    listen(port: number): void;
}

export type HttpMethod = 'get' | 'post' | 'head' | 'put' | 'delete' | 'connect' | 'options' | 'trace' | 'patch';
