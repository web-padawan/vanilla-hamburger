import { Spiral } from './lib/entrypoints/spiral.js';

/**
 * A hamburger button custom element of Spiral type.
 * @element spiral-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @cssprop [--burger-color=currentColor] Color used for bar elements background.
 * @csspart bar - Animated bar elements.
 */
export class SpiralBurger extends Spiral {}

customElements.define('spiral-burger', SpiralBurger);

declare global {
  interface HTMLElementTagNameMap {
    'spiral-burger': SpiralBurger;
  }
}
