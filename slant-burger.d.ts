import { Slant } from './lib/entrypoints/slant.js';

/**
 * A hamburger button custom element of Slant type.
 * @element slant-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export declare class SlantBurger extends Slant {}

declare global {
  interface HTMLElementTagNameMap {
    'slant-burger': SlantBurger;
  }
}
