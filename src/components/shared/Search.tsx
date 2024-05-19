"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative  w-fit">
      <input
        type="text"
        placeholder={"Search..."}
        className="border border-gray-500 rounded-lg px-4 py-1 w-40 lg:w-60"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <FaMagnifyingGlass className="absolute top-2 right-4 cursor-pointer lg:text-lg text-gray-500" />
    </div>
  );
};

export default Search;
