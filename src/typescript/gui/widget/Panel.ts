import { customElement, html, property, TemplateResult } from "lit-element";
import AbstractWidget from "../AbstractWidget";
import ComponentType from "../ComponentType";
import InternalWidgetID from "./InternalWidgetId";
import style from '../../../resource/styles/widget/panel.scss';

@customElement(ComponentType.PANEL)
class Panel extends AbstractWidget {

    @property({ type: Object })
    public values: any;

    public render(): TemplateResult {
        return html`
            <style>${style}</style>
            <div id=${InternalWidgetID.WIDGET} class="randomimp-panel">
                ${this.values}
            </div>
        `;
    }
}
export default Panel;