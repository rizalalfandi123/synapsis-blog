import { CreateNewUser } from "./create-new-user";
import SearchUser from "./search-user";

interface LayoutProps extends React.PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="w-full flex justify-between gap-4 py-2 md:justify-end">
        <SearchUser />
        <CreateNewUser />
      </div>
      {children}
    </>
  );
}
