import { Pivot } from './lib/entrypoints/pivot.js';

export class PivotBurger extends Pivot {}

customElements.define('pivot-burger', PivotBurger);

declare global {
  interface HTMLElementTagNameMap {
    'pivot-burger': PivotBurger;
  }
}
