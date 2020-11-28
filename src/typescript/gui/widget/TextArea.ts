import { css, customElement, html, property, TemplateResult } from "lit-element";
import AbstractWidget from "../AbstractWidget";
import styles from '../../../resource/styles/widget/textarea.scss';
import InternalWidgetID from "./InternalWidgetId";
import ComponentType from "../ComponentType";

@customElement(ComponentType.TEXTAREA)
class Textarea extends AbstractWidget {

    @property({ type: String })
    public text: string = 'TestArea';

    public render(): TemplateResult { 
        return html`
            <style>${styles}</style>
            <div id=${InternalWidgetID.WIDGET} class=${this.concatClassnames('randomimp-textarea', this.getWidgetSizeStyle())}>
                <textarea id=${InternalWidgetID.TEXT} class="randomimp-textarea-field"
                    value=${this.text ? this.text : ''}></textarea>
            </div>
        `;
    }
}

export default Textarea;