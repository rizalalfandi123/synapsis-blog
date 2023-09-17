"use client";

import Button from "@/components/button";
import React from "react";
import { createNewUser } from "./create-new-user.action";
import type { UserForm as IUserForm, User } from "@/types";
import { UserForm } from "./user-form";
import { Pencil } from "lucide-react";
import { editUser } from "./edit-user.action";

export function EditUser({ initialUser }: { initialUser: User }) {
  const [form, setForm] = React.useState<IUserForm>({
    email: initialUser.email,
    gender: initialUser.gender,
    name: initialUser.name,
  });

  const [loadingCreate, setLoadingCreate] = React.useState<boolean>(false);

  const dialog = React.useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    dialog.current!.showModal();
  };

  const closeModal = () => {
    dialog.current!.close();
  };

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    form: IUserForm
  ) => {
    event.preventDefault();

    setLoadingCreate(true);

    await editUser({ ...initialUser, ...form });

    setLoadingCreate(false);

    closeModal();
  };

  return (
    <>
      <Pencil
        role="button"
        className="inline-flex w-4 h-4 hover:text-teal-400"
        onClick={openModal}
      />

      <dialog
        ref={dialog}
        className="w-screen md:w-96 bg-slate-800 text-slate-200 p-4 rounded-md backdrop:backdrop-blur-sm"
      >
        <UserForm
          isLoadingSubmit={loadingCreate}
          state={[form, setForm]}
          onClose={closeModal}
          onSubmit={onSubmit}
        />
      </dialog>
    </>
  );
}
