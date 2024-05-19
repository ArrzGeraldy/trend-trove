import { useRouter } from "next/navigation";
import React, { useState } from "react";

const useCategory = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const create = async (formData: object) => {
    setIsLoading(true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
    });
    const json = await response.json();
    if (!response.ok) setError(json.message);
    if (response.ok) setError("");

    setIsLoading(false);
    router.refresh();
  };

  const update = async (id: number, formData: object) => {
    setIsLoading(false);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/category/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const json = await response.json();
    if (!response.ok) setError(json.message);
    if (response.ok) setError("");

    setIsLoading(false);
    router.refresh();
  };

  const destroy = async (id: number | string) => {
    setIsLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/category/${id}`,
      {
        method: "DELETE",
      }
    );
    setIsLoading(false);
  };

  return { isLoading, error, setError, create, update, destroy };
};

export default useCategory;
