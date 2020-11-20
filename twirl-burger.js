import { Twirl } from './lib/entrypoints/twirl.js';

/**
 * A hamburger button custom element of Twirl type.
 * @element twirl-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export class TwirlBurger extends Twirl {}

customElements.define('twirl-burger', TwirlBurger);
