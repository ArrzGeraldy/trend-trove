import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import React from "react";
import { FaX } from "react-icons/fa6";

const ButtonDelete = ({ userId, id }: { userId: number; id: number }) => {
  const { isLoading, destroyItemFromCart } = useCart();
  const router = useRouter();
  const handleDelete = async () => {
    await destroyItemFromCart(userId, id);
    router.refresh();
  };

  return (
    <button className="absolute right-4 top-4" onClick={handleDelete}>
      {isLoading ? (
        <div className="loader-black"></div>
      ) : (
        <FaX className="text-sm text-gray-600 hover:text-black transition-all" />
      )}
    </button>
  );
};

export default ButtonDelete;
