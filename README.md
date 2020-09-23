<p align="center">
  <a href="https://web-padawan.github.io/vanilla-hamburger/">
    <img alt="Preview" src="preview.gif" height="78" width="308">
  </a>
</p>

<div align="center">
  <a href="https://npmjs.org/package/vanilla-hamburger">
    <img alt="npm" src="https://img.shields.io/npm/v/vanilla-hamburger.svg" />
  </a>
  <a href="https://travis-ci.org/web-padawan/vanilla-hamburger">
    <img alt="build" src="https://travis-ci.org/web-padawan/vanilla-hamburger.svg?branch=master" />
  </a>
  <a href="https://bundlephobia.com/result?p=vanilla-hamburger">
    <img alt="gzip size" src="https://badgen.net/bundlephobia/minzip/vanilla-hamburger" />
  </a>
</div>

<p align="center">
  <strong>vanilla-hamburger</strong> is a port of <a href="https://github.com/luukdv/hamburger-react">hamburger-react</a> to vanilla Custom Elements.
</p>

## Features

- **Small**: Just 1,6 KB (minified and gzipped). [Size Limit](https://github.com/ai/size-limit) controls the size.
- **Fast**: Built with standards based Custom Elements.
- **Bulletproof**: Written in strict TypeScript and covered by 20+ tests.
- **Framework-agnostic**: Can be used [with any framework](https://custom-elements-everywhere.com/).
- **No dependencies**

## Live demo

- [Website](https://web-padawan.github.io/vanilla-hamburger/)
- [Angular example](https://components.studio/edit/B6UIy18tBWekjsdlcIzg)
- [LitElement example](https://components.studio/edit/MwlJAn0K1B5neVtunpFI)
- [React example](https://components.studio/edit/1Cta6NtUgJSSgyOYXB2n)
- [Svelte example](https://components.studio/edit/uL3KYNle783i1ehAlXJa)
- [Vue example](https://components.studio/edit/rsRiCxbap2Gh0wl3JZJn)

## Installation

```
npm install vanilla-hamburger --save
```

Or use one of the following content delivery networks:

[unpkg.com CDN](https://unpkg.com/vanilla-hamburger?module):

```html
<script type="module" src="https://unpkg.com/vanilla-hamburger?module"></script>
```

[Skypack CDN](https://cdn.skypack.dev/vanilla-hamburger):

```html
<script type="module" src="https://cdn.skypack.dev/vanilla-hamburger"></script>
```

## Usage

```html
<tilt-burger size="lg" aria-label="Toggle"></tilt-burger>
<script type="module">
  import 'vanilla-hamburger';

  const burger = document.querySelector('tilt-burger');
  burger.addEventListener('pressed-changed', (event) => {
    const pressed = event.detail.value;
  });
</script>
```

## Available variants

**vanilla-hamburger** provides 13 separate elements for different hamburger types.

| File to import        | HTML element       |
| --------------------- | ------------------ |
| `"cross-burger.js"`   | `<cross-burger>`   |
| `"fade-burger.js"`    | `<fade-burger>`    |
| `"pivot-burger.js"`   | `<pivot-burger>`   |
| `"rotate-burger.js"`  | `<rotate-burger>`  |
| `"slant-burger.js"`   | `<slant-burger>`   |
| `"sling-burger.js"`   | `<sling-burger>`   |
| `"spin-burger.js"`    | `<spin-burger>`    |
| `"spiral-burger.js"`  | `<spiral-burger>`  |
| `"squash-burger.js"`  | `<squash-burger>`  |
| `"squeeze-burger.js"` | `<squeeze-burger>` |
| `"tilt-burger.js"`    | `<tilt-burger>`    |
| `"turn-burger.js"`    | `<turn-burger>`    |
| `"twirl-burger.js"`   | `<twirl-burger>`   |

When using one hamburger, ~1.6 KB will be added to your bundle (min + gzip).

## Properties

The following properties can be used to customize hamburger elements:

| Property    | Default                    | Description                                             |
| ----------- | -------------------------- | ------------------------------------------------------- |
| `direction` | `left`                     | The animation direction of the icon, left or right.     |
| `distance`  | `md`                       | The distance between the lines: `sm`, `md` or `lg`.     |
| `duration`  | `0.4`                      | The duration of the animation. Can be set to zero.      |
| `easing`    | `cubic-bezier(0, 0, 0, 1)` | A valid `transition-timing-function` CSS value.         |
| `pressed`   | `false`                    | Set to true when element is pressed.                    |
| `size`      | `32`                       | Size of the icon. Should be a number between 12 and 48. |

**Note**: `direction` property is not supported by `<squash-burger>` and `<squeeze-burger>`.

## Overriding styles

**vanilla-hamburger** exposes [CSS Shadow Parts](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)
allowing to override the default styles:

```css
cross-burger {
  color: #999;
  outline: none;
}

cross-burger::part(bar) {
  border-radius: 9em;
}

cross-burger::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0;
  background-color: currentColor;
  transition: opacity 0.5s;
}

cross-burger:hover::before,
cross-burger:focus::before {
  opacity: 0.08;
  transition-duration: 0.2s;
}
```

## Base classes

**vanilla-hamburger** provides a set of base classes that can be imported without registering custom
elements. This is useful if you want to create your own hamburger icon with a different tag name.

```js
import { Cross } from 'vanilla-hamburger/lib/entrypoints/cross.js';

customElements.define('custom-burger', class extends Cross {});
```

## Accessibility

It is recommended to have a tap/click area of at least 48x48 pixels. Therefore, padding will be
added around the icon to create a surface of exactly this size.

Keyboard interaction is provided with the `enter` key, and the icon element has the recommended
accessibility attributes (such as `role` and `aria-pressed`).

Remember to use `aria-label` attribute to provide an accessible label for the icon.

## TypeScript support

**vanilla-hamburger** supports TypeScript and ships with types in the library itself; no need for any other install.

All the included custom elements are compatible with [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) and
[lit-plugin](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin) extension for Visual
Studio Code, so you can benefit from type checking in lit-html templates.

## Browser support

**vanilla-hamburger** uses [Custom Elements](https://caniuse.com/#feat=custom-elementsv1) and [Shadow DOM](https://caniuse.com/#feat=shadowdomv1),
and does not support IE11 or legacy Edge.

## Why vanilla-hamburger?

**vanilla-hamburger** has all the benefits of [hamburger-react](https://github.com/luukdv/hamburger-react#yet-another-hamburger-library) with one important difference.

While `hamburger-react` does not have direct dependencies, it still expects you to use React. This
means that Angular, Vue, Svelte or vanilla JS users would have an **extra** dependency in their apps.

Now when all the evergreen browsers support standards based [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements),
it's perfect time to build such tiny and lightweight UI controls as web components rather than framework components.
