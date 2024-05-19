"use client";
import InputForm from "@/components/InputForm";
import { Button } from "@/components/ui/button";
import useCategory from "@/hooks/useCategory";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Create Category Success");

const CreateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { isLoading, error, setError, create } = useCategory();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await create(formData);
    if (error.length <= 0) {
      notify();
      setFormData({
        name: "",
      });
    }
  };
  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit} className="w-1/2">
        <InputForm
          data={formData.name}
          handleChange={handleChange}
          label="Name category"
          name="name"
          type="text"
        />

        <Button className="w-fit mt-4">Submit</Button>
      </form>
    </div>
  );
};

export default CreateForm;
