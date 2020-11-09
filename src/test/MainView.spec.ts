import MainView from '../typescript/gui/view/MainView';

describe('MainView', () => {
        it('Widget is creatable', () => {
        const testWidget: HTMLElement = document.createElement('main-view');
        expect(testWidget).toBeInstanceOf(MainView);
    });
});
