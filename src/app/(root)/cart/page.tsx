import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MainCart from "@/components/cart/MainCart";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  const userId = Number(session?.user?.id);
  return (
    <div className="bg-gray-50">
      <div className="lg:w-4/5 w-11/12 mx-auto py-8">
        <h1 className="font-semibold text-4xl ">My Cart</h1>
        <MainCart userId={userId} />
      </div>
    </div>
  );
};

export default page;
