import { Turn } from './lib/entrypoints/turn.js';

/**
 * A hamburger button custom element of Turn type.
 * @element turn-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @cssprop [--burger-color=currentColor] Color used for bar elements background.
 * @csspart bar - Animated bar elements.
 */
export class TurnBurger extends Turn {}

customElements.define('turn-burger', TurnBurger);

declare global {
  interface HTMLElementTagNameMap {
    'turn-burger': TurnBurger;
  }
}
