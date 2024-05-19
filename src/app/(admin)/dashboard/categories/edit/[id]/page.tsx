import EditForm from "@/components/admin/category/EditForm";
import React from "react";

const page = ({ params }: { params: any }) => {
  const id: number = parseInt(params.id);
  return (
    <section>
      <EditForm id={id} />
    </section>
  );
};

export default page;
