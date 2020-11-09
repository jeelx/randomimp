import { css, customElement, html, LitElement, TemplateResult } from 'lit-element';
import styles from '../../../resource/styles/widget/button.scss';

@customElement('randomimp-button')
class Button extends LitElement {
    static get styles(): any {
        return css([styles]);
    }


    public render(): TemplateResult {
        return html``;
    }
}

export default Button;