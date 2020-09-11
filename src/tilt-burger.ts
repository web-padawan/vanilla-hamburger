import { Tilt } from './lib/entrypoints/tilt.js';

export class TiltBurger extends Tilt {}

customElements.define('tilt-burger', TiltBurger);

declare global {
  interface HTMLElementTagNameMap {
    'tilt-burger': TiltBurger;
  }
}
