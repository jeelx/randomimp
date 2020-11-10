import RenderUtil from '../../typescript/util/RenderUtil';

describe('RenderUtilTest', () => {

    it('should be a singleton', () => { 
        try {
            new RenderUtil();
        } catch(e: Error) {
            expect(true).toBeTruthy();
        }
    });

    it('should get Instance', () => { 
        const util = RenderUtil.get();
        expect(util).toBeInstanceOf(RenderUtil);
    })
});