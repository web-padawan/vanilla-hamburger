import { Burger } from '../components/burger.js';
import { bar, createTemplate, createRoot, getStyles, setStyles } from '../utils/dom.js';
import { render, styles } from '../internals.js';
import type { RenderOptions } from '../types';

const tpl = createTemplate(
  `<button part="button" type="button"></button><div>${bar}</div><div>${bar}</div><div>${bar}</div>`
);

export class Squash extends Burger {
  private [styles]!: CSSStyleDeclaration[];

  constructor() {
    super();
    this[styles] = getStyles(createRoot(this, tpl));
  }

  protected get lines(): number {
    return 3;
  }

  protected [render](options: RenderOptions): void {
    const { barHeight, barStyles, margin, pressed, time, topOffset } = options;

    const half = time / 2;
    const wrapTransition = `${half}s ${this.easing} ${pressed ? '0s' : `${half}s`}`;
    const barTransition = `${half}s ${this.easing} ${pressed ? `${half}s` : '0s'}`;

    this.style.transition = `${time}s ${this.easing}`;

    setStyles(this[styles][0], {
      transition: wrapTransition,
      transform: `${pressed ? `translateY(${barHeight + margin}px)` : 'none'}`
    });

    setStyles(this[styles][1], {
      ...barStyles,
      top: `${topOffset}px`,
      transition: barTransition,
      transform: `${pressed ? `rotate(45deg)` : 'none'}`
    });

    setStyles(this[styles][2], {
      transition: `${half}s ${this.easing}`,
      opacity: `${pressed ? '0' : '1'}`
    });

    setStyles(this[styles][3], {
      ...barStyles,
      top: `${topOffset + barHeight + margin}px`,
      transition: `${half}s ${this.easing}`
    });

    setStyles(this[styles][4], {
      transition: wrapTransition,
      transform: `${pressed ? `translateY(-${barHeight + margin}px)` : 'none'}`
    });

    setStyles(this[styles][5], {
      ...barStyles,
      top: `${topOffset + barHeight * 2 + margin * 2}px`,
      transition: barTransition,
      transform: `${pressed ? `rotate(-45deg)` : 'none'}`
    });
  }
}
