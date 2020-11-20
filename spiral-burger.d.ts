import { Spiral } from './lib/entrypoints/spiral.js';

/**
 * A hamburger button custom element of Spiral type.
 * @element spiral-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export declare class SpiralBurger extends Spiral {}

declare global {
  interface HTMLElementTagNameMap {
    'spiral-burger': SpiralBurger;
  }
}
