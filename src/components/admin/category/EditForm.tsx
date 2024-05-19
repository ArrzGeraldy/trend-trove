"use client";
import InputForm from "@/components/InputForm";
import { Button } from "@/components/ui/button";
import useCategory from "@/hooks/useCategory";
import { fetchDataById } from "@/lib/getProduct";
import React, { useEffect, useState } from "react";

const EditForm = ({ id }: { id: number }) => {
  const [category, setCategory] = useState();
  const [formData, setFormData] = useState({
    name: "",
  });

  const { isLoading, update } = useCategory();

  const fetchCategoryById = async () => {
    const data = await fetchDataById("category", id);

    console.log(data);
    setCategory(data);
    setFormData({
      name: data.name,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await update(id, formData);
  };

  useEffect(() => {
    fetchCategoryById();
  }, []);
  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <InputForm
        data={formData.name}
        handleChange={handleChange}
        label="Main category"
        name="name"
        type="text"
      />

      <Button className="w-fit mt-4">Submit</Button>
    </form>
  );
};

export default EditForm;
