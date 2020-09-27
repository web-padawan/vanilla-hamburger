import { DirectionBurger } from '../components/direction-burger.js';
import { bar, createTemplate, createRoot, getStyles, setStyles } from '../utils/dom.js';
import type { RenderOptions } from '../types';

const tpl = createTemplate(`<button part="button" type="button"></button><div>${bar}</div><div>${bar}</div>`);

export class Pivot extends DirectionBurger {
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

    const isLeft = this.direction === 'left';

    const half = time / 2;
    const wrapTransition = `${half}s ${this.easing} ${pressed ? '0s' : `${half}s`}`;
    const barTransition = `${half}s ${this.easing} ${pressed ? `${half}s` : '0s'}`;

    setStyles(this.style, {
      transition: `${time}s ${this.easing}`,
      transform: `${pressed ? `rotate(${90 * (isLeft ? -1 : 1)}deg)` : 'none'}`
    });

    setStyles(this._styles[0], {
      transition: wrapTransition,
      transform: `${pressed ? `translateY(${barHeight / 2 + margin / 2}px)` : 'none'}`
    });

    setStyles(this._styles[1], {
      ...barStyles,
      top: `${topOffset}px`,
      transition: barTransition,
      transform: `${pressed ? `rotate(${45 * (isLeft ? 1 : -1)}deg)` : 'none'}`
    });

    setStyles(this._styles[2], {
      transition: wrapTransition,
      transform: `${pressed ? `translateY(-${barHeight / 2 + margin / 2}px)` : 'none'}`
    });

    setStyles(this._styles[3], {
      ...barStyles,
      top: `${topOffset + barHeight + margin}px`,
      transition: barTransition,
      transform: `${pressed ? `rotate(${45 * (isLeft ? -1 : 1)}deg)` : 'none'}`
    });
  }
}
