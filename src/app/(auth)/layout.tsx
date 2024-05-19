import Image from "next/image";

export default function RootLayoout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <section className="flex flex-col md:flex-row h-screen items-center ">
        {children}
        <div className=" hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <Image
            src={"/assets/images/auth-banner.jpg"}
            alt="auth-banner"
            width={1000}
            height={1000}
            unoptimized={true}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </section>
    </main>
  );
}
