import ButtonGroup from '../../../typescript/gui/widget/ButtonGroup';
import WidgetSize from '../../../typescript/interface/WidgetSize';

describe('ButtonGroup', () => { 
    test('should be creatable', () => {
        const widget: ButtonGroup = document.createElement('randomimp-buttongroup') as ButtonGroup;
        expect(widget).toBeInstanceOf(ButtonGroup);
    });

    test('should be rendered correctly', async () => {
        const widget: ButtonGroup = document.createElement('randomimp-buttongroup') as ButtonGroup;
        widget.size = WidgetSize.LARGE;
        window.document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.shadowRoot.getElementById('widget').className).toContain('randomimp-buttongroup');
        expect(widget.shadowRoot.getElementById('widget').className).toContain('randomimp-widgetsize-large');
    });
})