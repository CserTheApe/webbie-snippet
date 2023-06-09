# webbie-snippet [![NPM version](https://img.shields.io/npm/v/webbie-snippet.svg?style=flat)](https://www.npmjs.com/package/webbie-snippet) [![NPM monthly downloads](https://img.shields.io/npm/dm/webbie-snippet.svg?style=flat)](https://npmjs.org/package/webbie-snippet) [![NPM total downloads](https://img.shields.io/npm/dt/webbie-snippet.svg?style=flat)](https://npmjs.org/package/webbie-snippet)

Add code snippets to your page with this web component.

It's not very versatile, but you can pop a couple of code blocks onto your site without having to manually style and HTML encode your `<pre>` and `<code>` tags.

---

## Install

Install with npm: `npm install webbie-snippet`

---

## Usage

Add script to page with `<script type="module" src="path/to/dist/webbie-snippet.js"></script>`

```html
<webbie-snippet>
    --- The code/text which will be shown in snippet ---
</webbie-snippet>
```

---

## Props

All props are optional.

| Name | Description |
| ---- | ----------- |
| dark | display snippet in dark mode |
| numbered | show line numbers |
| manual-spacing | space the content as saved in source |
| enable-copy | provides a button to copy code snippet |
| pre-style | custom css for the `<pre>` tag |
| button-style | custom css for the copy button |

---

Further examples in `demo.html`