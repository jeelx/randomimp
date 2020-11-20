import Headline from '../../../typescript/gui/widget/Headline';
import InternalWidgetID from '../../../typescript/gui/widget/InternalWidgetId';

describe('Headline', () => {
    let widget: Headline;

    beforeEach(() => { 
        widget = document.createElement('randomimp-headline') as Headline;
    })

    afterEach(() => {
        if (document.body.contains(widget)) { 
            document.body.removeChild(widget);
        }
    })

    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(Headline);
    });

    test('should be rendered correctly', async () => {
        widget.title = 'Headline';
        widget.subtitle = 'Subheadline';
        document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.title).toBe('Headline');
        expect(widget.subtitle).toBe('Subheadline');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).classList).toContain('randomimp-headline');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.TITLE).classList).toContain('randomimp-headline-title');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.TITLE).innerHTML.trim()).toBe('Headline');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.SUBTITLE).classList).toContain('randomimp-headline-subtitle');
        expect(widget.shadowRoot.getElementById(InternalWidgetID.SUBTITLE).innerHTML.trim()).toContain('Subheadline');
    });
})