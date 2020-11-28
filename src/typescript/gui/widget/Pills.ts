import { customElement, html, property, TemplateResult } from "lit-element";
import AbstractWidget from "../AbstractWidget";
import ComponentType from "../ComponentType";
import InternalWidgetID from "./InternalWidgetId";
import styles from '../../../resource/styles/widget/pills.scss';

@customElement(ComponentType.PILLS)
class Pills extends AbstractWidget {

    @property({ type: String })
    public text: string;

    public render(): TemplateResult {
        return html`
            <style>${styles}</style>
            <div id=${InternalWidgetID.WIDGET} class="randomimp-pills">
                ${this.text}
            </div>
        `;
    }
}
export default Pills;