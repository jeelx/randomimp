import ComponentType from '../../../typescript/gui/ComponentType';
import ButtonGroup from '../../../typescript/gui/widget/ButtonGroup';
import InternalWidgetID from '../../../typescript/gui/widget/InternalWidgetId';
import WidgetSize from '../../../typescript/interface/WidgetSize';

describe('ButtonGroup', () => { 
    let widget: ButtonGroup;

    beforeEach(() => {
        widget = document.createElement(ComponentType.BUTTONGROUP) as ButtonGroup;
    });

    afterEach(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    });

    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(ButtonGroup);
    });

    test('should be rendered correctly', async () => {
        widget.size = WidgetSize.LARGE;
        window.document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-buttongroup');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-widgetsize-large');
    });
})