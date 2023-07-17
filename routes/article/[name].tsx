import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { evaluateSync, compileSync } from "@mdx-js/mdx"
import Test from "../../compiled/0_why_blog.js"
import * as runtime from 'preact/jsx-runtime'
import { VNode } from "https://esm.sh/v128/preact@10.15.1/src/index.js";

interface Page {
    titel: Record<string, unknown>,
    rawMarkdown: string
}

export const handler: Handlers = {
    async GET(_req, ctx){
        const {name} = ctx.params;
        const res = await import(`../../compiled/${name}.js`)
        // console.log(res.default)
        res


        
        try{
            const rawMarkdown = await Deno.readTextFile(`./md/${name}.mdx`);
            return ctx.render({rawMarkdown: rawMarkdown, Ren: res})
        }
        catch(e)
        {
            return ctx.renderNotFound()
        }
    }
}

export default function MarkdownPage({data} : PageProps<{rawMarkdown: string, Ren: any}>){
    
    const Comp = data.Ren

    return(
        <>
            <Head>
                <title>{}</title>
            </Head>

            <main>
                <div class={"flex justify-center"}>
                    <div class={"prose w-full p-2"}>
                    {Comp.default({})}
                    </div>
                </div>

                
            </main>
        </>
    )
}