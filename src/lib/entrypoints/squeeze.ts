import { Burger } from '../components/burger.js';
import { bar, createTemplate, createRoot, getStyles, setStyles } from '../utils/dom.js';
import type { RenderOptions } from '../types';

const tpl = createTemplate(`<button type="button"></button><div>${bar}</div><div>${bar}</div>`);

export class Squeeze extends Burger {
  private _styles!: CSSStyleDeclaration[];

  constructor() {
    super();
    this._styles = getStyles(createRoot(this, tpl));
  }

  protected get lines(): number {
    return 2;
  }

  protected render(options: RenderOptions): void {
    const { barHeight, barStyles, margin, pressed, time, topOffset } = options;

    const half = time / 2;
    const wrapTransition = `${half}s ${this.easing} ${pressed ? '0s' : `${half}s`}`;
    const barTransition = `${half}s ${this.easing} ${pressed ? `${half}s` : '0s'}`;

    this.style.transition = `${time}s ${this.easing}`;

    setStyles(this._styles[0], {
      transition: wrapTransition,
      transform: `${pressed ? `translateY(${barHeight / 2 + margin / 2}px)` : 'none'}`
    });

    setStyles(this._styles[1], {
      ...barStyles,
      top: `${topOffset}px`,
      transition: barTransition,
      transform: `${pressed ? `rotate(45deg)` : 'none'}`
    });

    setStyles(this._styles[2], {
      transition: wrapTransition,
      transform: `${pressed ? `translateY(-${barHeight / 2 + margin / 2}px)` : 'none'}`
    });

    setStyles(this._styles[3], {
      ...barStyles,
      top: `${topOffset + barHeight + margin}px`,
      transition: barTransition,
      transform: `${pressed ? `rotate(-45deg)` : 'none'}`
    });
  }
}
