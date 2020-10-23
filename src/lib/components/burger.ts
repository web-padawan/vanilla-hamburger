import { createTemplate, createRoot } from '../utils/dom.js';
import { props, render, update } from '../internals.js';
import css from '../styles/burger.js';
import type { BurgerProps, RenderOptions } from '../types';

const AREA = 48;

const tpl = createTemplate(`<style>${css}</style>`);

const btn = Symbol('btn');
const updating = Symbol('updating');
const prepare = Symbol('prepare');

export const defaultProps: BurgerProps = {
  size: 32,
  direction: 'left',
  disabled: false,
  distance: 'md',
  duration: 0.4,
  label: 'hamburger',
  easing: 'cubic-bezier(0, 0, 0, 1)',
  pressed: false
};

export abstract class Burger extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['disabled', 'distance', 'duration', 'easing', 'pressed', 'size', 'label'];
  }

  protected abstract get lines(): number;

  protected abstract [render](options: RenderOptions): void;

  private [btn]!: HTMLButtonElement;

  private [props]: BurgerProps = {} as BurgerProps;

  private [updating]!: boolean;

  /**
   * A valid `transition-timing-function` CSS value, for example 'ease-out'.
   * @type {string}
   * @default cubic-bezier(0, 0, 0, 1)
   */
  get easing(): string {
    return this[props].easing;
  }

  set easing(easing: string) {
    this[props].easing = easing;
    this[update]();
  }

  /**
   * The vertical distance between the lines. Small (sm), medium (md) or large (lg).
   * @type {'sm' | 'md' | 'lg'}
   * @default md
   */
  get distance(): 'sm' | 'md' | 'lg' {
    return this[props].distance;
  }

  set distance(distance: 'sm' | 'md' | 'lg') {
    this[props].distance = distance;
    this[update]();
  }

  /**
   * The duration of the animation. Can be set to zero if no animation is desired.
   * @type {number}
   * @default 0.4
   */
  get duration(): number {
    return this[props].duration;
  }

  set duration(duration: number) {
    this[props].duration = duration;
    this[update]();
  }

  /**
   * When set to true, the internal <button> element is disabled.
   * @type {boolean}
   * @attr disabled
   * @default false
   */
  get disabled(): boolean {
    return this[props].disabled;
  }

  set disabled(disabled: boolean) {
    this[props].disabled = disabled;
    this.toggleAttribute('disabled', !!disabled);
    this[btn] && this[btn].toggleAttribute('disabled', disabled);
  }

  /**
   * Accessible label set on the internal <button> element for screen readers.
   * @type {string}
   * @default {hamburger}
   */
  get label(): string {
    return this[props].label;
  }

  set label(label: string) {
    this[props].label = label;
    this[btn] && this[btn].setAttribute('aria-label', label);
  }

  /**
   * Set to true when element is pressed.
   * @type {boolean}
   * @attr pressed
   * @default false
   */
  get pressed(): boolean {
    return this[props].pressed;
  }

  set pressed(pressed: boolean) {
    this[props].pressed = pressed;
    this.toggleAttribute('pressed', !!pressed);
    this[btn] && this[btn].setAttribute('aria-pressed', `${!!pressed}`);
    this[update]();
  }

  /**
   * Size of the icon. Should be a number between 12 and 48.
   * @type {number}
   * @default 32
   */
  get size(): number {
    return this[props].size;
  }

  set size(size: number) {
    this[props].size = size;
    this[update]();
  }

  constructor() {
    super();
    createRoot(this, tpl);
    this.addEventListener('click', this);
  }

  connectedCallback(): void {
    this[btn] = (this.shadowRoot as ShadowRoot).querySelector('button') as HTMLButtonElement;

    (this.constructor as typeof Burger).observedAttributes.forEach((k) => {
      // A user may set a property on an _instance_ of an element,
      // before its prototype has been connected to this class.
      // If so, we need to run it through the proper class setter.
      if (this.hasOwnProperty(k)) {
        const value = this[k as keyof this];
        delete this[k as keyof this];
        this[k as keyof this] = value;
      } else if (!this[k as keyof this]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this[k as keyof this] = defaultProps[k as keyof BurgerProps] as any;
      }
    });
  }

  attributeChangedCallback(prop: string, oldVal: string, newVal: string): void {
    if (oldVal !== newVal) {
      let value: unknown = newVal;
      if (prop == 'size' || prop == 'duration') {
        value = newVal === null ? null : Number(newVal);
      } else if (prop == 'pressed' || prop == 'disabled') {
        value = newVal !== null;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this[prop as keyof this] = value as any;
    }
  }

  handleEvent(event: KeyboardEvent | MouseEvent): void {
    if (event.type === 'click') {
      this.pressed = !this.pressed;
      this.dispatchEvent(new CustomEvent('pressed-changed', { detail: { value: this.pressed } }));
    }
  }

  focus(): void {
    this[btn] && this[btn].focus();
  }

  blur(): void {
    this[btn] && this[btn].blur();
  }

  click(): void {
    if (!this.disabled) {
      super.click();
    }
  }

  private [prepare](): RenderOptions {
    const { distance, lines } = this;

    const width = Math.max(12, Math.min(AREA, this.size));

    const barHeightRaw = width / 12;
    const barHeight = Math.round(barHeightRaw);

    const space = distance === 'lg' ? 0.25 : distance === 'sm' ? 0.75 : 0.5;
    const marginRaw = width / (lines * (space + (lines === 3 ? 1 : 1.25)));
    const margin = Math.round(marginRaw);

    const height = barHeight * lines + margin * (lines - 1);

    const translate =
      lines === 3
        ? distance === 'lg'
          ? 4.0425
          : distance === 'sm'
          ? 5.1625
          : 4.6325
        : distance === 'lg'
        ? 6.7875
        : distance === 'sm'
        ? 8.4875
        : 7.6675;

    const deviation = (barHeightRaw - barHeight + (marginRaw - margin)) / (lines === 3 ? 1 : 2);

    const barStyles = {
      height: `${barHeight}px`,
      left: `${Math.round((AREA - width) / 2)}px`,
      width: `${width}px`
    };

    return {
      barHeight,
      barStyles,
      margin,
      move: parseFloat((width / translate - deviation / (4 / 3)).toFixed(2)),
      pressed: this.pressed,
      time: Math.max(0, this.duration),
      topOffset: Math.round((AREA - height) / 2)
    };
  }

  protected async [update](): Promise<void> {
    if (!this[updating]) {
      this[updating] = true;

      // Ensure that property changes are batched.
      this[updating] = await false;

      this[render](this[prepare]());
    }
  }
}
