import { Rotate } from './lib/entrypoints/rotate.js';

export class RotateBurger extends Rotate {}

customElements.define('rotate-burger', RotateBurger);

declare global {
  interface HTMLElementTagNameMap {
    'rotate-burger': RotateBurger;
  }
}
