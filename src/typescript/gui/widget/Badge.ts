import { css, customElement, html, property, TemplateResult, unsafeCSS } from 'lit-element';
import styles from '../../../resource/styles/widget/badge.scss';
import AbstractWidget from '../AbstractWidget';
import InternalWidgetID from './InternalWidgetId';

@customElement('randomimp-badge')
class Badge extends AbstractWidget {

    @property({ type: Number })
    public count: number;

    public render(): TemplateResult { 
        return html`
            <style>${styles}</style>
            <div id=${InternalWidgetID.WIDGET} class="${this.concatClassnames('randomimp-badge', this.getWidgetSizeStyle())}">
                <div id=${InternalWidgetID.TEXT} class="randomimp-badge-text">
                    ${this.count}
                </div>
            </div>
        `;
    }
}

export default Badge;