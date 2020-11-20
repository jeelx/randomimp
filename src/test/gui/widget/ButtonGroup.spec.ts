import ButtonGroup from '../../../typescript/gui/widget/ButtonGroup';
import InternalWidgetID from '../../../typescript/gui/widget/InternalWidgetId';
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
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-buttongroup');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-widgetsize-large');
    });
})