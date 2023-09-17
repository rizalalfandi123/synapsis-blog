import Navigation from "./navigation";

export function Header() {
  return (
    <header className="py-4 px-2 flex flex-col gap-4 items-start sticky top-0 bg-slate-900/75 backdrop-blur md:items-center md:flex-row">
      <h1 className="text-3xl whitespace-nowrap font-semibold">Synapsis Blog.</h1>

      <Navigation />
    </header>
  );
}

export default Header;
