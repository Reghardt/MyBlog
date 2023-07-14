import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { Handlers, PageProps } from "$fresh/server.ts";
import IconEye from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/eye.tsx"
interface IArticle {
  title: string, date: Date, mdxName: string, peekContent: string
}

export const handler: Handlers = {
  GET(_req, ctx){
    const articles: IArticle[] = [
      {
        title: "Why Blog?", date: new Date(" 13 07 2023"),
        mdxName: "0_why_blog",
        peekContent: "test content"
      },
      {
        title: "A CS Graduates first Development: Marco Polo", date: new Date(" 13 07 2023"),
        mdxName: "1_first_dev",
        peekContent: "test content"
      },
      {
        title: "A CS Graduates second Development: ZA Route", date: new Date(" 13 07 2023"),
        mdxName: "2_second_dev",
        peekContent: "test content"
      },
      {
        title: "Purposefully Uncomfortable: Electronics - Building a water tank refill system", date: new Date(" 13 07 2023"),
        mdxName: "3_pu_1_electronics_wtp",
        peekContent: "test content"
      },
      {
        title: "Purposefully Uncomfortable: Using Deno and Fresh JS", date: new Date(" 13 07 2023"),
        mdxName: "4_pu_2_deno_and_fresh",
        peekContent: "test content"
      },
      {
        title: "Purposefully Uncomfortable: Temp and Humidity Sensor using ESP 01", date: new Date(" 13 07 2023"),
        mdxName: "5_pu_3_esp01",
        peekContent: "test content"
      },
      {
        title: "Tutorial: Tailwind in Fresh with IntelliSense", date: new Date(" 13 07 2023"),
        mdxName: "6_tut_tailwind_fresh",
        peekContent: "test content"
      },
      {
        title: "Tutorial: MDX in Fresh (with Tailwind)", date: new Date(" 13 07 2023"),
        mdxName: "7_tut_mdx_fresh",
        peekContent: "test content"
      },
    ]   
    return ctx.render({articles: articles})
  }
}

export default function Home(props : PageProps<{articles: IArticle[]}>) {
  const count = useSignal(3);

  //why can useSignal be used here, which is a hook, but useEffect can not?

  
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>

      <div class={"w-full grid justify-center "}>
        <div class={"p-4 prose"}>
          <div class={" grid grid-cols-1 gap-6"}>
            {props.data.articles.reverse().map((article) => {
                return(
                  <a class={"no-underline"} href={`/article/${article.mdxName}`}>
                    <div class={" bg-gray-100 hover:bg-gray-200 p-2 rounded"}>
                      <h2 class={"my-6"}>
                        <div>{article.title}</div>
                      </h2>
                      <div class={"flex justify-end items-center gap-2"}>
                        <div>10</div>
                        <IconEye/>
                      </div>
                      
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
      </div>

    </>
  );
}
