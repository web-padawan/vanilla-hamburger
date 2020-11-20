import { Cross } from './lib/entrypoints/cross.js';

/**
 * A hamburger button custom element of Cross type.
 * @element cross-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export class CrossBurger extends Cross {}

customElements.define('cross-burger', CrossBurger);
