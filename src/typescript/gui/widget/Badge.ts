import { css, customElement, html, property, TemplateResult, unsafeCSS } from 'lit-element';
import styles from '../../../resource/styles/widget/badge.scss';
import AbstractWidget from '../AbstractWidget';

@customElement('randomimp-badge')
class Badge extends AbstractWidget {

    @property({ type: Number })
    public count: number;

    public render(): TemplateResult { 
        return html`
            <style>${styles}</style>
            <div id="widget" class="${this.concatClassnames('randomimp-badge', this.getWidgetSizeStyle())}">
                <div id="text" class="randomimp-badge-text">
                    ${this.count}
                </div>
            </div>
        `;
    }
}

export default Badge;