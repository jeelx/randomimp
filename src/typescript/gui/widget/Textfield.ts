import { css, customElement, html, property, TemplateResult, unsafeCSS } from "lit-element";
import AbstractWidget from "../AbstractWidget";
import styles from '../../../resource/styles/widget/textfield.scss';

@customElement('randomimp-textfield')
class Textfield extends AbstractWidget {

    @property({ type: String })
    public text: string = 'Test';

    public render(): TemplateResult { 
        return html`
            <style>${styles}</style>
            <div id="widget" class=${this.concatClassnames('randomimp-textfield', this.getWidgetSizeStyle())}>
                <input type="text" id="field" class="randomimp-textfield-field"
                    value=${this.text ? this.text : ''}>
                </input>
            </div>
        `;
    }
}

export default Textfield;