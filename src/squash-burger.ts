import { Squash } from './lib/entrypoints/squash.js';

export class SquashBurger extends Squash {}

customElements.define('squash-burger', SquashBurger);

declare global {
  interface HTMLElementTagNameMap {
    'squash-burger': SquashBurger;
  }
}
