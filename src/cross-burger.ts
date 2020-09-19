import { Cross } from './lib/entrypoints/cross.js';

/**
 * A hamburger button custom element of Cross type.
 * @element cross-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 */
export class CrossBurger extends Cross {}

customElements.define('cross-burger', CrossBurger);

declare global {
  interface HTMLElementTagNameMap {
    'cross-burger': CrossBurger;
  }
}
