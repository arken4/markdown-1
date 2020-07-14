---
title    : Hello world!
subtitle : Front-matter test
an-ordinary-list: 
  - this
  - is
  - a: list
---
# Hello World

## This an example for `md2html.ts`

A small paragraph that will become a `<p>` tag

---

Code Block (md2html.ts)

```typescript
import { Marked } from "./mod.ts";

const decoder = new TextDecoder("utf-8");
const filename = Deno.args[0];
const markdown = decoder.decode(await Deno.readFile(filename));
const markup = Marked.parse(markdown);
```

This module is forked from [ts-stack/markdown](https://github.com/ts-stack/markdown/tree/bb47aa8e625e89e6aa84f49a98536a3089dee831)

Made for Deno
![deno-logo](https://deno.land/logo.svg)
