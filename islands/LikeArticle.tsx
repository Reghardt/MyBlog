import IconHeart from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/heart.tsx";
import { signal } from "@preact/signals";
import ky from "ky";
import { useEffect } from "https://esm.sh/v128/preact@10.15.1/hooks/src/index.js";
import { IS_BROWSER } from "$fresh/runtime.ts";

const likes = signal(0);

async function getLikes(url_title: string) {
  const res = await ky
    .get(`/api/like?url_title=${url_title}`)
    .json<{ likes: number }>();
  console.log(res);
  likes.value = res.likes;
}

async function like(url_title: string) {
  const res = await ky
    .post("/api/like", { json: { url_title: url_title } })
    .json<{ likes: number }>();
  likes.value = res.likes;
}

export default function likeArticle(props: { url_title: string }) {
  if (IS_BROWSER) {
    getLikes(props.url_title);
  }

  return (
    <div class={"flex items-center"}>
      <button
        class={"rounded-full p-2 hover:bg-gray-100 active:bg-gray-200"}
        onClick={async () => like(props.url_title)}
      >
        <IconHeart />
      </button>
      <div>{likes.value}</div>
    </div>
  );
}
