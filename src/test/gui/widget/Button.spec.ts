import Button from '../../../typescript/gui/widget/Button';

describe('Button', () => { 
    test('should be creatable', () => {
        const widget: Button = document.createElement('randomimp-button') as Button;
        expect(widget).toBeInstanceOf(Button);
    });

})