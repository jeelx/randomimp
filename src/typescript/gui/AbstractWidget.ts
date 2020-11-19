import { LitElement, property } from 'lit-element';
import WidgetSize from '../interface/WidgetSize';

abstract class AbstractWidget extends LitElement { 

    @property({ type: Object })
    public size: WidgetSize;

    @property({ type: Boolean })
    public enabled: boolean;

    @property({ type: Boolean })
    public visible: boolean;

    public getWidgetSizeStyle(): string { 
        return this.size ? `randomimp-widgetsize-${this.size}` : '';
    }

    public getEnabledStyle(): string { 
        return this.enabled ? '' : 'randomimp-disabled';
    }

    public concatClassnames(...classes: string[]): string { 
        return classes.filter((clazz: string) => clazz !== '').join(' ');
    }
}

export default AbstractWidget;