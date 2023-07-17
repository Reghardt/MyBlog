#!/usr/bin/env -S deno run -A --watch=static/,routes/


// yaml.loadAll()

import dev from "$fresh/dev.ts";
// import * as runtime from 'preact/jsx-runtime'
// import { compile } from 'mdx';


// console.log("reload")

// for await (const dirEntry of Deno.readDir("md")) {
//     console.log(dirEntry.name);
    
//     // console.log()

//     Deno.writeTextFile(`./compiled/${dirEntry.name}.tsx`,await compile({file: `./md/${dirEntry.name}`}, {...runtime, outputFormat: 'function-body', development: false}) )
// }



import { evaluate } from "@mdx-js/mdx"
import * as runtime from 'preact/jsx-runtime'

for await (const dirEntry of Deno.readDir("md")) {
  console.log(dirEntry.name);
  const res = await evaluate(await Deno.readTextFile(`./md/${dirEntry.name}`), {...runtime, useDynamicImport: true})
  console.log(res)
}

await dev(import.meta.url, "./main.ts");
