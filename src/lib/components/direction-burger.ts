import { Burger } from './burger.js';
import { props, update } from '../internals';

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
    return this[props].direction;
  }

  set direction(distance: 'left' | 'right') {
    this[props].direction = distance;
    this[update]();
  }
}
