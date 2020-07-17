import { Marked } from "./mod.ts";

const decoder = new TextDecoder("utf-8");
const filename = Deno.args[0];
const markdown = decoder.decode(await Deno.readFile(filename));
let a = performance.now();
const marked = Marked.parse(markdown);
let b = performance.now();
console.log(b-a)
console.log(marked.content);
console.log(marked.metadata.title);