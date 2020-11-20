import ComponentType from '../../../typescript/gui/ComponentType';
import InternalWidgetID from '../../../typescript/gui/widget/InternalWidgetId';
import ListGroup from '../../../typescript/gui/widget/ListGroup';

describe('ListGroup', () => { 
    let widget: ListGroup;

    beforeEach(() => {
        widget = document.createElement(ComponentType.LISTGROUP) as ListGroup;
    });

    afterEach(() => {
        if (document.body.contains(widget)) {
            document.body.removeChild(widget);
        }
    });

    test('should be creatable', () => {
        expect(widget).toBeInstanceOf(ListGroup)
    });

    test('should rendered correctly', async () => {
        widget.values = ["text1", "text2", "text3"];
        document.body.appendChild(widget);
        await widget.updateComplete;
        expect(widget.values).toHaveLength(3);
        expect(widget.shadowRoot.getElementById(InternalWidgetID.WIDGET).classList).toContain('randomimp-listgroup');
    });
})