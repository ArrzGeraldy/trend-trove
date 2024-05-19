"use client";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import { CartType } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ButtonCheckOut = ({
  carts,
  total,
}: {
  carts: CartType[];
  total: number;
}) => {
  const { createOrder, isLoading } = useCart();

  const handleCheckOut = async () => {
    await createOrder(carts[0].userId, total, carts);
  };

  return (
    <Button disabled={isLoading} onClick={handleCheckOut} className="w-full">
      {isLoading ? <div className="loader"></div> : "Check out"}
    </Button>
  );
};

export default ButtonCheckOut;
