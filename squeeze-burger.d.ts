import { Squeeze } from './lib/entrypoints/squeeze.js';

/**
 * A hamburger button custom element of Squeeze type.
 * @element squeeze-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export declare class SqueezeBurger extends Squeeze {}

declare global {
  interface HTMLElementTagNameMap {
    'squeeze-burger': SqueezeBurger;
  }
}
