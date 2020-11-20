import { Turn } from './lib/entrypoints/turn.js';

/**
 * A hamburger button custom element of Turn type.
 * @element turn-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export declare class TurnBurger extends Turn {}

declare global {
  interface HTMLElementTagNameMap {
    'turn-burger': TurnBurger;
  }
}
