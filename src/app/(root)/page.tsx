import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Carousel from "@/components/Home/Carousel";
import NewArrival from "@/components/Home/NewArrival";
import dress from "../../../public/assets/images/trending/dress-3.jpg";
import jacket from "../../../public/assets/images/trending/jacket.jpg";
import blazzer from "../../../public/assets/images/trending/blazer.jpg";
import denim from "../../../public/assets/images/trending/denim-2.jpg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
// import denim from "../../../public/assets/images/trending/blazer.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="">
      <Carousel />
      <section className="w-4/5 mx-auto pt-32">
        <NewArrival />
      </section>

      <section className="w-4/5 mx-auto pt-32">
        <div>
          <h1 className="text-5xl text-center">Trending Category</h1>
          <p className="text-center mt-2 text-gray-700">
            Appear, dry there darkness they are seas, dry waters thing fly
            midst. Beast, above fly brought Very green.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-8 justify-items-center">
            <Link
              href={"/"}
              style={{ backgroundImage: `url(${dress.src})` }}
              className="w-[20rem] md:w-[24rem] h-72  lg:h-72 bg-center bg-cover flex justify-center items-center"
            >
              <p className="text-5xl font-semibold text-white">Dress</p>
            </Link>
            <Link
              href={"/"}
              style={{ backgroundImage: `url(${jacket.src})` }}
              className="w-[20rem] md:w-[24rem] h-72  lg:h-72 bg-center bg-cover flex justify-center items-center"
            >
              <p className="text-5xl font-semibold text-white">Jacket</p>
            </Link>
            <Link
              href={"/"}
              style={{ backgroundImage: `url(${blazzer.src})` }}
              className="w-[20rem] md:w-[24rem] h-72  lg:h-72 bg-center bg-cover flex justify-center items-center"
            >
              <p className="text-5xl font-semibold text-white">Blazzer</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-8 mt-32">
        <div className="w-4/5 mx-auto md:text-start  text-center flex justify-center lg:justify-between items-center">
          <div>
            <span className="font-semibold text-gray-700 tracking-widest">
              DEAL OF THE WEAK
            </span>
            <h4 className="text-4xl font-semibold mt-2">
              Oversized denim jacket
            </h4>
            <button className="bg-black text-white px-4 py-2 w-fit mt-4 flex gap-2 items-center shop-now mx-auto md:mx-0">
              Shop Now <FaArrowRight className="arrow" />
            </button>
            <p className="text-gray-700 mt-4">
              Save upto <span className="text-black font-bold">40%</span>
            </p>
          </div>
          <Image
            src={denim.src}
            width={100}
            height={100}
            alt="denim"
            unoptimized={true}
            className="hidden md:block w-80 h-[26rem] object-cover"
          />
        </div>
      </section>
    </main>
  );
}
