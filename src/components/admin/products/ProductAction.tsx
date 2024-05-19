"use client";
import ActionButton from "@/components/shared/ActionButton";
import useProduct from "@/hooks/useProduct";
import React from "react";

const ProductAction = ({
  id,
  pathUrl,
}: {
  pathUrl: string;
  id: string | number;
}) => {
  const { destroy, isLoading } = useProduct();
  return (
    <ActionButton
      destroy={destroy}
      id={id}
      isLoading={isLoading}
      pathUrl={pathUrl}
    />
  );
};

export default ProductAction;
