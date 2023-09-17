"use client";

import { Loader2, Pencil, Trash2 } from "lucide-react";
import { deleteUser } from "./delete-new-user.action";
import { User } from "@/types";
import React from "react";
import { EditUser } from "./edit-user";

export function UserActionCell({ user }: { user: User }) {
  const [loadingDelete, setLoadingDelete] = React.useState<boolean>(false);

  const handleDelete = async () => {
    setLoadingDelete(true);

    await deleteUser(user.id.toString());

    setLoadingDelete(false);
  };

  return (
    <>
      {loadingDelete ? (
        <Loader2 className="animate-spin inline-flex mr-2 w-4 h-4" />
      ) : (
        <Trash2
          role="button"
          className="inline-flex mr-2 w-4 h-4 hover:text-red-400"
          onClick={handleDelete}
        />
      )}
      <EditUser initialUser={user} />
    </>
  );
}

export default UserActionCell;
