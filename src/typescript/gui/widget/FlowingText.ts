import { customElement, html, property, TemplateResult } from 'lit-element';
import AbstractWidget from '../AbstractWidget';
import ComponentType from '../ComponentType';
import style from '../../../resource/styles/widget/flowingtext.scss';
import InternalWidgetID from './InternalWidgetId';

@customElement(ComponentType.FLOWINGTEXT)
class FlowingText extends AbstractWidget {

    @property({ type: String })
    public text: string;

    public render(): TemplateResult {
        return html`
            <style>${style}</style>
            <div id=${InternalWidgetID.WIDGET} class="randomimp-flowingtext">
                <div id=${InternalWidgetID.TEXT} class="randomimp-flowingtext-text">
                    ${this.text}
                </div>
            </div>
        `;
    }
}
export default FlowingText;