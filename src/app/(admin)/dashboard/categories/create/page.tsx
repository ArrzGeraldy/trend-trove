import HeaderForm from "@/components/admin/HeaderForm";
import CreateForm from "@/components/admin/category/CreateForm";
import React from "react";

const page = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-8 px-12 mt-12">
        <HeaderForm title="Create Category" />
        <CreateForm />;
      </div>
    </section>
  );
};

export default page;
