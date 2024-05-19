import { fetchData, fetchDataWithQuery } from "@/lib/getProduct";
import toRupiah from "@/lib/toRupiah";
import { ProductType, ProductWithCategoryType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewArrival = async () => {
  const json = await fetchDataWithQuery("product", `limit=${4}`);
  const products = json.data;
  return (
    <div className="w-full">
      <h1 className="text-5xl text-center">New Arrivals</h1>
      <p className="text-center mt-2 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
        temporibus.
      </p>
      <div className="w-full mx-auto grid justify-items-center grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 mt-14">
        {products.map((product: ProductWithCategoryType) => (
          <Link
            href={`/products/${product.id}`}
            className="flex flex-col gap-1"
            key={product.id}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API}/${product.imageUrl}`}
              alt=""
              width={320}
              unoptimized={true}
              height={400}
              className="h-[26rem] lg:w-72 object-cover"
            />
            <h4 className="font-semibold">{product.name}</h4>
            <p className="text-sm">{toRupiah(product.price)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
