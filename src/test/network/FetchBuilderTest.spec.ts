import FetchBuilder from '../../typescript/network/FetchBuilder';

describe('FetchBuilderTest', () => {

    it('should be creatable', () => { 
        const builder = new FetchBuilder();
        expect(builder).toBeInstanceOf(FetchBuilder);
    })

    it('should check default config', () => {
        const builder: FetchBuilder = new FetchBuilder();
        const config: any = builder.getConfig();

        expect(config.baseUrl).toBe('http://localhost:3000/');
        expect(config.url).toBe('');
        expect(config.headers).toBe('');
        expect(config.timeout).toBe(1000);
        expect(config.responseType).toBe('json');
    });

    it('should get fetch', () => {
        const builder: FetchBuilder = new FetchBuilder();
        const fetch = builder.fetch('/test', { 'theme': 'red' });
        expect(fetch.defaults.params.theme).toBe('red');
        expect(fetch.defaults.url).toBe('/test');
    });

    it('create fetch with custom config', () => {
        const customConfig: any = {
            baseUrl: 'http://localhost:5000/',
            url: '',
            timeout: 5000,
            headers: '',
            responseType: 'xml'
        }
        const builder: FetchBuilder = new FetchBuilder(customConfig);
        const config: any = builder.getConfig();
        expect(config.baseUrl).toBe('http://localhost:5000/');
        expect(config.url).toBe('');
        expect(config.headers).toBe('');
        expect(config.timeout).toBe(5000);
        expect(config.responseType).toBe('xml');
    });

});