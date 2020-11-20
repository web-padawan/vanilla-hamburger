import { Rotate } from './lib/entrypoints/rotate.js';

/**
 * A hamburger button custom element of Rotate type.
 * @element rotate-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export declare class RotateBurger extends Rotate {}

declare global {
  interface HTMLElementTagNameMap {
    'rotate-burger': RotateBurger;
  }
}
