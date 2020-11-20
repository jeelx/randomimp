import ComponentType from '../../../typescript/gui/ComponentType';
import Button from '../../../typescript/gui/widget/Button';
import InternalWidgetID from '../../../typescript/gui/widget/InternalWidgetId';
import WidgetSize from '../../../typescript/interface/WidgetSize';

describe('Button', () => {
    let widget: Button;

    beforeEach(() => {
        widget = document.createElement(ComponentType.BUTTON) as Button;
    });

    afterEach(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    });

    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(Button);
    });

    test('should be rendered correctly', async () => {
        const clickMock: any = jest.fn(); 
        widget.text = 'Buttontext';
        widget.size = WidgetSize.LARGE;
        widget.click = clickMock;
        window.document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.shadowRoot.getElementById(InternalWidgetID.TEXT).innerHTML.trim()).toBe('Buttontext');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.TEXT).className).toBe('randomimp-button-text');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-button');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).className).toContain('randomimp-widgetsize-large');
    });
})