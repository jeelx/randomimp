import ComponentType from '../../../typescript/gui/ComponentType';
import EmailField from '../../../typescript/gui/widget/Emailfield';
import InternalWidgetID from '../../../typescript/gui/widget/InternalWidgetId';
import WidgetSize from '../../../typescript/interface/WidgetSize';

describe('Emailfield', () => { 
    let widget: EmailField;

    beforeEach(() => {
        widget = document.createElement(ComponentType.EMAILFIELD) as EmailField;
    });

    afterEach(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    });
    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(EmailField);
    });

    test('should be rendered correctly', async () => {
        widget.size = WidgetSize.LARGE;
        window.document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-emailfield');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-widgetsize-large');
    });
})