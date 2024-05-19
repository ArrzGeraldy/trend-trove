"use client";
import ActionButton from "@/components/shared/ActionButton";
import useCategory from "@/hooks/useCategory";
import React from "react";

const CategoryAction = ({
  pathUrl,
  id,
}: {
  pathUrl: string;
  id: string | number;
}) => {
  const { destroy, isLoading } = useCategory();
  return (
    <ActionButton
      id={id}
      pathUrl={pathUrl}
      destroy={destroy}
      isLoading={isLoading}
    />
  );
};

export default CategoryAction;
