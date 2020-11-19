import Numericfield from '../../../typescript/gui/widget/Numericfield';

describe('Numericfield', () => { 
    test('should be creatable', () => {
        const widget: Numericfield = document.createElement('randomimp-numericfield') as Numericfield;
        expect(widget).toBeInstanceOf(Numericfield);
    });

})