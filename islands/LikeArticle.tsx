import IconHeart from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/heart.tsx";
import { signal } from "@preact/signals";
import ky from "ky";

const likes = signal(0);

export default function LikeArticle(props: { url_title: string }) {
  async function like() {
    const res = await ky
      .post("/api/like", { json: { url_title: props.url_title } })
      .json<{ likes: number }>();
    likes.value = res.likes;
  }

  return (
    <div class={"flex items-center"}>
      <button
        class={"rounded-full p-2 hover:bg-gray-100 active:bg-gray-200"}
        onClick={async () => like()}
      >
        <IconHeart />
      </button>
      <div>{likes.value}</div>
    </div>
  );
}
