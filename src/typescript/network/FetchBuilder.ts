import { URL } from 'url';
import Logger from '../util/Logger';

class FetchBuilder { 
    private config: any;
    private abortController: AbortController;
    private parameter: Map<string, any>;
    private pathParameter: Map<string, any>;
    private url: string;
    private headers: Headers;
    private data: any;

    public constructor(customConfig?: any) {
        this.abortController = new AbortController();
        this.parameter = new Map();
        this.pathParameter = new Map();
        this.headers = new Headers();
        this.data = {};
        this.config = customConfig ?
            customConfig :
            {
                method: 'GET',
                credentials: 'include',
                headers: this.headers
            };
    
        this.config.signal = this.abortController.signal;
        this.config.signal.addEventListener('abort', () => Logger.get().debug('Fetch was aborted by client', this.url));
        window.addEventListener('beforeunload', () => this.abortController.abort());
    }

    public addParameter(key: string, value: any): FetchBuilder {
        if (value === undefined || value === null) { 
            Logger.get().warn(`key: ${key} has no value`);
        }
        this.parameter.set(key, value);
        return this;
    }

    public addPathParameter(key: string, value: any): FetchBuilder {
        if (value === undefined || value === null) { 
            Logger.get().warn(`key: ${key} has no value`);
        }
        this.pathParameter.set(key, value);
        return this;
    }

    public addOptionalParameter(key: string, value: any): FetchBuilder {
        if (value !== undefined && value !== null) {
            this.parameter.set(key, value);
        } else {
            Logger.get().warn(`key: ${key} has no value`);
        }
        return this;
    }

    public post(): FetchBuilder { 
        this.config.method = 'POST';
        return this;
    }

    public get(): FetchBuilder { 
        this.config.method = 'GET';
        return this;
    }

    public delete(): FetchBuilder { 
        this.config.method = 'DELETE';
        return this;
    }

    public setUrl(url: string): FetchBuilder { 
        this.url = url;
        return this;
    }

    public setBody(body: any): FetchBuilder { 
        this.config.body = body;
        return this;
    }

    public async execute(timeout?: number, showError: boolean = true): Promise<Response> {
        this.config.headers = this.headers;
        this.setPathParams();
        this.setParams();
        const start: Date = new Date();
        if (timeout) { 
            setTimeout(() => this.abortController.abort(), timeout * 1000);
        }

        return this.executeRequest()
            .then((response: Response) => this.handleError(response))
            .then((response: Response) => {
            Logger.get().debug(`Request successful ${new Date().getTime() - start.getTime()}ms`, this.getPathname(),response);
            return response;
        });
    }

    private setParams() {
        const isGet: boolean = this.config.method === 'GET';
        let i: number = 0;
        this.parameter.forEach((value: any, key: string) => {
            if (isGet) {
                this.url += i === 0 ? '?' : '&';
                this.url += `${key}=${value}`;
            } else {
                this.data[key] = value;
            }
            i++;
        });
        if (!isGet && !this.config.body) {
            this.headers.set('content-type', 'application/json; charset=utf-8');
            this.config.body = JSON.stringify(this.data);
        }
    }

    private setPathParams() {
        this.pathParameter.forEach((value: any, key: string) => {
            this.url += `;${key}=${value}`;
        });
    }

    private async handleError(response: Response): Promise<Response> { 
        return response;
    }

    private executeRequest(): Promise<any> { 
        return fetch(this.url, this.config);
    }

    private getPathname(): string { 
        let pathname: string;
        try {
            pathname = new URL(this.url).pathname;
        } catch (e: Error) { 
            pathname = this.url;
        }
        return pathname;
    }
}

export default FetchBuilder;