import "server-only";
import type { Post } from "@/types";

interface GetPostArgs {
  postId: string;
}

export async function getPost({ postId }: GetPostArgs) {
  const url = new URL(`https://gorest.co.in/public/v2/posts/${postId}`);

  const res = await fetch(url);

  if (!res.ok) {
    throw Error("Failed to get data from the server");
  }

  const post: Post = await res.json();

  return post;
}
