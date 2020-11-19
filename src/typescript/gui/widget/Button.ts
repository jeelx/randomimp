import { css, customElement, html, property, TemplateResult, unsafeCSS } from 'lit-element';
import styles from '../../../resource/styles/widget/button.scss';
import AbstractWidget from '../AbstractWidget';

@customElement('randomimp-button')
class Button extends AbstractWidget {

    @property({ type: String })
    public text: string;

    @property({ type: Function })
    public click: () => void = () => null;

    public render(): TemplateResult {
        return html`
        <style>${styles}</style>
            <button id="widget" class="${this.concatClassnames('randomimp-button', this.getWidgetSizeStyle())}" @click=${() => this.click()}>
                 <div id="text" class="randomimp-button-text">${this.text}</div>   
                 <div id="icon"></div>
            </button>
        `;
    }
}

export default Button;