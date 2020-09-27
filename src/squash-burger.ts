import { Squash } from './lib/entrypoints/squash.js';

/**
 * A hamburger button custom element of Squash type.
 * @element squash-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export class SquashBurger extends Squash {}

customElements.define('squash-burger', SquashBurger);

declare global {
  interface HTMLElementTagNameMap {
    'squash-burger': SquashBurger;
  }
}
