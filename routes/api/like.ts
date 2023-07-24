import { HandlerContext, Handlers } from "$fresh/server.ts";

interface RequestExtended extends Request {
  json: () => Promise<{ url_title: string }>;
}

export const handler: Handlers = {
  async GET(req, _ctx) {
    const url = new URL(req.url);

    const url_title = url.searchParams.get("url_title");

    if (url_title) {
      const kv = await Deno.openKv();
      const likes = await kv.get<Deno.KvU64>(["articles", url_title, "likes"]);
      console.log(likes);
      if (likes.value) {
        return new Response(
          JSON.stringify({ likes: Number(likes.value.value) }),
        );
      } else {
        return new Response(JSON.stringify({ likes: 0 }));
      }
    } else {
      return new Response(JSON.stringify({ likes: 0 }));
    }
  },

  async POST(req, _ctx) {
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

    const likes = await kv.get<Deno.KvU64>(["articles", url_title, "likes"]);
    if (likes.value) {
      return new Response(JSON.stringify({ likes: Number(likes.value.value) }));
    } else {
      return new Response(JSON.stringify({ likes: 0 }));
    }
  },
};
