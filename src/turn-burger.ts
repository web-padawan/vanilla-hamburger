import { Turn } from './lib/entrypoints/turn.js';

export class TurnBurger extends Turn {}

customElements.define('turn-burger', TurnBurger);

declare global {
  interface HTMLElementTagNameMap {
    'turn-burger': TurnBurger;
  }
}
