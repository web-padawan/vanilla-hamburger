import { Tilt } from './lib/entrypoints/tilt.js';

/**
 * A hamburger button custom element of Tilt type.
 * @element tilt-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export class TiltBurger extends Tilt {}

customElements.define('tilt-burger', TiltBurger);
