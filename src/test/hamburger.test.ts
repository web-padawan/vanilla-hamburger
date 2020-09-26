import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import { fixture, html, nextFrame } from '@open-wc/testing-helpers';
import type { TiltBurger } from '../tilt-burger';

describe('hamburger', () => {
  let burger: TiltBurger;

  describe('lazy upgrade', () => {
    it('should work with properties set before upgrade', async () => {
      burger = document.createElement('tilt-burger');
      document.body.appendChild(burger);
      burger.direction = 'right';
      burger.distance = 'lg';
      burger.duration = 0.5;
      burger.size = 24;
      await import('../tilt-burger');
      expect(burger.direction).to.equal('right');
      expect(burger.distance).to.equal('lg');
      expect(burger.duration).to.equal(0.5);
      expect(burger.size).to.equal(24);
      document.body.removeChild(burger);
    });
  });

  describe('properties', () => {
    beforeEach(async () => {
      burger = await fixture(html`<tilt-burger></tilt-burger>`);
    });

    it('should set default direction property value', () => {
      expect(burger.direction).to.equal('left');
    });

    it('should set default distance property value', () => {
      expect(burger.distance).to.equal('md');
    });

    it('should set default duration property value', () => {
      expect(burger.duration).to.equal(0.4);
    });

    it('should set default size property value', () => {
      expect(burger.size).to.equal(32);
    });

    it('should set default easing property value', () => {
      expect(burger.easing).to.equal('cubic-bezier(0, 0, 0, 1)');
    });

    it('should set default pressed property value', () => {
      expect(burger.pressed).to.equal(false);
    });
  });

  describe('attributes', () => {
    beforeEach(async () => {
      burger = await fixture(html`<tilt-burger></tilt-burger>`);
    });

    it('should set direction property when attribute changes', () => {
      burger.setAttribute('direction', 'right');
      expect(burger.direction).to.equal('right');
    });

    it('should set distance property when attribute changes', () => {
      burger.setAttribute('distance', '0.5');
      expect(burger.distance).to.equal(0.5);
    });

    it('should set size property when attribute changes', () => {
      burger.setAttribute('size', '24');
      expect(burger.size).to.equal(24);
    });

    it('should set easing property when attribute changes', () => {
      burger.setAttribute('easing', 'ease-in');
      expect(burger.easing).to.equal('ease-in');
    });

    it('should set pressed property when attribute changes', () => {
      burger.setAttribute('pressed', '');
      expect(burger.pressed).to.equal(true);
    });
  });

  describe('native button', () => {
    let button: HTMLElement;

    beforeEach(async () => {
      burger = await fixture(html`<tilt-burger></tilt-burger>`);
      button = burger.shadowRoot?.querySelector('button') as HTMLElement;
    });

    it('should render native button in shadow root', () => {
      expect(button).to.be.ok;
    });

    it('should set aria-pressed to false by default', () => {
      expect(button.getAttribute('aria-pressed')).to.equal('false');
    });

    it('should update aria-pressed on button click', () => {
      button.click();
      expect(button.getAttribute('aria-pressed')).to.equal('true');
    });

    it('should update aria-pressed on pressed change', () => {
      burger.pressed = true;
      expect(button.getAttribute('aria-pressed')).to.equal('true');
    });
  });

  describe('styles', () => {
    let root: ShadowRoot;
    let bars: HTMLElement[];

    beforeEach(async () => {
      burger = await fixture(html`<tilt-burger></tilt-burger>`);
      root = burger.shadowRoot as ShadowRoot;
      bars = Array.from(root.querySelectorAll('[part="bar"]'));
    });

    it('should change display to none when hidden', () => {
      burger.setAttribute('hidden', '');
      expect(getComputedStyle(burger).display).to.equal('none');
    });

    it('should set bars background when color is set', () => {
      burger.style.color = 'red';
      bars.forEach((bar) => {
        expect(getComputedStyle(bar).backgroundColor).to.equal('rgb(255, 0, 0)');
      });
    });
  });

  describe('pressed', () => {
    beforeEach(async () => {
      burger = await fixture(html`<tilt-burger></tilt-burger>`);
    });

    it('should toggle pressed property on click', () => {
      burger.dispatchEvent(new CustomEvent('click'));
      expect(burger.pressed).to.equal(true);
      burger.dispatchEvent(new CustomEvent('click'));
      expect(burger.pressed).to.equal(false);
    });

    it('should fire pressed-changed event when property changes', () => {
      const spy = sinon.spy();
      burger.addEventListener('pressed-changed', spy);
      burger.click();
      expect(spy.callCount).to.equal(1);
    });
  });

  describe('render', () => {
    let spy: sinon.SinonSpy;

    beforeEach(async () => {
      burger = await fixture(html`<tilt-burger></tilt-burger>`);
      spy = sinon.spy(burger.style, 'setProperty');
    });

    it('should update styles when direction property changes', async () => {
      burger.direction = 'right';
      await nextFrame();
      expect(spy.callCount).to.equal(2);
    });

    it('should update styles when duration property changes', async () => {
      burger.duration = 0.5;
      await nextFrame();
      expect(spy.callCount).to.equal(2);
    });

    it('should update styles when size property changes', async () => {
      burger.size = 24;
      await nextFrame();
      expect(spy.callCount).to.equal(2);
    });

    it('should update styles when easing property changes', async () => {
      burger.easing = 'ease-in';
      await nextFrame();
      expect(spy.callCount).to.equal(2);
    });

    it('should update styles when pressed property changes', async () => {
      burger.pressed = true;
      await nextFrame();
      expect(spy.callCount).to.equal(2);
    });

    it('should only trigger update once within a microtask', async () => {
      burger.distance = 'lg';
      burger.pressed = true;
      burger.easing = 'ease-in';
      await nextFrame();
      expect(spy.callCount).to.equal(2);
    });
  });
});
