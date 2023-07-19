import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { IArticleDetails } from "../Interfaces/IArticleDetails.ts";
import IconEye from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/eye.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const articles = JSON.parse(
      await Deno.readTextFile("./json/articles.json"),
    ) as IArticleDetails[];

    const getMany: string[][] = [];

    for (let i = 0; i < articles.length; i++) {
      getMany.push(["articles", articles[i].url]);
    }

    // console.log(getMany);

    const kv = await Deno.openKv();

    const result = await kv.getMany(getMany);
    console.log();

    for (let i = 0; i < result.length; i++) {
      console.log(result[i].value);
      if (result[i].value) {
        (result[i].value as Deno.KvU64).value;
        articles[i].views = Number((result[i].value as Deno.KvU64).value);
      } else {
        articles[i].views = 0;
      }
    }

    return ctx.render({ articles: articles });
  },
};

export default function Home(
  props: PageProps<{ articles: IArticleDetails[] }>,
) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <body>
        <div class="grid w-full justify-center">
          <div class="prose w-full p-4">
            <div class={"grid grid-cols-1 gap-4"}>
              {props.data.articles.reverse().map((article) => {
                return (
                  <a class={"no-underline"} href={`/article/${article.url}`}>
                    <div class={" rounded bg-gray-100 p-2 hover:bg-gray-200"}>
                      <h2 class={"my-6"}>
                        <div>{article.title}</div>
                      </h2>
                      <div class="flex w-full justify-between">
                        <div>{new Date(article.date).toLocaleDateString()}</div>

                        <div class={"w-full"}></div>

                        <div class={"flex items-center justify-end gap-2"}>
                          <div>{article.views}</div>
                          <IconEye />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div class={" mb-10 mt-6 flex justify-center"}>
            <a href="https://fresh.deno.dev">
              <img
                width="197"
                height="37"
                src="https://fresh.deno.dev/fresh-badge.svg"
                alt="Made with Fresh"
              />
            </a>
          </div>
        </div>
      </body>
    </>
  );
}
