"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ButtonAside from "./ButtonAside";

const asideItems = [
  {
    name: "Dashboard",
    href: "/dashboard/home",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "Users",
    href: "/dashboard/users",
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
  },
];

interface StateButtonSideBar {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Aside = ({ setShowSideBar, showSideBar }: StateButtonSideBar) => {
  // const [showSideBar, setShowSideBar] = useState(true);
  const pathName = usePathname();
  return (
    <aside className="flex sticky top-0 z-10">
      <input
        type="checkbox"
        id="drawer-toggle"
        className="relative sr-only peer"
        defaultChecked={showSideBar}
      />
      <label
        onClick={() => setShowSideBar((prev) => !prev)}
        htmlFor="drawer-toggle"
        className="absolute top-0 left-0 inline-block p-4 transition-all duration-500 bg-black cursor-pointer rounded-lg peer-checked:rotate-180 peer-checked:left-64"
      >
        <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
        <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
      </label>
      <div className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
        <div className="px-6 py-4 flex flex-col justify-between">
          <div className="flex flex-col  gap-1">
            <h2 className="text-lg font-semibold">Drawer</h2>
            <p className="text-gray-500">This is a drawer.</p>
            {asideItems.map((item) => (
              <Link href={item.href} key={item.name}>
                {pathName?.startsWith(item.href) ? (
                  <ButtonAside
                    name={item.name}
                    style={
                      " text-white bg-black font-bold px-4 py-2 w-full text-start rounded-md"
                    }
                  />
                ) : (
                  <ButtonAside
                    name={item.name}
                    style={
                      "text-black font-bold px-4 py-2 w-full text-start hover:bg-gray-100 rounded-md"
                    }
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute bottom-12 px-6 w-full flex">
          <Link
            href={"/"}
            className="text-white bg-black font-bold px-4 py-2 text-center w-full rounded-md"
          >
            Home
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
