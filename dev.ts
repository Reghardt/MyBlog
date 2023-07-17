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

import { esbuild } from "$fresh/src/server/deps.ts";
// import { Bundler } from "$fresh/src/server/bundle.ts";
import mdx from '@mdx-js/esbuild'

const files: string[] = []

for await (const dirEntry of Deno.readDir("md")) {
    console.log(dirEntry.name);
    files.push(`./md/${dirEntry.name}`)
}

console.log(files)

await esbuild.build({
  entryPoints: files,
//   outfile: 'output.js',

  outdir: './compiled',
  format: 'esm',
  plugins: [mdx({allowDangerousRemoteMdx: true, jsxRuntime: "automatic", jsxImportSource: "preact", useDynamicImport: true /* Other options… */})]
})


await dev(import.meta.url, "./main.ts");
