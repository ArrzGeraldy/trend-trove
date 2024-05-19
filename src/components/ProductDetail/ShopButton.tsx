"use client";
import useCart from "@/hooks/useCart";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const notifySucces = () => toast.success("Add product to cart successfully");

const ShopButton = ({
  productId,
  price,
}: {
  productId: string;
  price: number;
}) => {
  const { data: session, status }: { data: any; status: string } = useSession();
  const { addToCart, isLoading, success } = useCart();
  const { refresh } = useRouter();

  const handleClick = async () => {
    if (!session?.user) return signIn();
    await addToCart(session?.user.id, productId, price);
    refresh();
  };

  useEffect(() => {
    if (success) notifySucces();
  }, [success]);

  return (
    <div className="flex flex-wrap gap-4 mt-10">
      <Toaster />
      <button
        onClick={handleClick}
        type="button"
        disabled={isLoading}
        className="w-full px-4 py-3 bg-[#333] hover:bg-[#111] flex justify-center text-white text-sm font-bold rounded"
      >
        {isLoading ? (
          <div className="">
            <div className="loader"></div>
          </div>
        ) : (
          "Add to cart"
        )}
      </button>
    </div>
  );
};

export default ShopButton;
