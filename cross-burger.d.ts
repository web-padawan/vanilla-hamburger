import { Cross } from './lib/entrypoints/cross.js';

/**
 * A hamburger button custom element of Cross type.
 * @element cross-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export declare class CrossBurger extends Cross {}

declare global {
  interface HTMLElementTagNameMap {
    'cross-burger': CrossBurger;
  }
}
