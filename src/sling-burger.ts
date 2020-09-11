import { Sling } from './lib/entrypoints/sling.js';

export class SlingBurger extends Sling {}

customElements.define('sling-burger', SlingBurger);

declare global {
  interface HTMLElementTagNameMap {
    'sling-burger': SlingBurger;
  }
}
