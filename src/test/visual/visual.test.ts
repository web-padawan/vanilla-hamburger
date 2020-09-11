import { visualDiff } from '@web/test-runner-visual-regression';
import { fixture, nextFrame } from '@open-wc/testing-helpers';
import type { Burger } from '../../lib/components/burger';
import '../../cross-burger.js';
import '../../fade-burger.js';
import '../../pivot-burger.js';
import '../../rotate-burger.js';
import '../../slant-burger.js';
import '../../sling-burger.js';
import '../../spin-burger.js';
import '../../spiral-burger.js';
import '../../squash-burger.js';
import '../../squeeze-burger.js';
import '../../tilt-burger.js';
import '../../turn-burger.js';
import '../../twirl-burger.js';

describe('visual tests', () => {
  let burger: Burger;

  [
    'cross',
    'fade',
    'pivot',
    'rotate',
    'slant',
    'sling',
    'spin',
    'spiral',
    'squash',
    'squeeze',
    'tilt',
    'turn',
    'twirl'
  ].forEach((type) => {
    describe(`${type}-burger`, () => {
      beforeEach(async () => {
        burger = await fixture(`<${type}-burger></${type}-color-picker>`);
      });

      it(`should render default ${type}-burger`, async () => {
        await visualDiff(burger, `${type}-default`);
      });

      it(`should render pressed ${type}-burger`, async () => {
        burger.pressed = true;
        await nextFrame();
        await visualDiff(burger, `${type}-pressed`);
      });
    });
  });
});
