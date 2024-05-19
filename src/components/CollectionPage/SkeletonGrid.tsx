import React from "react";
import { Button } from "../ui/button";

const SkeletonGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(4)].map((x, i) => (
        <div
          className="flex flex-col justify-between w-44 md:w-50 lg:w-72 mb-4 animate-pulse"
          key={i}
        >
          <div className="h-60 w-40 md:w-56 md:h-80 lg:h-80 lg:w-72 bg-gray-200"></div>
          <div className="flex flex-col gap-2 mt-2 w-full">
            <div className="w-[90%] bg-gray-200 h-4 lg:h-6"></div>
            <div className="w-[30%] bg-gray-200 h-4 lg:h-6"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonGrid;
