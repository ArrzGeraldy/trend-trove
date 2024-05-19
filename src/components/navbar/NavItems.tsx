import React from "react";
import ShopMenu from "./ShopMenu";

const NavItems = () => {
  return (
    <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
      <li className="inline-block no-underline hover:text-black hover:underline py-2 px-4">
        <ShopMenu />
      </li>

      <li>
        <a
          className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
          href="#"
        >
          About
        </a>
      </li>
    </ul>
  );
};

export default NavItems;
