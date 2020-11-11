import { css, customElement, html, LitElement, property, TemplateResult } from 'lit-element';
import styles from '../../../resource/styles/widget/badge.scss';
import WidgetSize from "../../interface/WidgetSize";

@customElement('randomimp-badge')
class Badge extends LitElement {

    @property({ type: Number })
    public count: number;

    @property({ type: Object })
    public size: WidgetSize;

    public static get styles(): any { 
        return css([styles]);
    }

    public getWidgetSizeStyle(): string { 
        return this.size ? `randomimp-widgetsize-${this.size}` : '';
    }

    public render(): TemplateResult { 
        return html`
            <div id="widget" class="${''.concat('randomimp-badge', this.getWidgetSizeStyle())}">
                <div id="text">
                    ${this.count}
                </div>
            </div>
        `;
    }
}

export default Badge;