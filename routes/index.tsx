import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { Handlers, PageProps } from "$fresh/server.ts";

interface IArticle {
  title: string, date: Date, url: string, peekContent: string
}

export const handler: Handlers = {
  GET(_req, ctx){
    const articles: IArticle[] = [
      {
        title: "Why Blog?", date: new Date(" 13 07 2023"),
        url: "0_why_blog",
        peekContent: "test content"
      },
    ]

    // const files = Deno.readDirSync("./md");
    // const filenames: string[] = [];
    
    // for(const file of files)
    // {
    //   filenames.push(file.name);
    // }

    // filenames.sort((a, b) => { return Number(b.at(0)) - Number(a.at(0)) })    
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
      <div class={" p-4"}>
        {props.data.articles.map((article) => {
            return(
              <div>
                <a href={`/article/${article.url}`}>{article.title}</a>
                
              </div>
            )
          })
        }
      </div>
    </>
  );
}
