"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Pagination = ({ totalPages }: { totalPages: string | number }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const setCursorNext =
    currentPage >= Number(totalPages)
      ? "cursor-not-allowed "
      : "hover:bg-gray-100";

  const setCursorPrev =
    currentPage <= 1 ? "cursor-not-allowed " : "hover:text-black";

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex gap-4 items-center">
      <button
        disabled={currentPage <= 1}
        onClick={() => push(createPageURL(currentPage - 1))}
        className={cn(
          `flex items-center gap-1 text-gray-700 transtion-all`,
          setCursorPrev
        )}
      >
        <FaAngleLeft className="text-sm" /> Previous
      </button>
      <span className="px-5 py-1 border border-gray-500 rounded-md">
        {currentPage}
      </span>

      <button
        onClick={() => push(createPageURL(currentPage + 1))}
        disabled={currentPage >= Number(totalPages)}
        className={cn(
          `flex items-center gap-1 text-gray-700 transtion-all`,
          setCursorNext
        )}
      >
        Next <FaAngleRight className="text-sm" />
      </button>
    </div>
  );
};

export default Pagination;
