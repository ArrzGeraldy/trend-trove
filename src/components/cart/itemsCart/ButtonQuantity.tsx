import useCart from "@/hooks/useCart";
import { CartType } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonQuantity = ({ cart }: { cart: CartType }) => {
  const { refresh } = useRouter();
  const { isLoading, updateCart } = useCart();
  const { id, userId, productId, quantity } = cart;

  const handleIncrementQty = async () => {
    const newQty = quantity + 1;
    await updateCart(id, userId, productId, cart.product.price, newQty);
    refresh();
  };

  const handleDecrementQty = async () => {
    if (quantity == 1) return;
    const newQty = quantity - 1;
    await updateCart(id, userId, productId, cart.product.price, newQty);
    refresh();
  };
  return (
    <div className="flex items-center gap-2 lg:px-10  justify-center">
      <button
        onClick={handleDecrementQty}
        className="text-sm lg:text-xl px-2 bg-black rounded-md text-white"
      >
        -
      </button>
      {cart.quantity}
      <button
        onClick={handleIncrementQty}
        className="text-sm lg:text-xl px-2 bg-black rounded-md text-white"
      >
        +
      </button>
    </div>
  );
};

export default ButtonQuantity;
