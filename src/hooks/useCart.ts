import { fetchData } from "@/lib/getProduct";
import { AddToCartType, CartType } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const useCart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { push } = useRouter();

  const addToCart = async (
    userId: number,
    productId: string,
    total: number
  ) => {
    setIsLoading(true);
    setSuccess(false);

    const data = { userId, productId, price: total, quantity: 1 };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/cart`, {
        method: "post",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSuccess(true);
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const updateCart = async (
    id: number,
    userId: number,
    productId: string,
    price: number,
    quantity: number
  ) => {
    setIsLoading(true);
    const data = {
      userId,
      productId,
      price,
      quantity,
    };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/cart/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);

    setIsLoading(false);
  };

  const destroyItemFromCart = async (userId: number, id: number) => {
    setIsLoading(true);
    setSuccess(false);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ userId, id }),
    });

    if (response.ok) setSuccess(true);

    setIsLoading(false);
  };

  const createOrder = async (
    userId: number,
    total: number,
    items: CartType[]
  ) => {
    setIsLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PAYMENT}/order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ userId, total, items }),
      }
    );
    const json = await response.json();

    if (response.ok) {
      setIsLoading(false);
      push(`/order/${json.order.orderId}`);
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    success,
    addToCart,
    updateCart,
    destroyItemFromCart,
    createOrder,
  };
};

export default useCart;
