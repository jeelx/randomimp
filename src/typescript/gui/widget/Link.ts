import { customElement, html, property, TemplateResult } from "lit-element";
import AbstractWidget from "../AbstractWidget";
import ComponentType from "../ComponentType";
import InternalWidgetID from "./InternalWidgetId";
import style from '../../../resource/styles/widget/link.scss';

@customElement(ComponentType.LINK)
class Link extends AbstractWidget {
    @property({ type: String })
    public text: string;

    @property({ type: Function })
    public click: () => void = () => null;

    public render(): TemplateResult {
        return html`
            <style>${style}</style>
            <button id=${InternalWidgetID.WIDGET} class="${this.concatClassnames('randomimp-link', this.getWidgetSizeStyle())}" @click=${() => this.click()}>
                <div id=${InternalWidgetID.TEXT} class="randomimp-link-text">
                    ${this.text}
                </div>   
                 <div id="icon"></div>
            </button>
        `;
    }
}
export default Link;