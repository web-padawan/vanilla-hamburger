import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import { fixture, html, nextFrame } from '@open-wc/testing-helpers';
import type { TiltBurger } from '../tilt-burger.js';

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
      await import('../tilt-burger.js');
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

    it('should set default disabled property value', () => {
      expect(burger.disabled).to.equal(false);
    });

    it('should set default distance property value', () => {
      expect(burger.distance).to.equal('md');
    });

    it('should set default duration property value', () => {
      expect(burger.duration).to.equal(0.4);
    });

    it('should set default label property value', () => {
      expect(burger.label).to.equal('hamburger');
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

    it('should set duration property when attribute changes', () => {
      burger.setAttribute('duration', '0.5');
      expect(burger.duration).to.equal(0.5);
    });

    it('should set distance property when attribute changes', () => {
      burger.setAttribute('distance', 'lg');
      expect(burger.distance).to.equal('lg');
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

    it('should set pressed attribute when property changes', () => {
      burger.pressed = true;
      expect(burger.hasAttribute('pressed')).to.be.true;
    });

    it('should set disabled property when attribute changes', () => {
      burger.setAttribute('disabled', '');
      expect(burger.disabled).to.equal(true);
    });

    it('should set disabled attribute when property changes', () => {
      burger.disabled = true;
      expect(burger.hasAttribute('disabled')).to.be.true;
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

    it('should set part attribute on the native button', () => {
      expect(button.getAttribute('part')).to.equal('button');
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

    it('should not throw on disabled change if not connected', () => {
      expect(() => {
        document.createElement('tilt-burger').disabled = true;
      }).to.not.throw(Error);
    });

    it('should not throw on pressed change if not connected', () => {
      expect(() => {
        document.createElement('tilt-burger').pressed = true;
      }).to.not.throw(Error);
    });

    it('should not throw on label change if not connected', () => {
      expect(() => {
        document.createElement('tilt-burger').label = 'menu';
      }).to.not.throw(Error);
    });

    it('should toggle disabled on the native button', () => {
      burger.disabled = true;
      expect(button.hasAttribute('disabled')).to.be.true;
      burger.disabled = false;
      expect(button.hasAttribute('disabled')).to.be.false;
    });

    it('should set aria-label on the native button', () => {
      expect(button.getAttribute('aria-label')).to.equal('hamburger');
    });

    it('should update aria-label on label change', () => {
      burger.label = 'burger';
      expect(button.getAttribute('aria-label')).to.equal('burger');
    });

    it('should focus native button using focus method', () => {
      const spy = sinon.spy(button, 'focus');
      burger.focus();
      expect(spy.calledOnce).to.be.true;
    });

    it('should blur native button using blur method', () => {
      const spy = sinon.spy(button, 'blur');
      burger.blur();
      expect(spy.calledOnce).to.be.true;
    });

    it('should not throw on focus if not connected', () => {
      expect(() => {
        document.createElement('tilt-burger').focus();
      }).to.not.throw(Error);
    });

    it('should not throw on blur if not connected', () => {
      expect(() => {
        document.createElement('tilt-burger').blur();
      }).to.not.throw(Error);
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
      console.log((burger.shadowRoot!.querySelector('style') as HTMLElement).textContent);
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

    it('should not toggle pressed property on click if disabled', () => {
      burger.disabled = true;
      burger.click();
      expect(burger.pressed).to.equal(false);
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
