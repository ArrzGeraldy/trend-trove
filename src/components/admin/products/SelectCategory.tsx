"use client";
import { fetchData } from "@/lib/getProduct";
import React, { useEffect, useState } from "react";
interface SelectCategoryI {
  handleChange: (e: any) => void;
  value: string | number;
}

const SelectCategory = ({ handleChange, value }: SelectCategoryI) => {
  const [categories, setCategories] = useState([]);
  const fetchCategory = async () => {
    const json = await fetchData("category");
    setCategories(json.data);
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="">Category</label>
      <select
        name="categoryId"
        value={value}
        onChange={handleChange}
        className="flex h-10 w-full items-center justify-between focus:border-none rounded-md border border-slate-600 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
      >
        <option value="">Select</option>
        {categories.map((category: any) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;
