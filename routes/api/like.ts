import { HandlerContext } from "$fresh/server.ts";

interface RequestExtended extends Request {
  json: () => Promise<{ url_title: string }>;
}

export const handler = async (
  req: RequestExtended,
  _ctx: HandlerContext,
): Promise<Response> => {
  // console.log((await req.json()).url_title);

  const url_title = (await req.json()).url_title;
  const kv = await Deno.openKv();
  await kv
    .atomic()
    .mutate({
      type: "sum",
      key: ["articles", url_title, "likes"],
      value: new Deno.KvU64(1n),
    })
    .commit();

  const val = await kv.get<Deno.KvU64>(["articles", url_title, "likes"]);
  if (val.value) {
    // console.log(Number(val.value.value));
    return new Response(JSON.stringify({ likes: Number(val.value.value) }));
  } else {
    return new Response(JSON.stringify({ likes: 0 }));
  }
};
