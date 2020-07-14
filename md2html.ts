import { Marked } from "./mod.ts";

const decoder = new TextDecoder("utf-8");
const filename = Deno.args[0];
const markdown = decoder.decode(await Deno.readFile(filename));
const markup = await Marked.parse(markdown);
console.log(Marked.content);
console.log(Marked.metadata);