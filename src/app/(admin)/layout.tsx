"use client";
import Aside from "@/components/admin/sidebar/Aside";
import { useState } from "react";

export default function RootLayoout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <main className="min-h-screen bg-gray-50/50">
      <Aside showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

      <section
        className={showSideBar ? "p-4 xl:ml-80 " : "xl:w-[90%] mx-auto p-4"}
      >
        {children}
      </section>
    </main>
  );
}
