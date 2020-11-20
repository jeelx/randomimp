import ComponentType from "../../../typescript/gui/ComponentType";
import InternalWidgetID from "../../../typescript/gui/widget/InternalWidgetId";
import Link from '../../../typescript/gui/widget/Link';
import WidgetSize from "../../../typescript/interface/WidgetSize";

describe('Link', () => {
    let widget: Link;

    beforeEach(() => {
        widget = document.createElement(ComponentType.LINK) as Link;
    });

    afterEach(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    });

    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(Link);
    });

    test('should be rendered correctly', async () => {
        const clickMock: any = jest.fn(); 
        widget.text = 'Linktext';
        widget.size = WidgetSize.LARGE;
        widget.click = clickMock;
        window.document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.shadowRoot.getElementById(InternalWidgetID.TEXT).innerHTML.trim()).toBe('Linktext');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.TEXT).className).toBe('randomimp-link-text');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-link');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-widgetsize-large');
    });
});