import ProductInfo from "@/components/ProductDetail/ProductInfo";
import Review from "@/components/ProductDetail/Review";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { name: string } }) => {
  const decodedId = decodeURI(params.name);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/product/${decodedId}`,
    { cache: "no-store" }
  );
  const product = await response.json();
  return (
    <div>
      <div>
        <div className=" bg-white">
          <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
              <div className="lg:col-span-3 w-[95%]  lg:sticky top-0 text-center">
                <Image
                  width={200}
                  height={400}
                  priority
                  src={`${process.env.NEXT_PUBLIC_API}/${product.data.imageUrl}`}
                  alt="Product"
                  unoptimized={true}
                  className="w-3/4 rounded-md object-cover"
                />
              </div>
              <ProductInfo product={product} />
            </div>

            <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
              <h3 className="text-lg font-bold text-[#333]">Reviews(10)</h3>
              <Review />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
