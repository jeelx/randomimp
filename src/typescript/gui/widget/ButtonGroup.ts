import { css, customElement, html, property, TemplateResult, unsafeCSS } from "lit-element";
import AbstractWidget from "../AbstractWidget";
import styles from '../../../resource/styles/widget/buttongroup.scss';
import ButtonGroupAction from "../../interface/ButtonGroupAction";
import Logger from "../../util/Logger";
import InternalWidgetID from "./InternalWidgetId";

@customElement('randomimp-buttongroup')
class ButtonGroup extends AbstractWidget { 

    @property({ type: Array })
    public actions: ButtonGroupAction[] = [
            {
                text: 'Button 1',
                click: () => { 
                    Logger.get().error('Klick');
                },
                enabled: true,
                visible: true
            },
            {
                text: 'Button 2',
                click: () => { 
                    Logger.get().error('Klick 1');
                },
                enabled: true,
                visible: true
            },
            {
                text: 'Button 3',
                click: () => { 
                    Logger.get().error('Klick 2');
                },
                enabled: true,
                visible: true
            }
    ];

    public render(): TemplateResult {
        const actions: TemplateResult[] = this.actions.map((action: ButtonGroupAction) => {
            return html`
            <style>${styles}</style>
            <div class="randomimp-buttongroup-item" @click=${() => action.click()}>
                <div class="randomimp-buttongroup-item-text">
                    ${action.text}
                </div>
            </div>`
        });
        return html`
            <div id=${InternalWidgetID.WIDGET} class="${this.concatClassnames('randomimp-buttongroup', this.getWidgetSizeStyle())}">
                ${actions}
            </div>
        `;
    }

}

export default ButtonGroup;