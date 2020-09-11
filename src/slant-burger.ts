import { Slant } from './lib/entrypoints/slant.js';

export class SlantBurger extends Slant {}

customElements.define('slant-burger', SlantBurger);

declare global {
  interface HTMLElementTagNameMap {
    'slant-burger': SlantBurger;
  }
}
