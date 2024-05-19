import { ProductWithCategoryType } from "@/types";
import React from "react";
import Rating from "./Rating";
import ShopButton from "./ShopButton";
import toRupiah from "@/lib/toRupiah";

const ProductInfo = ({
  product,
}: {
  product: { data: ProductWithCategoryType };
}) => {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-2xl font-extrabold text-[#333]">
        {product.data.name}
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        <p className="text-[#333] text-4xl font-bold">
          {toRupiah(product.data.price)}
        </p>
        <p className="text-gray-400 text-xl">
          <span className="text-sm ml-1">Tax included</span>
        </p>
      </div>

      <Rating />
      <ShopButton productId={product.data.id} price={product.data.price} />

      <div className="mt-12">
        <h3 className="text-lg font-bold text-[#333]">Product information</h3>
        <ul className="mt-6 space-y-6 text-[#333]">
          <li className="text-sm">
            STOCK <span className="ml-4 float-right">{product.data.stock}</span>
          </li>
          <li className="text-sm">
            CATEGORY{" "}
            <span className="ml-4 float-right">
              {product.data.category.name.toUpperCase()}
            </span>
          </li>
          <li className="text-sm">
            GENDRE{" "}
            <span className="ml-4 float-right">
              {product.data.gendre.toUpperCase()}
            </span>
          </li>
        </ul>
        <div className="mt-12 ">
          <h3 className="text-lg font-bold text-[#333]">Description</h3>
          <div className="mt-2 space-y-6 text-[#333]">
            {product.data.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
