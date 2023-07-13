import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { evaluateSync  } from "mdx"
import * as runtime from 'preact/jsx-runtime'



interface Page {
    attrs: Record<string, unknown>,
    body: string
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



    const res = evaluateSync(data.rawMarkdown, {...runtime})
    
    return(
        <>

            <Head>
                <title>Why Blog?</title>
            </Head>

            <main>
                <div class={"flex justify-center"}>
                    <div class={"prose p-2"}>
                        {/* <div>
                            <div dangerouslySetInnerHTML={{ __html: "<h1>Hello</h1>" }}/>
                            
                        </div> */}
                        <div class={" bg-slate-100"}>Test</div>
                        {res.default({})}
                    </div>
                </div>

                
            </main>
        </>
    )
}