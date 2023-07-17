#!/usr/bin/env -S deno run -A --watch=static/,routes/
import dev from "$fresh/dev.ts";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "preact/jsx-runtime";

//npx onchange \"./routes\" -- npx prettier --write ./routes/index.tsx --plugin=prettier-plugin-tailwindcss &

for await (const dirEntry of Deno.readDir("md")) {
  console.log(dirEntry.name);
  const res = await evaluate(await Deno.readTextFile(`./md/${dirEntry.name}`), {
    ...runtime,
    useDynamicImport: true,
  });
  console.log(res);
}

// const proc = new Deno.Command("cmd", {
//   args: [
//     "/c",
//     "npx prettier --write ./routes --plugin=prettier-plugin-tailwindcss",
//   ],
// });
// const output = await proc.output();
// console.log(new TextDecoder().decode(output.stdout));

await dev(import.meta.url, "./main.ts");
