import EditForm from "@/components/admin/products/EditForm";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const page = ({ params }: { params: any }) => {
  const id = params.id;
  return <EditForm id={id} />;
};

export default page;
