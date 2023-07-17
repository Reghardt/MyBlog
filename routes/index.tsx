import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { Handlers, PageProps } from "$fresh/server.ts";
import { articleDetails, IArticleDetails } from "../articleDetails.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render({ articles: articleDetails });
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
                  <a
                    class={"no-underline"}
                    href={`/article/${article.mdxFileName}`}
                  >
                    <div class={" rounded bg-gray-100 p-2 hover:bg-gray-200"}>
                      <h2 class={"my-6"}>
                        <div>{article.title}</div>
                      </h2>
                      {/* <div class={"flex justify-end items-center gap-2"}>
                          <div>10</div>
                          <IconEye/>
                        </div> */}
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
