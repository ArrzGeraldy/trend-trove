import ActionButton from "@/components/shared/ActionButton";
import { fetchData, fetchDataWithQuery } from "@/lib/getProduct";
import React from "react";
import ProductAction from "./ProductAction";

const Table = async ({
  query,
  currentPage,
  limit,
}: {
  query: string;
  currentPage: string | number;
  limit: string | number;
}) => {
  const products = await fetchDataWithQuery(
    "product",
    `limit=${limit}&search=${query}&page=${currentPage}`
  );

  return (
    <table className="items-center bg-transparent w-full border-collapse ">
      <thead>
        <tr>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            No
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Product name
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Category
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Price
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Stock
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Gendre
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Action
          </th>
        </tr>
      </thead>

      {products.data && (
        <tbody>
          {products?.data.map((product: any, i: number) => (
            <tr key={product.id}>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                {i + 1}.
              </th>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                {product.name}
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                {product.category.subCategory}
              </td>
              <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {product.price}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                {product.stock}
              </td>
              <td className="border-t-0 px-6 align-middle  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {product.gendre}
              </td>
              <td className="border-t-0 px-6 align-middle  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <ProductAction pathUrl="products" id={product.id} />
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

export default Table;
