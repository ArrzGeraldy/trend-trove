"use client";
import { fetchDataByGendre, fetchDataWithQuery } from "@/lib/getProduct";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import CategoryDropDown from "./CategoryDropDown";

const CategoryList = ({ gendre }: { gendre: string }) => {
  const [categories, setCategories] = useState<string[]>([]);

  const pathName = usePathname();

  const fetchCategory = async () => {
    const data = await fetchDataByGendre("category", gendre);
    setCategories(data.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div>
      <CategoryDropDown
        categories={categories}
        gendre={gendre}
        pathName={pathName}
      />

      <div className="lg:flex gap-4 text-md hidden">
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
        {categories.map((category: any) => (
          <Link
            href={`/collection/${gendre}/${category.name.toLowerCase()}`}
            key={category.id}
            className={
              pathName == `/collection/${gendre}/${category.name.toLowerCase()}`
                ? "text-black underline"
                : "text-gray-600 hover:text-black transition-all"
            }
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
