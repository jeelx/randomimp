import { css, customElement, html, LitElement, TemplateResult } from 'lit-element';
import styles from '../../../resource/styles/view/main-view.scss';

@customElement('main-view')
class MainView extends LitElement {
    static get styles(): any {
        return css([styles]);
    }

    public render(): TemplateResult {
        return html`
            <div>
            </div>
        `;
    }
}

export default MainView;