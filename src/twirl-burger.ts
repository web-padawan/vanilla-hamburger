import { Twirl } from './lib/entrypoints/twirl.js';

export class TwirlBurger extends Twirl {}

customElements.define('twirl-burger', TwirlBurger);

declare global {
  interface HTMLElementTagNameMap {
    'twirl-burger': TwirlBurger;
  }
}
