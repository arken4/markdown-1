import { Marked } from "./mod.ts";

const decoder = new TextDecoder("utf-8");
const filename = Deno.args[0];
const markdown = decoder.decode(await Deno.readFile(filename));
const markup = Marked.parse(markdown);
console.log(Marked.fm());
// console.log(markup);


// import init, {parse} from 'https://deno.land/x/yaml_wasm@0.1.9/index.js'
// await init()

// // Convert YAML text to JavaScript object
// const [value] = parse(`
// abc:
//   def: (Start Wars) [eps 5] Who the fuck are you!?
// foo:
//   - bar
// `)
// console.log(value)