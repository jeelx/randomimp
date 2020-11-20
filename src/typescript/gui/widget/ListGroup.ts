import { customElement, html, property, TemplateResult } from "lit-element";
import AbstractWidget from "../AbstractWidget";
import ComponentType from "../ComponentType";
import InternalWidgetID from "./InternalWidgetId";
import style from '../../../resource/styles/widget/listgroup.scss';

@customElement(ComponentType.LISTGROUP)
class ListGroup extends AbstractWidget {

    @property({ type: Array })
    public values: string[]

    public render(): TemplateResult {
        const values: TemplateResult[] = this.values?.map((value: string) => html`<div class="randomimp-listgroup-value">${value}</div>`);
        return html`
            <style>${style}</style>
            <div id=${InternalWidgetID.WIDGET} class="randomimp-listgroup">
                ${values}
            </div>
        `;
    }
}
export default ListGroup;