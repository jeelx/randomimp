import ComponentType from "../../../typescript/gui/ComponentType";
import InternalWidgetID from "../../../typescript/gui/widget/InternalWidgetId";
import Panel from '../../../typescript/gui/widget/Panel';

describe('Panel', () => {
    let widget: Panel;

    beforeEach(() => {
        widget = document.createElement(ComponentType.PANEL) as Panel;
    });

    afterEach(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    });

    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(Panel);
    });

    test('should be rendered correctly', async () => {
        widget.values = 'Das ist ein ganz langer Text, der das Panel füllen soll.'
        document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.values).toBe('Das ist ein ganz langer Text, der das Panel füllen soll.');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).classList).toContain('randomimp-panel');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).innerHTML.trim()).toContain('Das ist ein ganz langer Text, der das Panel füllen soll.');
    });
});