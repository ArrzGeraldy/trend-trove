import Link from "next/link";
import React from "react";

const Carousel = () => {
  return (
    <div
      className="carousel w-full relative mx-auto"
      style={{ maxWidth: `1600px` }}
    >
      <div className="carousel-inner relative overflow-hidden w-full">
        <input
          className="carousel-open hidden"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          defaultChecked={true}
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "70vh" }}
        >
          <div className=" h-full corousel-1 w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center">
            <div className="container mx-auto">
              <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p className="text-white text-2xl my-4">
                  Stripy Zig Zag Jigsaw Pillow and Duvet Set
                </p>
                <a
                  className="text-xl inline-block text-gray-400 no-underline border-b border-gray-300 leading-relaxed hover:text-black hover:border-black"
                  href="#"
                >
                  view product
                </a>
              </div>
            </div>
          </div>
        </div>
        <label
          htmlFor="carousel-3"
          className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-2"
          className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        <input
          className="carousel-open hidden"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
        />
        <div
          className="carousel-item absolute opacity-0 bg-cover bg-right"
          style={{ height: "70vh" }}
        >
          <div className="block corousel-2 h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center">
            <div className="container mx-auto">
              <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p className="text-black text-2xl my-4">
                  Real Bamboo Wall Clock
                </p>
                <Link
                  href={"/"}
                  className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed cursor-pointer hover:text-white"
                >
                  view product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <label
          htmlFor="carousel-1"
          className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-3"
          className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        <input
          className="carousel-open hidden"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "70vh" }}
        >
          <div className="block corousel-3 h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center">
            <div className="container mx-auto">
              <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p className="text-black text-2xl my-4">
                  Brown and blue hardbound book
                </p>
                <a
                  className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                  href="#"
                >
                  view product
                </a>
              </div>
            </div>
          </div>
        </div>
        <label
          htmlFor="carousel-2"
          className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-1"
          className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        <ol className="carousel-indicators">
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-1"
              className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-2"
              className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-3"
              className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Carousel;
