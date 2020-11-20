import { Sling } from './lib/entrypoints/sling.js';

/**
 * A hamburger button custom element of Sling type.
 * @element sling-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export class SlingBurger extends Sling {}

customElements.define('sling-burger', SlingBurger);
