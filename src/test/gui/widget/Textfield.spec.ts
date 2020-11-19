import Textfield from '../../../typescript/gui/widget/Textfield';

describe('Textfield', () => { 
    test('should be creatable', () => {
        const widget: Textfield = document.createElement('randomimp-textfield') as Textfield;
        expect(widget).toBeInstanceOf(Textfield);
    });

})