import { Twirl } from './lib/entrypoints/twirl.js';

/**
 * A hamburger button custom element of Twirl type.
 * @element twirl-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @cssprop [--burger-color=currentColor] Color used for bar elements background.
 * @csspart bar - Animated bar elements.
 */
export class TwirlBurger extends Twirl {}

customElements.define('twirl-burger', TwirlBurger);

declare global {
  interface HTMLElementTagNameMap {
    'twirl-burger': TwirlBurger;
  }
}
