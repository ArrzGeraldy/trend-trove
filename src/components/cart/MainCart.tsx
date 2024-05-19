/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ItemsCart from "./itemsCart/ItemsCart";
import OrderSummary from "./sidebar/OrderSummary";
import { CartType } from "@/types";

const MainCart = async ({ userId }: { userId: number }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/cart/${userId}`,
    { cache: "no-store" }
  );
  const json = await response.json();
  const carts: CartType[] = json.data;

  return (
    <div className="lg:flex gap-4 mt-8">
      <section className="bg-white px-6 py-4 pb-8 border border-gray-200 lg:w-4/6">
        <h4 className="font-semibold border-b border-gray-600 pb-2">
          Items Details {"("}
          {carts.length}
          {")"}
        </h4>
        <ItemsCart carts={carts} userId={userId} />
      </section>
      {/* SideBar */}
      <OrderSummary carts={carts} />
    </div>
  );
};

export default MainCart;
