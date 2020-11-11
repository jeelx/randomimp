import Badge from '../../../typescript/gui/widget/Badge';
import WidgetSize from '../../../typescript/interface/WidgetSize';

describe('BageTest', () => {

    it('should be creatable', () => {
        const widget = document.createElement('randomimp-badge');
        expect(widget).toBeInstanceOf(Badge);
    });

    it('should set properties', async () => { 
        const widget: Badge = document.createElement('randomimp-badge') as Badge;

        widget.count = 3;
        widget.size = WidgetSize.SMALL;
        widget.updateComplete.then(() => { 
            expect(widget.count).toBe(3);
            expect(widget.size).toBe(WidgetSize.SMALL);
            expect(widget.shadowRoot.querySelector('randomimp-widgetsize-small')).not.toBe(null);
            expect(widget.shadowRoot.querySelector('text').innerHTML).toBe('3');
        });
    })

});