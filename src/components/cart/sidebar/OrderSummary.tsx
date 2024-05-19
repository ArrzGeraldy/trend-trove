"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button";
import toRupiah from "@/lib/toRupiah";
import { CartType } from "@/types";
import React, { useEffect, useState } from "react";
import ButtonCheckOut from "./ButtonCheckOut";

const OrderSummary = ({ carts }: { carts: CartType[] }) => {
  const [summary, setSummary] = useState(0);
  const totalSummary = () => {
    setSummary(0);
    carts.forEach((cart: CartType) => {
      setSummary((prev) => prev + cart.total);
    });
  };

  useEffect(() => {
    totalSummary();
  }, [carts]);

  return (
    <aside className="mt-8 lg:mt-0 bg-white px-6 py-4 pb-8 border flex flex-col justify-between border-gray-200 h-72 flex-1">
      <div>
        <h4 className="text-2xl font-bold pb-4 border-b border-gray-400">
          Order Summary
        </h4>
        <div className="font-bold mt-8 text-lg flex justify-between">
          <p className="">Items: </p>
          <p>{carts.length}</p>
        </div>
        <div className="font-bold mt-2 text-lg flex justify-between">
          <p className="">Total: </p>
          <p>{toRupiah(summary)}</p>
        </div>
      </div>
      <ButtonCheckOut carts={carts} total={summary} />
    </aside>
  );
};

export default OrderSummary;
