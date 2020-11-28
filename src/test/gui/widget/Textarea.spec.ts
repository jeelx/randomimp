import ComponentType from '../../../typescript/gui/ComponentType';
import InternalWidgetID from '../../../typescript/gui/widget/InternalWidgetId';
import Textarea from '../../../typescript/gui/widget/TextArea';
import WidgetSize from '../../../typescript/interface/WidgetSize';

describe('Textarea', () => { 
    let widget: Textarea;

    beforeEach(() => {
        widget = document.createElement(ComponentType.TEXTAREA) as Textarea;
    });

    afterEach(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    });
    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(Textarea);
    });

    test('should be rendered correctly', async () => {
        widget.size = WidgetSize.LARGE;
        window.document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-textarea');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-widgetsize-large');
    });
})