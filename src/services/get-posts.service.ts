import "server-only";
import { PaginationParams, Post } from "@/types";

interface GetPostsArgs extends PaginationParams {}

export async function getPosts({ page, perPage }: GetPostsArgs) {
  const url = new URL("https://gorest.co.in/public/v2/posts");

  url.searchParams.set("page", page.toString());
  url.searchParams.set("per_page", perPage.toString());

  const res = await fetch(url);

  if (!res.ok) {
    throw Error("Failed to get data from the server");
  }

  const posts: Array<Post> = await res.json();

  return posts;
}
