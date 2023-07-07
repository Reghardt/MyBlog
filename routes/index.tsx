import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req, ctx){

    const files = Deno.readDirSync("./md");
    const filenames: string[] = [];
    
    for(const file of files)
    {
      filenames.push(file.name);
    }

    filenames.sort((a, b) => { return Number(b.at(0)) - Number(a.at(0)) })    
    return ctx.render({filenames: filenames})
  }
}

export default function Home(props : PageProps<{filenames: string[]}>) {
  const count = useSignal(3);


  
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class={" p-4"}>
        {
          props.data.filenames.map((name) => {
            return(
              <div>
                <a href={`/article/${name}`}>{name}</a>
                
              </div>
            )
          })
        }
      </div>
    </>
  );
}
