import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "preact/jsx-runtime";
import { JSX } from "https://esm.sh/v128/preact@10.15.1/src/index.js";
import { IArticleDetails } from "../../Interfaces/IArticleDetails.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    console.log("hello");
    try {
      const { url_title } = ctx.params;

      const articles = JSON.parse(
        await Deno.readTextFile("./json/articles.json"),
      ) as IArticleDetails[];

      if (articles) {
        for (let i = 0; i < articles.length; i++) {
          const article = articles[i];
          if (article.url === url_title) {
            const articleMDX = await evaluate(
              await Deno.readTextFile(`./md/${article.fileName}.mdx`),
              {
                ...runtime,
                useDynamicImport: true,
              },
            );

            const kv = await Deno.openKv();

            await kv
              .atomic()
              .mutate({
                type: "sum",
                key: ["articles", article.url],
                value: new Deno.KvU64(1n),
              })
              .commit();

            const res = await kv.get<string>(["articles", article.url]);
            console.log(res);

            return ctx.render({ articleContent: articleMDX.default({}) });
          }
        }
        return ctx.renderNotFound();
      } else {
        return ctx.renderNotFound();
      }
    } catch (e) {
      return ctx.renderNotFound();
    }
  },
};

export default function MarkdownPage({
  data,
}: PageProps<{ articleContent: JSX.Element }>) {
  return (
    <>
      <Head>
        <title>{}</title>
      </Head>

      <main>
        <div class={"flex w-full justify-center"}>
          <div class={"prose p-2 "}>{data.articleContent}</div>
        </div>
      </main>
    </>
  );
}
