import { getUsers } from "@/services/get-users.service";
import {
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import { Suspense } from "react";
import UserActionCell from "./user-action-cell";

interface UsersProps {
  searchParams: Record<string, string>;
}

export default async function Users({ searchParams }: UsersProps) {
  const users = await getUsers({
    page: searchParams.page ? Number(searchParams.page) : 1,
    perPage: searchParams.per_page ? Number(searchParams.per_page) : 15,
    name: searchParams.name ?? "",
  });

  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-2 text-left">Name</th>

            <th className="p-2 text-left">Email</th>

            <th className="p-2 text-center">Gender</th>

            <th className="p-2 text-center">Status</th>

            <th className="p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <Suspense
            fallback={
              <>
                <tr>
                  <td colSpan={5}>
                    <div className="animate-pulse bg-slate-700 w-full h-8 mb-2"></div>
                  </td>
                </tr>

                <tr>
                  <td colSpan={5}>
                    <div className="animate-pulse bg-slate-700 w-full h-8 mb-2"></div>
                  </td>
                </tr>
              </>
            }
          >
            {users.map((user) => {
              return (
                <tr
                  className="group/user-row hover:bg-slate-500/75"
                  key={user.id}
                >
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2 text-center">
                    <p className="text-xs font-semibold font-mono leading-none uppercase">
                      {user.gender}
                    </p>
                  </td>
                  <td className="p-2 text-center">
                    {user.status === "active" ? (
                      <ToggleRight className="text-teal-400 inline" />
                    ) : (
                      <ToggleLeft className="inline" />
                    )}
                  </td>
                  <td className="text-center">
                    <UserActionCell user={user} />
                  </td>
                </tr>
              );
            })}
          </Suspense>
        </tbody>
      </table>
    </>
  );
}
