import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PaymentBtn from "@/components/order/PaymentBtn";
import toRupiah from "@/lib/toRupiah";
import { orderItemsType } from "@/types";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/order/${id}`, {
    cache: "no-store",
  });
  const json = await response.json();
  const items: orderItemsType[] = json.data.orderItems;

  const order = json.data.order;

  return (
    <section>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {items.map((item: any, i: number) => (
              <div
                className="flex flex-col rounded-lg bg-white sm:flex-row"
                key={i}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_API}/${item.product.imageUrl}`}
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  width={100}
                  height={100}
                  alt="items"
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{item.product.name}</span>
                  <span className="float-right text-gray-500 text-xs">
                    {toRupiah(item.product.price)} {`x${item.quantity}`}
                  </span>
                  <p className="mt-auto text-lg font-bold">
                    {toRupiah(item.total)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-gray-500 focus:ring-gray-500"
                placeholder="your.email@gmail.com"
              />
            </div>
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Phone
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-gray-500 focus:ring-gray-500"
                placeholder="0888xxxxx"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Address
              </label>
              <textarea
                name="address"
                id="address"
                cols={30}
                rows={10}
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-gray-500 focus:ring-gray-500 h-48"
              ></textarea>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                {toRupiah(order.totalPayment)}
              </p>
            </div>
          </div>
          <PaymentBtn items={items} order={order} />
        </div>
      </div>
    </section>
  );
};

export default page;
