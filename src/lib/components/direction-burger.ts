import { Burger } from './burger.js';

export abstract class DirectionBurger extends Burger {
  static get observedAttributes(): string[] {
    return super.observedAttributes.concat('direction');
  }

  /**
   * The animation direction of the icon, left or right.
   * @type {'left' | 'right'}
   * @default left
   */
  get direction(): 'left' | 'right' {
    const direction = this.getAttribute('direction');
    return direction === 'right' ? 'right' : 'left';
  }

  set direction(direction: 'left' | 'right') {
    this.setAttribute('direction', direction);
  }
}
