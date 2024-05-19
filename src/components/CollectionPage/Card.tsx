import toRupiah from "@/lib/toRupiah";
import { ProductWithCategoryType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ product }: any) => {
  return (
    <div className="w-40 md:w-56 lg:w-72 flex flex-col">
      <Link
        href={`/products/${product.id}`}
        className="flex flex-col justify-between  "
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_API}/${product.imageUrl}`}
          alt="..."
          width={240}
          height={300}
          className="h-60 w-40 md:w-56 md:h-80 lg:h-[22rem] lg:w-72 object-cover object-center rounded-md hover:scale-[102%] transition ease-in duration-300"
          unoptimized={true}
        />
        <div className="flex flex-col gap-1 mt-2 text-sm md:text-base">
          <span className="w-11/12">{product.name}</span>
          <span>{toRupiah(product.price)}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
