import './typescript/gui/view/MainView';
import './typescript/gui/widget/Badge';
import './typescript/gui/widget/Button';
import './typescript/gui/widget/ButtonGroup';
import './typescript/gui/widget/FlowingText';
import './typescript/gui/widget/Headline';
import './typescript/gui/widget/ListGroup';
import './typescript/gui/widget/Numericfield';
import './typescript/gui/widget/Textfield';
// tslint:disable-next-line: no-submodule-imports
import fontFaces from '@fortawesome/fontawesome-free/scss/regular.scss';
// tslint:disable-next-line: no-submodule-imports
import iconFaces from '@fortawesome/fontawesome-free/scss/solid.scss';

const fonts: HTMLElement = document.createElement('style');
fonts.innerHTML = fontFaces;
const icons: HTMLElement = document.createElement('style');
fonts.innerHTML = iconFaces;
document.head.appendChild(fonts);
document.head.appendChild(icons);