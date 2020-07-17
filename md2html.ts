import { Marked } from "./mod.ts";

const decoder = new TextDecoder("utf-8");
const filename = Deno.args[0];
const markdown = decoder.decode(await Deno.readFile(filename));
const marked = Marked.parse(markdown);
console.log(marked.content);
console.log(marked.metadata);
