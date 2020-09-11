import { Spin } from './lib/entrypoints/spin.js';

export class SpinBurger extends Spin {}

customElements.define('spin-burger', SpinBurger);

declare global {
  interface HTMLElementTagNameMap {
    'spin-burger': SpinBurger;
  }
}
