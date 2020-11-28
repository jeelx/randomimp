import { css, customElement, html, property, TemplateResult } from "lit-element";
import AbstractWidget from "../AbstractWidget";
import styles from '../../../resource/styles/widget/emailfield.scss';
import InternalWidgetID from "./InternalWidgetId";
import ComponentType from "../ComponentType";

@customElement(ComponentType.EMAILFIELD)
class EmailField extends AbstractWidget {

    @property({ type: String })
    public text: string = 'Test@test.de';

    public render(): TemplateResult { 
        return html`
            <style>${styles}</style>
            <div id=${InternalWidgetID.WIDGET} class=${this.concatClassnames('randomimp-emailfield', this.getWidgetSizeStyle())}>
                <input type="text" id=${InternalWidgetID.TEXT} class="randomimp-emailfield-field"
                    value=${this.text ? this.text : ''}>
                </input>
            </div>
        `;
    }
}

export default EmailField;