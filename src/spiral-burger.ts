import { Spiral } from './lib/entrypoints/spiral.js';

export class SpiralBurger extends Spiral {}

customElements.define('spiral-burger', SpiralBurger);

declare global {
  interface HTMLElementTagNameMap {
    'spiral-burger': SpiralBurger;
  }
}
