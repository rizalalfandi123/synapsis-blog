/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/use-debounce";
import { Search } from "lucide-react";
import Input from "@/components/input";

export function SearchUser() {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const nameParam = searchParams.get("name") ?? "";

  const [search, setSearch] = React.useState<string>(nameParam);

  const debounceSearchValue = useDebounce<string>(search, 500);

  React.useEffect(() => {
    console.log({ debounceSearchValue });
    const nextParams = new URLSearchParams(searchParams);

    if (debounceSearchValue) {
      nextParams.set("name", debounceSearchValue);
    } else {
      nextParams.delete("name");
    }

    router.push(`${pathname}?${nextParams.toString()}`);
  }, [debounceSearchValue, nameParam]);

  return (
    <label className="relative block w-full md:w-72 md:shrink-0">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <Search className="h-5 w-5" />
      </span>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search name"
        className="pl-9"
        type="text"
        name="search"
      />
    </label>
  );
}

export default SearchUser;
