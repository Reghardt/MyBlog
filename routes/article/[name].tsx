import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { evaluateSync  } from "mdx"
import * as runtime from 'preact/jsx-runtime'



interface Page {
    titel: Record<string, unknown>,
    rawMarkdown: string
}



export const handler: Handlers = {
    async GET(_req, ctx){
        const {name} = ctx.params;
        try{
            const rawMarkdown = await Deno.readTextFile(`./md/${name}.mdx`);
            return ctx.render({rawMarkdown: rawMarkdown})
        }
        catch(e)
        {
            return ctx.renderNotFound()
        }
    }
}

export default function MarkdownPage({data} : PageProps<{rawMarkdown: string}>){

    const evaluatedMarkdown = evaluateSync(data.rawMarkdown, {...runtime})
    
    return(
        <>
            <Head>
                <title>{}</title>
            </Head>

            <main>
                <div class={"flex justify-center"}>
                    <div class={"prose w-full p-2"}>
                        {evaluatedMarkdown.default({})}
                    </div>
                </div>


                
            </main>
        </>
    )
}