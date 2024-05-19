import CategoryList from "@/components/CollectionPage/CategoryList";
import ProductGrid from "@/components/CollectionPage/ProductGrid";
import Search from "@/components/shared/Search";
import React from "react";

const page = ({ params, searchParams }: any) => {
  const gendre = params.gendre;
  const mainCategory = params.main_category;
  const search = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto flex flex-col gap-y-4 py-8">
      <h1 className="font-semibold text-4xl">{gendre.toUpperCase()}</h1>
      <div className="flex w-full justify-between items-center px-2 py-4 border-b-2 ">
        <CategoryList gendre={gendre} />
        <Search />
      </div>
      <ProductGrid
        gendre={gendre}
        mainCategory={mainCategory}
        search={search}
        page={page}
      />
    </div>
  );
};

export default page;
