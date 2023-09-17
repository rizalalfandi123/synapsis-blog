import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex gap-2 w-full justify-end md:flex-grow">
      <Link href="/">Posts</Link>
      <Link href="/users">Users</Link>
    </nav>
  );
}

export default Navigation;
