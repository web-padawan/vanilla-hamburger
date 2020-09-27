import { Spiral } from './lib/entrypoints/spiral.js';

/**
 * A hamburger button custom element of Spiral type.
 * @element spiral-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export class SpiralBurger extends Spiral {}

customElements.define('spiral-burger', SpiralBurger);

declare global {
  interface HTMLElementTagNameMap {
    'spiral-burger': SpiralBurger;
  }
}
