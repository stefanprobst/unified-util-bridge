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
import { unified } from 'unified'
import fromMarkdown from 'remark-parse'
import toMarkdown from 'remark-stringify'
import strip from 'strip-markdown'
import bridge from '@stefanprobst/unified-util-bridge'
import toHast from 'remark-rehype'
import toHtml from 'rehype-stringify'

const content = '**This** is *some* text.'

const processor = unified()
  .use(fromMarkdown)
  .use(bridge, 'plaintext', unified().use(strip).use(toMarkdown))
  .use(toHast)
  .use(toHtml)
const file = processor.processSync(content)
console.log(String(file)) // markdown transformed to html
console.log(file.data.plaintext) // markdown transformed to plaintext
```
