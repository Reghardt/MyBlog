import { IS_BROWSER } from "$fresh/runtime.ts";
import ky from "ky";

async function getComments(url_title: string) {}

export default function Comments(props: { url_title: string }) {
  if (IS_BROWSER) {
    getComments(props.url_title);
  }

  return <div class={"flex items-center"}></div>;
}
