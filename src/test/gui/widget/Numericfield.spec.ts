import Numericfield from '../../../typescript/gui/widget/Numericfield';
import WidgetSize from '../../../typescript/interface/WidgetSize';

describe('Numericfield', () => { 
    test('should be creatable', () => {
        const widget: Numericfield = document.createElement('randomimp-numericfield') as Numericfield;
        expect(widget).toBeInstanceOf(Numericfield);
    });

    test('should be rendered correctly', async () => {
        const widget: Numericfield = document.createElement('randomimp-numericfield') as Numericfield;
        widget.size = WidgetSize.LARGE;
        window.document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.shadowRoot.getElementById('widget').className).toContain('randomimp-numericfield');
        expect(widget.shadowRoot.getElementById('widget').className).toContain('randomimp-widgetsize-large');
    });

})