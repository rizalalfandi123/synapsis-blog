import "server-only";
import type { Comment } from "@/types";

interface GetPostCommentsArgs {
  postId: string;
}

export async function getPostComments({ postId }: GetPostCommentsArgs) {
  const url = new URL(`https://gorest.co.in/public/v2/comments?post_id=${postId}`);

  const res = await fetch(url);

  if (!res.ok) {
    throw Error("Failed to get data from the server");
  }

  const comments: Array<Comment> = await res.json();

  return comments;
}
