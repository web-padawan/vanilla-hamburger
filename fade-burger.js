import { Fade } from './lib/entrypoints/fade.js';

/**
 * A hamburger button custom element of Fade type.
 * @element fade-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */
export class FadeBurger extends Fade {}

customElements.define('fade-burger', FadeBurger);
