import Table from "@/components/admin/products/Table";
import Pagination from "@/components/shared/Pagination";
import Search from "@/components/shared/Search";
import { fetchDataWithQuery } from "@/lib/getProduct";
import Link from "next/link";
import { Suspense } from "react";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const limit = 5;
  const res = await fetchDataWithQuery("product/total-pages", `limit=${limit}`);

  return (
    <div className="w-[95%] mt-20 ">
      <Link
        href={"/dashboard/products/create"}
        className="bg-black block w-fit px-4 py-2 rounded-md text-white mb-4 hover:bg-[#333]"
      >
        Add new product
      </Link>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex items-center justify-between px-4">
            <h3 className="font-semibold text-base text-blueGray-700">
              Products
            </h3>
            <Search />
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <Table query={query} currentPage={currentPage} limit={limit} />
          </Suspense>
        </div>
      </div>
      {!query && (
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={res.totalPages} />
        </div>
      )}
    </div>
  );
};

export default Page;
