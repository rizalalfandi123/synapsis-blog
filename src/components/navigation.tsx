"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function Navigation() {
  const pathame = usePathname();

  return (
    <nav className="flex gap-2 w-full justify-end md:flex-grow">
      <Link
        href="/"
        className={twMerge(
          "hover:text-teal-400",
          pathame === "/" && "text-teal-400"
        )}
      >
        Posts
      </Link>
      <Link
        href="/users"
        className={twMerge(
          "hover:text-teal-400",
          pathame === "/users" && "text-teal-400"
        )}
      >
        Users
      </Link>
    </nav>
  );
}

export default Navigation;
