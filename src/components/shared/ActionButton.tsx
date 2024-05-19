import Link from "next/link";
import React from "react";
import DeleteButton from "./DeleteButton";
import { ActionButtonType } from "@/types";

const ActionButton = ({
  destroy,
  isLoading,
  pathUrl,
  id,
}: ActionButtonType) => {
  return (
    <div className="flex gap-2">
      <Link
        href={`/dashboard/${pathUrl}/edit/${id}`}
        className="bg-sky-500 text-white text-xs font-bold px-2 py-1 rounded-md"
      >
        Edit
      </Link>
      <DeleteButton id={id} destroy={destroy} isLoading={isLoading} />
    </div>
  );
};

export default ActionButton;
