import toRupiah from "@/lib/toRupiah";
import { CartType } from "@/types";
import React from "react";
import ButtonQuantity from "./ButtonQuantity";

const ItemInfo = ({ cart }: { cart: CartType }) => {
  return (
    <div className="flex gap-4 flex-col lg:flex-row  px-4">
      <div className=" sm:flex sm:w-full sm:justify-between items-center">
        <div className="mt-5 sm:mt-0">
          <h2 className=" text-sm lg:text-lg font-bold text-gray-900 max-w-[220px]">
            {cart.product.name}
          </h2>
          <p className="mt-1 text-xs text-gray-700">{cart.product.gendre}</p>
          <p className="mt-1 text-xs text-gray-700">
            {toRupiah(cart.product.price)}
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex text-sm lg:text-md items-center lg:px-10 justify-center font-semibold">
          {toRupiah(cart.total)}
        </div>
        <ButtonQuantity cart={cart} />
      </div>
    </div>
  );
};

export default ItemInfo;
