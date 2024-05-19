import React from "react";

const SkeletonNavIcons = () => {
  return (
    <div className="order-2 md:order-3 flex items-center" id="nav-content">
      <div className="inline-block animate-pulse ms-3 no-underline hover:text-black bg-gray-200 w-12 h-6 rounded-xl"></div>
      <div className="inline-block animate-pulse ms-3 no-underline hover:text-black bg-gray-200 w-12 h-6 rounded-xl"></div>
    </div>
  );
};

export default SkeletonNavIcons;
