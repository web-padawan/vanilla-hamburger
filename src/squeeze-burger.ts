import { Squeeze } from './lib/entrypoints/squeeze.js';

export class SqueezeBurger extends Squeeze {}

customElements.define('squeeze-burger', SqueezeBurger);

declare global {
  interface HTMLElementTagNameMap {
    'squeeze-burger': SqueezeBurger;
  }
}
