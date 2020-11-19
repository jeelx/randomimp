import { css, customElement, html, property, TemplateResult, unsafeCSS } from "lit-element";
import AbstractWidget from "../AbstractWidget";
import styles from '../../../resource/styles/widget/numericfield.scss';

@customElement('randomimp-numericfield')
class Numericfield extends AbstractWidget {

    @property({ type: Number })
    public text: number = 15;

    public render(): TemplateResult { 
        return html`
            <style>${styles}</style>
            <div id="widget" class=${this.concatClassnames('randomimp-numericfield', this.getWidgetSizeStyle())}>
                <input type="number" id="field" class="randomimp-numericfield-field"
                    value=${this.text ? this.text : ''}>
                </input>
            </div>
        `;
    }
}

export default Numericfield;