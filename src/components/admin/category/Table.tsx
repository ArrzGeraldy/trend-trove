import { fetchData } from "@/lib/getProduct";
import React from "react";
import CategoryAction from "./CategoryAction";

const Table = async ({ query }: { query: string }) => {
  const categories = await fetchData("category", query);
  return (
    <table className="items-center bg-transparent w-full border-collapse ">
      <thead>
        <tr>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            name
          </th>

          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Action
          </th>
        </tr>
      </thead>

      <tbody>
        {categories?.data.map((category: any) => (
          <tr key={category.id}>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              {category.name}
            </th>

            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <CategoryAction id={category.id} pathUrl="categories" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
