import { Slant } from './lib/entrypoints/slant.js';

/**
 * A hamburger button custom element of Slant type.
 * @element slant-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @cssprop [--burger-color=currentColor] Color used for bar elements background.
 * @csspart bar - Animated bar elements.
 */
export class SlantBurger extends Slant {}

customElements.define('slant-burger', SlantBurger);

declare global {
  interface HTMLElementTagNameMap {
    'slant-burger': SlantBurger;
  }
}
