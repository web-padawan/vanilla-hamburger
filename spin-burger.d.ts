import { Spin } from './lib/entrypoints/spin.js';

/**
 * A hamburger button custom element of Spin type.
 * @element spin-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export declare class SpinBurger extends Spin {}

declare global {
  interface HTMLElementTagNameMap {
    'spin-burger': SpinBurger;
  }
}
