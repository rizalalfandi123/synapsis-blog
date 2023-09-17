"use server";

import { revalidateTag } from "next/cache";
import { headers } from "@/lib/default-headers";
import type { User } from "@/types";

export async function editUser(data: User) {
  const response = await fetch(`https://gorest.co.in/public/v2/users/${data.id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers,
  });

  
  if (!response.ok) {
    throw Error("Failed to edit a user");
  }

  revalidateTag("users");
}
