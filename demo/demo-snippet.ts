import { htmlRender } from 'highlight-ts/es/render/html.js';
import { registerLanguages } from 'highlight-ts/es/languages.js';
import { XML } from 'highlight-ts/es/languages/xml.js';
import { JavaScript } from 'highlight-ts/es/languages/javascript.js';
import { init, process } from 'highlight-ts/es/process.js';
import { defaultProps } from '../lib/components/burger.js';
import type { BurgerProps } from '../lib/types.js';

registerLanguages(XML, JavaScript);

const highlighter = init(htmlRender);

type BurgerKnobs = {
  name: string;
  value: string | number | null;
};

const INDENT = '  ';

export class DemoSnippet extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(document.createElement('slot'));
  }

  update(element: string, knobs: BurgerKnobs[]): void {
    let markup = `<script type="module">\n${INDENT}import 'vanilla-hamburger/${element}.js';\n</script>\n`;

    markup += `<${element}`;

    const attrs = knobs.filter(({ name, value }) => value && value != defaultProps[name as keyof BurgerProps]);

    const count = attrs.length;

    attrs
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .forEach(({ name, value }) => {
        markup +=
          name === 'disabled' ? (count === 1 ? ` ${name}` : `\n${INDENT}${name}`) : `\n${INDENT}${name}="${value}"`;
      });

    markup += `${count === 0 || (count === 1 && attrs[0].name === 'disabled') ? '' : '\n'}></${element}>`;

    const { value } = process(highlighter, markup, ['xml', 'js']);

    const code = this.querySelector('code');
    if (code) {
      code.innerHTML = value;
    }
  }
}

customElements.define('demo-snippet', DemoSnippet);

declare global {
  interface HTMLElementTagNameMap {
    'demo-snippet': DemoSnippet;
  }
}
