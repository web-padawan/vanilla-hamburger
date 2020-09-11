import { Burger } from './burger.js';

export abstract class DirectionBurger extends Burger {
  static get observedAttributes(): string[] {
    return super.observedAttributes.concat('direction');
  }

  private _direction!: string;

  get direction(): string {
    return this._direction;
  }

  set direction(distance: string) {
    this._direction = distance;
    this.update();
  }
}
