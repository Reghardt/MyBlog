import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
// import { evaluateSync, compileSync } from "@mdx-js/mdx"
// import Test from "../../compiled/0_why_blog.js"
// import * as runtime from 'preact/jsx-runtime'
import { VNode } from "https://esm.sh/v128/preact@10.15.1/src/index.js";

export const handler: Handlers = {
    async GET(_req, ctx){

        try{
            const {name} = ctx.params;
            const res = await import(`../../compiled/${name}.js`)
            // const re1 = await import("../../compiled/0_why_blog.js")
            return ctx.render({ Ren: res.default({})})
        }
        catch(e)
        {
            return ctx.renderNotFound()
        }
    }
}

export default function MarkdownPage({data} : PageProps<{rawMarkdown: string, Ren: VNode<any>}>){


    return(
        <>
            <Head>
                <title>{}</title>
            </Head>

            <main>
                <div class={"flex justify-center"}>
                    <div class={"prose w-full p-2"}>
                    {data.Ren}
                    </div>
                </div>

                
            </main>
        </>
    )
}