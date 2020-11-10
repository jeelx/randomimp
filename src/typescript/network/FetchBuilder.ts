import axios, { AxiosInstance } from 'axios';

class FetchBuilder { 
    private static INSTANCE: FetchBuilder;
    private static DEFAULT_CONFIG: any = {
        baseUrl: 'http://localhost:3000/',
        url: '',
        timeout: 1000,
        headers: '',
        responseType: 'json'
    };

    private constructor() { }

    public static get(): FetchBuilder { 
        if (!this.INSTANCE) { 
            this.INSTANCE = new FetchBuilder();
        }
        return this.INSTANCE;
    }

    public fetch(url: string, params: any): AxiosInstance { 
        const axiosConfig: any = {
            ...FetchBuilder.DEFAULT_CONFIG,
            params,
            url
        }
        return axios.create(axiosConfig);
    }

    public getDefaultConfig(): any {
        return FetchBuilder.DEFAULT_CONFIG;
    }
}

export default FetchBuilder;