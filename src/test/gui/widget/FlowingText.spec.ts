import ComponentType from '../../../typescript/gui/ComponentType';
import FlowingText from '../../../typescript/gui/widget/FlowingText';
import InternalWidgetID from '../../../typescript/gui/widget/InternalWidgetId';

describe('FlowingText', () => {
    let widget: FlowingText;

    beforeEach(() => {
        widget = document.createElement(ComponentType.FLOWINGTEXT) as FlowingText;
    });

    afterEach(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    });

    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(FlowingText)
    });

    test('should rendered correctly', async () => { 
        widget.text = 'Das ist ein ganz langer Fließtext.'
        document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.text).toBe('Das ist ein ganz langer Fließtext.');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).classList).toContain('randomimp-flowingtext');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.TEXT).classList).toContain('randomimp-flowingtext-text');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.TEXT).innerHTML.trimStart().trimEnd()).toBe('Das ist ein ganz langer Fließtext.');
    })
})