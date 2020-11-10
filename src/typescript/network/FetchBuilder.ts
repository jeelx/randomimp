import axios, { AxiosInstance } from 'axios';
import Logger from '../util/Logger';

class FetchBuilder { 
    private config: any;

    public constructor(customConfig?: any) { 
        this.config = customConfig ?
            customConfig :
            {
            baseUrl: 'http://localhost:3000/',
            url: '',
            timeout: 1000,
            headers: '',
            responseType: 'json'
        };
    }

    public fetch(url: string, params: any): AxiosInstance { 
        const axiosConfig: any = {
            ...this.config,
            params,
            url
        }
        const fetch: AxiosInstance = axios.create(axiosConfig);
        fetch.interceptors.request.use((config: any) => {
            Logger.get().debug('Request with config:', config);
            return config;
        }, (error: any) => Promise.reject(error));
        fetch.interceptors.response.use((response: any) => {
            Logger.get().debug('Request response:', response);
            return response;
        }, (error: any) => Promise.reject(error));
        return fetch;
    }

    public getConfig(): any {
        return this.config;
    }
}

export default FetchBuilder;