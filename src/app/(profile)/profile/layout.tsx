import ButtonAside from "@/components/admin/sidebar/ButtonAside";
import Hamburger from "@/components/navbar/Hamburger";
import Image from "next/image";
import Link from "next/link";

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

export default function RootLayoout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathName = "asdf";
  return (
    <main>
      <nav className="w-full border-b-2 text-lg py-2 px-8 flex">
        <p>navbar</p>
      </nav>
      <div className="flex">
        <aside className="flex h-screen ">
          <div className=" w-64 h-full transition-all duration-500  bg-white shadow-lg">
            <div className="px-6 py-4">
              <h2 className="text-lg font-semibold">Drawer</h2>
              <p className="text-gray-500">This is a drawer.</p>
              <div className="flex flex-col gap-1">
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
          </div>
        </aside>
        {children}
      </div>
    </main>
  );
}
