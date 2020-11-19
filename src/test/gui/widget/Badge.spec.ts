import Badge from '../../../typescript/gui/widget/Badge';
import WidgetSize from '../../../typescript/interface/WidgetSize';

describe('Badge', () => { 
    test('should be creatable', () => {
        const widget: Badge = document.createElement('randomimp-badge') as Badge;
        expect(widget).toBeInstanceOf(Badge);
    });

    test('should be rendered correctly', async () => {
        const widget: Badge = document.createElement('randomimp-badge') as Badge;
        widget.count = 3;
        widget.size = WidgetSize.LARGE;
        window.document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.shadowRoot.getElementById('text').innerHTML.trim()).toBe('3');
        expect(widget.shadowRoot.getElementById('text').className).toBe('randomimp-badge-text');
        expect(widget.shadowRoot.getElementById('widget').className).toContain('randomimp-badge');
        expect(widget.shadowRoot.getElementById('widget').className).toContain('randomimp-widgetsize-large');
    });
})