import { Cross } from './lib/entrypoints/cross.js';

export class CrossBurger extends Cross {}

customElements.define('cross-burger', CrossBurger);

declare global {
  interface HTMLElementTagNameMap {
    'cross-burger': CrossBurger;
  }
}
