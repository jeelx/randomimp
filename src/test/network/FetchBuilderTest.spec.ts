import FetchBuilder from '../../typescript/network/FetchBuilder';

describe('FetchBuilderTest', () => {

    it('should be creatable', () => {
        const builder = new FetchBuilder();
        expect(builder).toBeInstanceOf(FetchBuilder);
    });

});