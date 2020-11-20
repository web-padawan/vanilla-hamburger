import { Twirl } from './lib/entrypoints/twirl.js';

/**
 * A hamburger button custom element of Twirl type.
 * @element twirl-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export declare class TwirlBurger extends Twirl {}

declare global {
  interface HTMLElementTagNameMap {
    'twirl-burger': TwirlBurger;
  }
}
