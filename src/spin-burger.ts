import { Spin } from './lib/entrypoints/spin.js';

/**
 * A hamburger button custom element of Spin type.
 * @element spin-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @cssprop [--burger-color=currentColor] Color used for bar elements background.
 * @csspart bar - Animated bar elements.
 */
export class SpinBurger extends Spin {}

customElements.define('spin-burger', SpinBurger);

declare global {
  interface HTMLElementTagNameMap {
    'spin-burger': SpinBurger;
  }
}
