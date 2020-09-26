import { DirectionBurger } from '../components/direction-burger.js';
import { bar, createTemplate, createRoot, getStyles, setStyles } from '../utils/dom.js';
import type { RenderOptions } from '../types';

const tpl = createTemplate(`<button type="button"></button>${bar}${bar}`);

export class Cross extends DirectionBurger {
  private _styles!: CSSStyleDeclaration[];

  constructor() {
    super();
    this._styles = getStyles(createRoot(this, tpl));
  }

  protected get lines(): number {
    return 2;
  }

  protected render(options: RenderOptions): void {
    const { barHeight, barStyles, margin, move, pressed, time, topOffset } = options;

    const isLeft = this.direction === 'left';
    const transition = `${time}s ${this.easing}`;

    this.style.transition = transition;

    setStyles(this._styles[0], {
      ...barStyles,
      top: `${topOffset}px`,
      transition,
      transform: `${
        pressed ? `rotate(${45 * (isLeft ? -1 : 1)}deg) translate(${move * (isLeft ? -1 : 1)}px, ${move}px)` : 'none'
      }`
    });

    setStyles(this._styles[1], {
      ...barStyles,
      top: `${topOffset + barHeight + margin}px`,
      transition,
      transform: `${
        pressed
          ? `rotate(${45 * (isLeft ? 1 : -1)}deg) translate(${move * (isLeft ? -1 : 1)}px, ${move * -1}px)`
          : 'none'
      }`
    });
  }
}
