import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fetchDataWithQuery } from "@/lib/getProduct";
import { CategoryType } from "@/types";
import { useRouter } from "next/navigation";

const ShopMenu = () => {
  const [womens, setWomens] = useState<CategoryType[]>([]);
  const [mens, setMens] = useState<CategoryType[]>([]);
  const { push } = useRouter();
  const fetchCategory = async () => {
    const womenData = await fetchDataWithQuery("category", "gendre=WOMEN");
    setWomens(womenData.data);
    const menData = await fetchDataWithQuery("category", "gendre=men");
    setMens(menData.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        Shop
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex px-4 gap-6 w-56 justify-center">
          <div>
            <DropdownMenuLabel>Women</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => push(`/collection/women`)}>
              Shop all
            </DropdownMenuItem>
            {womens.map((women: any) => (
              <DropdownMenuItem
                key={women.id}
                onClick={() =>
                  push(`/collection/women/${women.name.toLowerCase()}`)
                }
              >
                {women.name}
              </DropdownMenuItem>
            ))}
          </div>
          <div>
            <DropdownMenuLabel>Men</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => push(`/collection/men`)}>
              Shop All
            </DropdownMenuItem>
            {mens.map((men: any) => (
              <DropdownMenuItem
                key={men.id}
                onClick={() =>
                  push(`/collection/men/${men.name.toLowerCase()}`)
                }
              >
                {men.name}
              </DropdownMenuItem>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShopMenu;
