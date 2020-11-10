import axios, { AxiosInstance } from 'axios';
import FetchBuilder from '../../typescript/network/FetchBuilder';

describe('FetchBuilderTest', () => {
    it('should be a singleton', () => { 
        try {
            new FetchBuilder();
        } catch (e: Error) { 
            expect(true).toBeTruthy();
        }
    })

    it('should get Instance of FetchBuilder', () => { 
        const builder = FetchBuilder.get();
        expect(builder).toBeInstanceOf(FetchBuilder);
    })

    it('should check default config', () => {
        const builder: FetchBuilder = FetchBuilder.get();
        const config: any = builder.getDefaultConfig();

        expect(config.baseUrl).toBe('http://localhost:3000/');
        expect(config.url).toBe('');
        expect(config.headers).toBe('');
        expect(config.timeout).toBe(1000);
        expect(config.responseType).toBe('json');
    });

    it('should get fetch', () => { 
        const builder: FetchBuilder = FetchBuilder.get();
        const fetch: AxiosInstance = builder.fetch('/test', { 'theme': 'red' });
        
    })
});