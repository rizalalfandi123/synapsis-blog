"use server";

import { revalidateTag } from "next/cache";
import { headers } from "@/lib/default-headers";
import type { UserForm } from "@/types";

export async function createNewUser(data: UserForm) {
  const response = await fetch("https://gorest.co.in/public/v2/users", {
    method: "POST",
    body: JSON.stringify({ ...data, status: "active" }),
    headers,
  });

  
  if (!response.ok) {
    throw Error("Failed to create a user");
  }

  revalidateTag("users");
}
