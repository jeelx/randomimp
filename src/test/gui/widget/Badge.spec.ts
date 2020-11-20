import ComponentType from '../../../typescript/gui/ComponentType';
import Badge from '../../../typescript/gui/widget/Badge';
import InternalWidgetID from '../../../typescript/gui/widget/InternalWidgetId';
import WidgetSize from '../../../typescript/interface/WidgetSize';

describe('Badge', () => {
    let widget: Badge;

    beforeEach(() => {
        widget = document.createElement(ComponentType.BADGE) as Badge;
    });

    afterEach(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    });

    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(Badge);
    });

    test('should be rendered correctly', async () => {
        widget.count = 3;
        widget.size = WidgetSize.LARGE;
        window.document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.shadowRoot.getElementById(InternalWidgetID.TEXT).innerHTML.trim()).toBe('3');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.TEXT).className).toBe('randomimp-badge-text');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-badge');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-widgetsize-large');
    });
})