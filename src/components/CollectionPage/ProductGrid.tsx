import { fetchDataWithQuery } from "@/lib/getProduct";
import React from "react";
import { QueryProductsParamsType } from "@/types";

import Card from "./Card";
import Pagination from "../shared/Pagination";

const ProductGrid = async ({
  gendre,
  mainCategory,
  search,
  page,
}: QueryProductsParamsType) => {
  const json = await fetchDataWithQuery(
    "product",
    `gendre=${gendre}&category=${mainCategory}&search=${search}&page=${page}&limit=8`
  );

  const products = json.data;
  const totalPages = json.pagination.total_page;

  const render = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap lg:gap-4 gap-y-6">
        {products.map((product: any) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    );
  };
  return (
    <section className="">
      {render()}
      <div className="mt-8 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </section>
  );
};

export default ProductGrid;
