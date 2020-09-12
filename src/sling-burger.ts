import { Sling } from './lib/entrypoints/sling.js';

/**
 * A hamburger button custom element of Sling type.
 * @element sling-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @cssprop [--burger-color=currentColor] Color used for bar elements background.
 * @csspart bar - Animated bar elements.
 */
export class SlingBurger extends Sling {}

customElements.define('sling-burger', SlingBurger);

declare global {
  interface HTMLElementTagNameMap {
    'sling-burger': SlingBurger;
  }
}
