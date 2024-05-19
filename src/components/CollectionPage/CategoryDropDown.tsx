import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Link from "next/link";

const CategoryDropDown = ({
  categories,
  pathName,
  gendre,
}: {
  categories: string[];
  pathName: string;
  gendre: string;
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const labelDropDown = () => {
    const label = pathName.split(`/${gendre}/`);
    if (!label[1]) return "All";
    return label[1].toUpperCase();
  };
  return (
    <DropdownMenu onOpenChange={() => setIsOpenMenu((prev) => !prev)}>
      <DropdownMenuTrigger className="outline-none lg:hidden">
        <div className="flex items-center gap-2">
          <span>{labelDropDown()}</span>
          {!isOpenMenu ? (
            <FaAngleDown className="mt-[2px]" />
          ) : (
            <FaAngleUp className="mt-[2px]" />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href={`/collection/${gendre}`}
            className={
              pathName == `/collection/${gendre}`
                ? "text-black underline"
                : "text-gray-600"
            }
          >
            All
          </Link>
        </DropdownMenuItem>
        {categories.map((category: any) => (
          <DropdownMenuItem key={category.id}>
            <Link
              href={`/collection/${gendre}/${category.name.toLowerCase()}`}
              key={category.id}
              className={
                pathName == `/${gendre}/${category.name.toLowerCase()}`
                  ? "text-black underline"
                  : "text-gray-600 hover:text-black transition-all"
              }
            >
              {category.name.toUpperCase()}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryDropDown;
