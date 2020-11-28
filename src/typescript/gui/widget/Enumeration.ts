import { customElement, html, property, TemplateResult } from "lit-element";
import AbstractWidget from "../AbstractWidget";
import ComponentType from "../ComponentType";
import InternalWidgetID from "./InternalWidgetId";
import styles from "../../../resource/styles/widget/enumeration.scss";

@customElement(ComponentType.ENUMERATION)
class Enumeration extends AbstractWidget {

    @property({ type: String })
    public title: string;

    @property({ type: Array })
    public text: string[] = ['a', 'b', 'c'];

    public render(): TemplateResult {
        const enumeration: TemplateResult[] = this.text.map((value: string) => html`<li>Coffee</li>`)
        return html`
            <style>${styles}</style>
            <div id="${InternalWidgetID.WIDGET}" class="randomimp-enumeration">
                <div id="${InternalWidgetID.TITLE}" class="randomimp-enumeration-title">
                    ${this.title}
                </div>
                <ol>
                    ${enumeration}
                </ol>
            </div>
        `;
    }
}

export default Enumeration;