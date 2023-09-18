import React from "react";
import Input from "@/components/input";
import { UserForm } from "@/types";
import Button from "@/components/button";

interface UserFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>, data: UserForm) => void;
  state: [UserForm, React.Dispatch<React.SetStateAction<UserForm>>];
  onClose: () => void;
  isLoadingSubmit: boolean;
}

export function UserForm({
  onSubmit,
  state,
  onClose,
  isLoadingSubmit,
}: UserFormProps) {
  const [form, setForm] = state;

  const changeFieldForm =
    (fieldName: keyof UserForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [fieldName]: event.target.value }));
    };

  const onChangeFieldGender =
    (gender: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        setForm((prev) => ({
          ...prev,
          gender: gender as UserForm["gender"],
        }));
      }
    };

  return (
    <form onSubmit={(event) => onSubmit(event, form)}>
      <div className="space-y-4">
        <label className="block">
          <span className="block text-left text-sm font-medium mb-1">Name</span>

          <Input
            id="name"
            type="text"
            name="name"
            className="bg-slate-900"
            required
            onChange={changeFieldForm("name")}
            value={form.name}
          />
        </label>

        <label className="block">
          <span className="block text-left text-sm font-medium mb-1">Email</span>

          <Input
            id="email"
            type="email"
            name="email"
            className="bg-slate-900"
            required
            onChange={changeFieldForm("email")}
            value={form.email}
          />
        </label>

        <fieldset>
          <span className="block text-left text-sm font-medium mb-1">Gender</span>

          <div className="flex gap-2">
            {["male", "female"].map((gender) => {
              return (
                <label
                  key={gender}
                  htmlFor={gender}
                  className="inline-flex items-center"
                >
                  <input
                    id={gender}
                    type="radio"
                    value={gender}
                    name="gender"
                    className="w-4 h-4 accent-teal-400 mr-1"
                    checked={form.gender === gender}
                    defaultChecked={form.gender === gender}
                    onChange={onChangeFieldGender(gender)}
                  />
                  <span className="text-sm font-medium">{gender}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="w-full py-2 mt-8 flex gap-2 justify-end">
        <Button type="button" className="bg-slate-500" onClick={onClose}>
          Cancel
        </Button>

        <Button
          disabled={isLoadingSubmit}
          isLoading={isLoadingSubmit}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
