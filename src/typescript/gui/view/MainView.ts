import { css, customElement, html, LitElement, TemplateResult, unsafeCSS } from 'lit-element';
import styles from '../../../resource/styles/view/main-view.scss';

@customElement('randomimp-mainview')
class MainView extends LitElement {
    static get styles(): any {
        return css`${unsafeCSS(styles)}`;
    }

    public render(): TemplateResult {
        const listgroupValues: string[] = ["text1", "text2", "text3"];
        return html`
            <div>
                <randomimp-badge count=3></randomimp-badge>
                <randomimp-button text=${'Basic Use'}></randomimp-button>
                <randomimp-buttongroup></randomimp-buttongroup>
                <randomimp-numericfield></randomimp-numericfield>
                <randomimp-textfield></randomimp-textfield>
                <randomimp-headline title="Headline" subtitle="SubTitle"></randomimp-headline>
                <randomimp-flowingtext text="Das ist ein ganz langer Fließtext."></randomimp-flowingtext>
                <randomimp-listgroup .values=${listgroupValues}></randomimp-listgroup>
            </div>
        `;
    }
}

export default MainView;