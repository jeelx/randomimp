import { css, customElement, html, property, TemplateResult, unsafeCSS } from 'lit-element';
import styles from '../../../resource/styles/widget/badge.scss';
import AbstractWidget from '../AbstractWidget';

@customElement('randomimp-badge')
class Badge extends AbstractWidget {

    @property({ type: Number })
    public count: number;

    public static get styles(): any { 
        return css`${unsafeCSS(styles)}`;
    }

    public render(): TemplateResult { 
        return html`
            <div id="widget" class="${this.concatClassnames('randomimp-badge', this.getWidgetSizeStyle())}">
                <div id="text" class="randomimp-badge-text">
                    ${this.count}
                </div>
            </div>
        `;
    }
}

export default Badge;