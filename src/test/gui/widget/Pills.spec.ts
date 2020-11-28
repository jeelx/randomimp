import ComponentType from "../../../typescript/gui/ComponentType";
import InternalWidgetID from "../../../typescript/gui/widget/InternalWidgetId";
import Pills from "../../../typescript/gui/widget/Pills";

describe('Pills', () => {
    let widget: Pills;

    beforeEach(() => {
        widget = document.createElement(ComponentType.PILLS) as Pills;
    });

    afterEach(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    });

    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(Pills);
    });

    test('should be rendered correctly', async () => {
        widget.text = 'Das ist ein ganz langer Text, der das Panel füllen soll.'
        document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.text).toBe('Das ist ein ganz langer Text, der das Panel füllen soll.');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).classList).toContain('randomimp-pills');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).innerHTML.trim()).toContain('Das ist ein ganz langer Text, der das Panel füllen soll.');
    });
});