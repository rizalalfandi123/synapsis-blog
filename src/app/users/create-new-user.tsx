"use client";

import Button from "@/components/button";
import React from "react";
import { createNewUser } from "./create-new-user.action";
import type { UserForm as IUserForm } from "@/types";
import { UserForm } from "./user-form";
import { Plus } from "lucide-react";

const initialForm: IUserForm = {
  email: "",
  gender: "male",
  name: "",
};

export function CreateNewUser() {
  const [form, setForm] = React.useState<IUserForm>(initialForm);
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

    await createNewUser(form);

    setLoadingCreate(false);

    setForm(initialForm);

    closeModal();
  };

  return (
    <>
      <Button onClick={openModal} className="hidden md:flex">
        Create New
      </Button>

      <Button onClick={openModal} className="w-12 h-12 rounded-full flex justify-center items-center fixed right-3 bottom-3 md:hidden">
        <Plus />
      </Button>

      <dialog
        ref={dialog}
        className="w-screen md:w-96 bg-slate-800 text-slate-200 p-4 rounded-md backdrop:backdrop-blur-sm"
      >
        <h1 className="mb-4 text-2xl font-semibold">Create User</h1>

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
