import Textfield from '../../../typescript/gui/widget/Textfield';
import WidgetSize from '../../../typescript/interface/WidgetSize';

describe('Textfield', () => { 
    test('should be creatable', () => {
        const widget: Textfield = document.createElement('randomimp-textfield') as Textfield;
        expect(widget).toBeInstanceOf(Textfield);
    });

    test('should be rendered correctly', async () => {
        const widget: Textfield = document.createElement('randomimp-textfield') as Textfield;
        widget.size = WidgetSize.LARGE;
        window.document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.shadowRoot.getElementById('widget').className).toContain('randomimp-textfield');
        expect(widget.shadowRoot.getElementById('widget').className).toContain('randomimp-widgetsize-large');
    });
})