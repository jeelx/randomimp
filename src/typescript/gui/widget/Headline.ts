import { customElement, html, property, TemplateResult } from 'lit-element';
import AbstractWidget from '../AbstractWidget';
import style from '../../../resource/styles/widget/headline.scss';
import InternalWidgetID from './InternalWidgetId';

@customElement('randomimp-headline')
class Headline extends AbstractWidget {

    @property({ type: String })
    public title: string;

    @property({ type: String })
    public subtitle: string;

    public render(): TemplateResult { 
        return html`
        <style>${style}</style>
        <div id="${InternalWidgetID.WIDGET}" class="randomimp-headline">
            <div id="${InternalWidgetID.TITLE}" class="randomimp-headline-title">
                ${this.title}
            </div>
            <div id="${InternalWidgetID.SUBTITLE}" class="randomimp-headline-subtitle">
                ${this.subtitle}
            </div>
        </div>
        `;
    }
}

export default Headline;