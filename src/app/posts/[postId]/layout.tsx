import { MoveLeft } from "lucide-react";
import Link from "next/link";

interface LayoutProps extends React.PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Link
        href="/"
        className="hover:text-teal-400 pt-2 pb-6 inline-flex items-center"
      >
        <MoveLeft className="inline-flex mr-2 w-4 h-4" />
        <span>Back</span>
      </Link>

      {children}
    </>
  );
}
