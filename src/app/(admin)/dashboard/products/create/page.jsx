import HeaderForm from "@/components/admin/HeaderForm";
import CreateForm from "@/components/admin/products/CreateForm";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="mt-12 px-8 flex flex-col gap-4">
        <HeaderForm title="Create Product" />
        <CreateForm />
      </div>
    </section>
  );
};

export default page;
