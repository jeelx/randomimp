import ButtonGroup from '../../../typescript/gui/widget/ButtonGroup';

describe('ButtonGroup', () => { 
    test('should be creatable', () => {
        const widget: ButtonGroup = document.createElement('randomimp-buttongroup') as ButtonGroup;
        expect(widget).toBeInstanceOf(ButtonGroup);
    });

})