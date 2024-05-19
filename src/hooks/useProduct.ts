import { CreateProductType, ProductType } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const useProduct = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const update = async (
    formData: CreateProductType,
    image: File | "",
    id: string
  ) => {
    setIsLoading(true);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("gendre", formData.gendre);
    data.append("description", formData.description);
    data.append("price", formData.price.toString());
    data.append("stock", formData.stock.toString());
    data.append("categoryId", formData.categoryId.toString());
    if (image) {
      data.append("image", image);
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/product/${id}`,
      {
        method: "PUT",
        body: data,
      }
    );
    const json = await response.json();
    if (!response.ok) setError(json.message);
    if (response.ok) {
      setSuccess(true);
      setError("");
    }

    setIsLoading(false);

    router.refresh();
  };

  const create = async (formData: CreateProductType, image: File | "") => {
    setIsLoading(true);
    setSuccess(false);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("gendre", formData.gendre);
    data.append("description", formData.description);
    data.append("price", formData.price.toString());
    data.append("stock", formData.stock.toString());
    data.append("categoryId", formData.categoryId.toString());
    data.append("image", image);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/product`, {
      method: "POST",
      body: data,
    });
    const json = await response.json();
    if (!response.ok) setError(json.message);
    if (response.ok) {
      setSuccess(true);
      setError("");
    }

    setIsLoading(false);

    router.refresh();
  };

  const destroy = async (id: string | number) => {
    setIsLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/product/${id}`,
      {
        method: "DELETE",
      }
    );
    setIsLoading(false);
  };

  // const update = async ()

  return { isLoading, success, error, setError, create, update, destroy };
};

export default useProduct;
