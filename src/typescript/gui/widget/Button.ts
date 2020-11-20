import { css, customElement, html, property, TemplateResult, unsafeCSS } from 'lit-element';
import styles from '../../../resource/styles/widget/button.scss';
import AbstractWidget from '../AbstractWidget';
import ComponentType from '../ComponentType';
import InternalWidgetID from './InternalWidgetId';

@customElement(ComponentType.BUTTON)
class Button extends AbstractWidget {

    @property({ type: String })
    public text: string;

    @property({ type: Function })
    public click: () => void = () => null;

    public render(): TemplateResult {
        return html`
        <style>${styles}</style>
            <button id=${InternalWidgetID.WIDGET} class="${this.concatClassnames('randomimp-button', this.getWidgetSizeStyle())}" @click=${() => this.click()}>
                <div id=${InternalWidgetID.TEXT} class="randomimp-button-text">
                    ${this.text}
                </div>   
                 <div id="icon"></div>
            </button>
        `;
    }
}

export default Button;