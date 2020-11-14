import { css, customElement, html, property, TemplateResult, unsafeCSS } from "lit-element";
import AbstractWidget from "../AbstractWidget";
import styles from '../../../resource/styles/widget/buttongroup.scss';
import ButtonGroupAction from "../../interface/ButtonGroupAction";
import Logger from "../../util/Logger";

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

    public static get styles(): any { 
        return css`${unsafeCSS(styles)}`;
    }

    public render(): TemplateResult {
        const actions: TemplateResult[] = this.actions.map((action: ButtonGroupAction) => {
            return html`
            <div class="randomimp-buttongroup-item" @click=${() => action.click()}>
                <div class="randomimp-buttongroup-item-text">
                    ${action.text}
                </div>
            </div>`
        });
        return html`
            <div id="widget" class="${this.concatClassnames('randomimp-buttongroup', this.getWidgetSizeStyle())}">
                ${actions}
            </div>
        `;
    }

}

export default ButtonGroup;