import Image from "next/image";
import React from "react";
import ReviewBar from "./ReviewBar";

const Review = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 mt-6">
      <div>
        <ReviewBar />
      </div>
      <div className="">
        <div className="flex items-start">
          <Image
            width={200}
            alt="..."
            height={200}
            src="/assets/user-review.jpg"
            className="w-10 h-10 rounded-full border-2 object-cover border-white flex-none"
          />
          <div className="ml-3">
            <h4 className="text-sm font-bold text-[#333]">John Doe</h4>
            <div className="flex space-x-1 mt-1">
              <svg
                className="w-4 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <p className="text-xs !ml-2 font-semibold text-[#333]">
                2 mins ago
              </p>
            </div>
            <p className="text-sm mt-4 text-[#333]">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-[#333] text-[#333] font-bold rounded"
        >
          Read all reviews
        </button>
      </div>
    </div>
  );
};

export default Review;
