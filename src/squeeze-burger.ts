import { Squeeze } from './lib/entrypoints/squeeze.js';

/**
 * A hamburger button custom element of Squeeze type.
 * @element squeeze-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @cssprop [--burger-color=currentColor] Color used for bar elements background.
 * @csspart bar - Animated bar elements.
 */
export class SqueezeBurger extends Squeeze {}

customElements.define('squeeze-burger', SqueezeBurger);

declare global {
  interface HTMLElementTagNameMap {
    'squeeze-burger': SqueezeBurger;
  }
}
