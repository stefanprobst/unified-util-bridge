# unified-util-bridge

[`unified`](https://unifiedjs.com/) plugin to process a tree in "bridge mode"
and expose the result on a `data` property on the original processor's `VFile`.

## How to install

```bash
yarn add @stefanprobst/unified-util-bridge
```

## How to use

The plugin takes two required parameters: the name of the `VFile` data property,
and a `unified` processor (compiler and transformers).

```js
const unified = require('unified')
const markdown = require('remark-parse')
const toMarkdown = require('remark-stringify')
const strip = require('strip-markdown')
const bridge = require('@stefanprobst/unified-util-bridge')
const toHast = require('remark-rehype')
const toHtml = require('rehype-stringify')
const content = '**This** is *some* text.'

const processor = unified()
  .use(markdown)
  .use(bridge, 'plaintext', unified().use(strip).use(toMarkdown))
  .use(toHast)
  .use(toHtml)
const { data, contents } = processor.processSync(content)
console.log(contents) // markdown transformed to html
console.log(data.plaintext) // markdown transformed to plaintext
```
