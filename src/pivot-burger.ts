import { Pivot } from './lib/entrypoints/pivot.js';

/**
 * A hamburger button custom element of Pivot type.
 * @element pivot-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export class PivotBurger extends Pivot {}

customElements.define('pivot-burger', PivotBurger);

declare global {
  interface HTMLElementTagNameMap {
    'pivot-burger': PivotBurger;
  }
}
