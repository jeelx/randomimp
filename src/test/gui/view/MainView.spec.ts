import MainView from '../../../typescript/gui/view/MainView';

describe('MainView', () => {
    it('Widget is creatable', () => {
        const testWidget: HTMLElement = document.createElement('randomimp-mainview');
        expect(testWidget).toBeInstanceOf(MainView);
    });

    it('Widget has header component', () => {
        const testWidget: HTMLElement = document.createElement('randomimp-mainview');
        expect(testWidget).toBeInstanceOf(MainView);
    });
});
