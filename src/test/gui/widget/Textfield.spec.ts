import ComponentType from '../../../typescript/gui/ComponentType';
import InternalWidgetID from '../../../typescript/gui/widget/InternalWidgetId';
import Textfield from '../../../typescript/gui/widget/Textfield';
import WidgetSize from '../../../typescript/interface/WidgetSize';

describe('Textfield', () => { 
    let widget: Textfield;

    beforeEach(() => {
        widget = document.createElement(ComponentType.TEXTFIELD) as Textfield;
    });

    afterEach(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    });
    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(Textfield);
    });

    test('should be rendered correctly', async () => {
        widget.size = WidgetSize.LARGE;
        window.document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-textfield');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-widgetsize-large');
    });
})