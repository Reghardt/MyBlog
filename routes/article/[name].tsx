import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { extract } from "$std/front_matter/yaml.ts";
import { CSS, render } from "$gfm";

interface Page {
    attrs: Record<string, unknown>,
    body: string
}

export const handler: Handlers = {
    async GET(_req, ctx){
        const {name} = ctx.params;

        try{
            const rawMarkdown = await Deno.readTextFile(`./md/${name}`);
            const extractedMd = extract(rawMarkdown);
            console.log(extractedMd.frontMatter.split('\r\n'))

            return ctx.render({attrs: extractedMd.attrs, body: extractedMd.body})
        }
        catch(e)
        {
            return ctx.renderNotFound()
        }
    }
}

export default function MarkdownPage({data} : PageProps<Page>){

    return(
        <>
            <Head>
                <style dangerouslySetInnerHTML={{ __html: CSS }} /> {/** not dangerous in this case as it is comming from a trusted source, ie the server  */}
            </Head>
            <main>
                <div class={" flex items-center justify-center"}>
                    <div>
                        <div className="w-[50em] bg-slate-200" dangerouslySetInnerHTML={{ __html: render(data?.body) }}/>
                    </div>
                    
                </div>
                
            </main>
        </>
    )
}