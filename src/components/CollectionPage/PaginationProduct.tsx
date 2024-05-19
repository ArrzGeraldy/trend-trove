import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface PaginationProductI {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
}

const PaginationProduct = ({
  page,
  setPage,
  totalPage,
}: PaginationProductI) => {
  const handleNext = () => {
    if (page >= totalPage) return;
    setPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={handlePrev}
        className="flex items-center gap-1 text-gray-700  hover:text-black transtion-all"
      >
        <FaAngleLeft className="text-sm" /> Previous
      </button>
      <span className="border border-gray-400 px-4 py-1 rounded-md">
        {page}
      </span>
      <button
        onClick={handleNext}
        className="flex items-center gap-1 text-gray-700 hover:text-black transtion-all"
      >
        Next <FaAngleRight className="text-sm" />
      </button>
    </div>
  );
};

export default PaginationProduct;
