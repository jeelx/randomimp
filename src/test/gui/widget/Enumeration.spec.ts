import ComponentType from '../../../typescript/gui/ComponentType';
import Enumeration from '../../../typescript/gui/widget/Enumeration';
import InternalWidgetID from '../../../typescript/gui/widget/InternalWidgetId';

describe('Enumeration', () => {
    let widget: Enumeration;

    beforeEach(() => {
        widget = document.createElement(ComponentType.ENUMERATION) as Enumeration;
    });

    afterEach(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    });

    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(Enumeration);
    });

    test('should be rendered correctly', async () => {
        widget.title = 'Enumeration';
        document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.title).toBe('Enumeration');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).classList).toContain('randomimp-enumeration');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.TITLE).classList).toContain('randomimp-enumeration-title');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.TITLE).innerHTML.trim()).toBe('Enumeration');
    });
})