import { css, customElement, html, property, TemplateResult, unsafeCSS } from "lit-element";
import AbstractWidget from "../AbstractWidget";
import styles from '../../../resource/styles/widget/textfield.scss';
import InternalWidgetID from "./InternalWidgetId";

@customElement('randomimp-textfield')
class Textfield extends AbstractWidget {

    @property({ type: String })
    public text: string = 'Test';

    public render(): TemplateResult { 
        return html`
            <style>${styles}</style>
            <div id=${InternalWidgetID.WIDGET} class=${this.concatClassnames('randomimp-textfield', this.getWidgetSizeStyle())}>
                <input type="text" id=${InternalWidgetID.TEXT} class="randomimp-textfield-field"
                    value=${this.text ? this.text : ''}>
                </input>
            </div>
        `;
    }
}

export default Textfield;