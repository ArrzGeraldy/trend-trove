"use client";
import useProduct from "@/hooks/useProduct";
import { DeleteButtonType } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteButton = ({ id, destroy, isLoading }: DeleteButtonType) => {
  const router = useRouter();
  const handleDelete = async () => {
    await destroy(id);
    router.refresh();
  };

  return (
    <button
      className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md"
      onClick={handleDelete}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "Delete"}
    </button>
  );
};

export default DeleteButton;
