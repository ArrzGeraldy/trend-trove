import { Link } from "lucide-react";
import React from "react";
import { FaFileCircleXmark } from "react-icons/fa6";

const NoProductFound = () => {
  return (
    <div className="flex flex-col gap-y-4 h-96 w-full text-xl font-bold items-center justify-center">
      <FaFileCircleXmark className="text-5xl" />
      <div className="flex flex-col items-center text-center">
        <span>No products available at the moment</span>
        <Link href={"/"} className="underline text-gray-600 hover:text-black">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NoProductFound;
