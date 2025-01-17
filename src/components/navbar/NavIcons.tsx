import { fetchDataById } from "@/lib/getProduct";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const NavIcons = () => {
  const { data: session, status }: { data: any; status: string } = useSession();
  const [cart, setCart] = useState(0);
  const fetchCart = async () => {
    const data = await fetchDataById("cart", session?.user.id);
    setCart(data.length);
    console.log(data);
  };

  useEffect(() => {
    if (session?.user.id) {
      fetchCart();
    }
  }, []);
  console.log(status);
  return (
    <div className="order-2 md:order-3 flex items-center" id="nav-content">
      <Link
        className="inline-block no-underline hover:text-black"
        href="/profile"
      >
        <svg
          className="fill-current hover:text-black"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <circle fill="none" cx="12" cy="7" r="3" />
          <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
        </svg>
      </Link>

      <Link
        className="pl-3 inline-block no-underline relative hover:text-black"
        href="/cart"
      >
        {cart !== 0 && (
          <div className="absolute bg-black text-white w-5 h-5 flex justify-center items-center rounded-full -right-3 -top-1 text-xs">
            {cart}
          </div>
        )}

        <svg
          className="fill-current hover:text-black"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
          <circle cx="10.5" cy="18.5" r="1.5" />
          <circle cx="17.5" cy="18.5" r="1.5" />
        </svg>
      </Link>

      {status === "authenticated" ? (
        <button
          onClick={() => {
            signOut({ callbackUrl: "/" });
          }}
          className="pl-4 inline-block no-underline hover:text-black"
        >
          <FaArrowRightFromBracket className="text-lg" />
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="ml-3 px-4 py-2 text-sm rounded-md inline-block no-underline bg-black text-white hover:bg-[#222]"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default NavIcons;
