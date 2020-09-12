import { Fade } from './lib/entrypoints/fade.js';

/**
 * A hamburger button custom element of Fade type.
 * @element fade-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @cssprop [--burger-color=currentColor] Color used for bar elements background.
 * @csspart bar - Animated bar elements.
 */
export class FadeBurger extends Fade {}

customElements.define('fade-burger', FadeBurger);

declare global {
  interface HTMLElementTagNameMap {
    'fade-burger': FadeBurger;
  }
}
