import Table from "@/components/admin/category/Table";
import Search from "@/components/shared/Search";
import useCategory from "@/hooks/useCategory";
import Link from "next/link";
import React from "react";

const page = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-[95%] mt-20 ">
      <Link
        href={"/dashboard/categories/create"}
        className="bg-black block w-fit px-4 py-2 rounded-md text-white mb-4 hover:bg-[#333]"
      >
        Add new Category
      </Link>

      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Categories
              </h3>
            </div>
            <Search />
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          <Table query={query} />
        </div>
      </div>
    </div>
  );
};

export default page;
