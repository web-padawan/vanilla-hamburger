import { Fade } from './lib/entrypoints/fade.js';

export class FadeBurger extends Fade {}

customElements.define('fade-burger', FadeBurger);

declare global {
  interface HTMLElementTagNameMap {
    'fade-burger': FadeBurger;
  }
}
