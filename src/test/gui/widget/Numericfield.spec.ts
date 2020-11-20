import ComponentType from '../../../typescript/gui/ComponentType';
import InternalWidgetID from '../../../typescript/gui/widget/InternalWidgetId';
import Numericfield from '../../../typescript/gui/widget/Numericfield';
import WidgetSize from '../../../typescript/interface/WidgetSize';

describe('Numericfield', () => { 
    let widget: Numericfield;

    beforeEach(() => {
        widget = document.createElement(ComponentType.NUMERICFIELD) as Numericfield;
    });

    afterEach(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    });

    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(Numericfield);
    });

    test('should be rendered correctly', async () => {
        widget.size = WidgetSize.LARGE;
        window.document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-numericfield');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-widgetsize-large');
    });

})