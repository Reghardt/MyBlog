import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { Handlers, PageProps } from "$fresh/server.ts";
import IconEye from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/eye.tsx"
import { articleDetails, IArticleDetails } from "../articleDetails.ts";
// import { JSXInternal } from "https://esm.sh/v128/preact@10.15.1/src/jsx.js";
import { createElement, render, JSX } from "https://esm.sh/v128/preact@10.15.1/src/index.js";

export const handler: Handlers = {
  async GET(_req, ctx){

    // const pg = await import("./testComp.tsx")
    // pg.default()
    


    return ctx.render({articles: articleDetails}) //, comp: pg.default()
  }
}

export default function Home(props : PageProps<{articles: IArticleDetails[]}>) { //, comp: JSX.Element

  // console.log(props.data.comp.props)

  // const TestElem = props.data.comp

  // return TestElem

  // function ren()
  // {
  //   return TestElem
  // }


  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <body>

        <div class={"w-full grid justify-center "}>
          <div class={"p-4 prose w-full"}>
            <div class={" grid grid-cols-1 gap-6"}>
              {props.data.articles.reverse().map((article) => {
                  return(
                    <a class={"no-underline"} href={`/article/${article.mdxFileName}`}>
                      <div class={" bg-gray-100 hover:bg-gray-200 p-2 rounded"}>
                        <h2 class={"my-6"}>
                          <div>{article.title}</div>
                        </h2>
                        {/* <div class={"flex justify-end items-center gap-2"}>
                          <div>10</div>
                          <IconEye/>
                        </div> */}
                      </div>
                    </a>
                  )
                })
              }
            </div>
          </div>

          <div class={" flex justify-center mb-10 mt-6"}>
            <a href="https://fresh.deno.dev">
              <img
                width="197"
                height="37"
                src="https://fresh.deno.dev/fresh-badge.svg"
                alt="Made with Fresh"
              />
            </a>
          </div>
          {/* {TestElem} */}

  
        </div>
      </body>

      

    </>
  );
}
