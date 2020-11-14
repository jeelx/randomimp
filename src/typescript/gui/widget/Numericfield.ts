import { css, customElement, html, property, TemplateResult, unsafeCSS } from "lit-element";
import AbstractWidget from "../AbstractWidget";
import styles from '../../../resource/styles/widget/numericfield.scss';

@customElement('randomimp-numericfield')
class Numericfield extends AbstractWidget {

    @property({ type: Number })
    public text: number = 15;

    public static get styles(): any { 
        return css`${unsafeCSS(styles)}`;
    }

    public render(): TemplateResult { 
        return html`
            <div id="widget" class=${this.concatClassnames('randomimp-numericfield', this.getWidgetSizeStyle())}>
                <input type="number" id="field" class="randomimp-numericfield-field"
                    value=${this.text ? this.text : ''}>
                </input>
            </div>
        `;
    }
}

export default Numericfield;