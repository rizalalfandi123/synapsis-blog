import "server-only";
import { PaginationParams, User } from "@/types";

interface GetPostsArgs extends PaginationParams {
  name?: string;
}

import { headers } from '@/lib/default-headers';


export async function getUsers({ page, perPage, name }: GetPostsArgs) {
  const url = new URL("https://gorest.co.in/public/v2/users");

  url.searchParams.set("page", page.toString());
  url.searchParams.set("per_page", perPage.toString());
  if (name) url.searchParams.set("name", name);

  const res = await fetch(url, { next: { tags: ["users"] }, headers });

  if (!res.ok) {
    throw Error("Failed to get data from the server");
  }

  const users: Array<User> = await res.json();

  return users;
}
