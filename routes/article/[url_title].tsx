import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps, RouteContext } from "$fresh/server.ts";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "preact/jsx-runtime";
import { IArticleDetails } from "../../Interfaces/IArticleDetails.ts";
import Error404 from "../_404.tsx";
import LikeArticle from "../../islands/LikeArticle.tsx";

async function getArticleIndex() {
  return JSON.parse(
    await Deno.readTextFile("./json/articles.json"),
  ) as IArticleDetails[];
}

async function retreiveArticleContentFromIndex(
  url_title: string,
  articleIndex: IArticleDetails[],
) {
  for (let i = 0; i < articleIndex.length; i++) {
    const article = articleIndex[i];
    if (article.url === url_title) {
      return await Deno.readTextFile(`./md/${article.fileName}.mdx`);
    }
  }
  throw new Error("no article with that name found");
}

function evaluateArticle(articleContent: string) {
  return evaluate(articleContent, {
    ...runtime,
    useDynamicImport: true,
  });
}

async function incrementArticleViews(url_title: string) {
  const kv = await Deno.openKv();
  await kv
    .atomic()
    .mutate({
      type: "sum",
      key: ["articles", url_title],
      value: new Deno.KvU64(1n),
    })
    .commit();
}
// export const handler: Handlers = {
//   async GET(_req, ctx) {
//     try {
//       const { url_title } = ctx.params;

//       const articleIndex = await getArticleIndex();

//       if (articleIndex) {
//         for (let i = 0; i < articleIndex.length; i++) {
//           const article = articleIndex[i];
//           if (article.url === url_title) {
//             const articleMDX = await evaluate(
//               await Deno.readTextFile(`./md/${article.fileName}.mdx`),
//               {
//                 ...runtime,
//                 useDynamicImport: true,
//               },
//             );

//             // if (Deno.env.get("ISPROD") && Deno.env.get("ISPROD") === "true") {
//             const kv = await Deno.openKv();

//             await kv
//               .atomic()
//               .mutate({
//                 type: "sum",
//                 key: ["articles", article.url],
//                 value: new Deno.KvU64(1n),
//               })
//               .commit();

//             const res = await kv.get<string>(["articles", article.url]);
//             console.log(res);
//             // }

//             return ctx.render({
//               articleContent: articleMDX.default({}),
//             });
//           }
//         }
//         return ctx.renderNotFound();
//       } else {
//         return ctx.renderNotFound();
//       }
//     } catch (e) {
//       return ctx.renderNotFound();
//     }
//   },
// };

export default async function MarkdownPage(req: Request, ctx: RouteContext) {
  const { url_title } = ctx.params;

  try {
    const articleIndex = await getArticleIndex();
    const articleContent = await retreiveArticleContentFromIndex(
      url_title,
      articleIndex,
    );
    incrementArticleViews(url_title);
    const evaluatedArticle = await evaluateArticle(articleContent);

    return (
      <div
        class={
          "relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50  md:py-8 lg:py-12"
        }
      >
        <div
          class={
            "relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-28 lg:pt-16"
          }
        >
          <div class={"prose prose-slate mx-auto mt-8 lg:prose-lg"}>
            <div className={"pb-4"}>
              <a class={"text-blue-700 no-underline"} href={`/`}>
                {"< "}Articles
              </a>
            </div>

            {evaluatedArticle.default({})}
          </div>
          <div class={" prose mx-auto mt-8 flex justify-end lg:prose-lg"}>
            <LikeArticle url_title={url_title} />
          </div>
        </div>
      </div>
    );
  } catch (e) {
    console.log(e);
    return Error404();
  }
}
