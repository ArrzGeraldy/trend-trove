"use client";
import Image from "next/image";
import React from "react";
import ItemInfo from "./ItemInfo";
import { CartType } from "@/types";
import ButtonDelete from "./ButtonDelete";

const ItemsCart = ({
  carts,
  userId,
}: {
  carts: CartType[];
  userId: number;
}) => {
  return (
    <div>
      {carts.map((cart: CartType) => (
        <div
          className=" border-b border-gray-400 pb-4 pe-8  relative mt-5"
          key={cart.id}
        >
          <div className="flex items-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_API}/${cart.product.imageUrl}`}
              width={120}
              height={220}
              alt="..."
              unoptimized={true}
              className="h-28 md:h-32 w-auto lg:h-44"
            />
            <ItemInfo cart={cart} />
          </div>
          <ButtonDelete id={cart.id} userId={userId} />
        </div>
      ))}
    </div>
  );
};

export default ItemsCart;
