import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { Handlers, PageProps } from "$fresh/server.ts";
import { useEffect } from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";
import { idb } from "idb"


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

  //why can useSignal be used here, which is a hook, but useEffect can not?

  
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class={" p-4"}>
        {props.data.filenames.map((name) => {
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
