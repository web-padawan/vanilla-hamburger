import { Burger } from './burger.js';

export abstract class DirectionBurger extends Burger {
  static get observedAttributes(): string[] {
    return super.observedAttributes.concat('direction');
  }

  private _direction!: 'left' | 'right';

  /**
   * The animation direction of the icon, left or right.
   * @type {'left' | 'right'}
   * @default left
   */
  get direction(): 'left' | 'right' {
    return this._direction;
  }

  set direction(distance: 'left' | 'right') {
    this._direction = distance;
    this.update();
  }
}
