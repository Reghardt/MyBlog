#!/usr/bin/env -S deno run -A --watch=static/,routes/
import dev from "$fresh/dev.ts";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "preact/jsx-runtime";
import { IArticleDetails } from "./Interfaces/IArticleDetails.ts";

const articleDetails: IArticleDetails[] = [];

interface MDXModuleExtended
  extends Awaited<Promise<ReturnType<typeof evaluate>>> {
  title?: string;
  date?: string;
  peek?: string;
  published?: boolean;
}

function createUrlStringFromTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/-+/g, "")
    .replace(/\s+/g, "-")
    .replace(/\'|:|;|\?|\!|\(|\)/g, "");
}

for await (const dirEntry of Deno.readDir("md")) {
  const res = (await evaluate(
    await Deno.readTextFile(`./md/${dirEntry.name}`),
    {
      ...runtime,
      useDynamicImport: true,
    },
  )) as MDXModuleExtended;

  if (res.title === undefined) {
    throw new TypeError(`Article ${dirEntry.name} does not have a title`);
  } else if (res.date === undefined) {
    throw new TypeError(`Article ${dirEntry.name} does not have a date.`);
  } else if (res.peek === undefined) {
    throw new TypeError(`Article ${dirEntry.name} does not have peek string`);
  } else if (res.published === undefined) {
    throw new TypeError(
      `Article ${dirEntry.name} does not have a published boolean.`,
    );
  } else {
    articleDetails.push({
      title: res.title,
      url: createUrlStringFromTitle(res.title),
      date: res.date,
      peek: res.peek,
      published: res.published,
      fileName: dirEntry.name.slice(0, -4),
      views: 0,
      image: "",
    });
  }
}

// console.log(JSON.stringify(articleDetails));

await Deno.writeTextFile(
  "./json/articles.json",
  JSON.stringify(articleDetails),
);

// const proc = new Deno.Command("cmd", {
//   args: [
//     "/c",
//     "npx prettier --write ./routes --plugin=prettier-plugin-tailwindcss",
//   ],
// });
// const output = await proc.output();
// console.log(new TextDecoder().decode(output.stdout));

await dev(import.meta.url, "./main.ts");
