"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import InputForm from "@/components/InputForm";
import useProduct from "@/hooks/useProduct";
import AlertError from "@/components/AlertError";
import SelectCategory from "./SelectCategory";
import { productAttributes } from "@/utils/productsAttributes";
import toast, { Toaster } from "react-hot-toast";
import { FaCloudArrowUp, FaPenToSquare } from "react-icons/fa6";
import Image from "next/image";

const notify = () => toast.success("Create Product Successfully");

const CreateForm = () => {
  const [image, setFile] = useState<File | "">("");
  const [tempImage, setTempImage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    gendre: "",
    price: 0,
    stock: 0,
    description: "",
    categoryId: 0,
  });

  const { isLoading, success, error, setError, create } = useProduct();
  const attributtes = productAttributes(formData);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await create(formData, image);
  };

  useEffect(() => {
    if (success) {
      notify();
      setFormData({
        name: "",
        gendre: "",
        price: 0,
        stock: 0,
        description: "",
        categoryId: 0,
      });
      setFile("");
      setTempImage("");
    }
  }, [success]);

  return (
    <div>
      <Toaster />
      {error && <AlertError error={error} setError={setError} />}
      <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-4 col-span-2 w-full ">
          {attributtes.map((attributte, i) => (
            <InputForm
              key={i}
              data={attributte.data}
              handleChange={handleChange}
              label={attributte.label}
              name={attributte.name}
              type={attributte.type}
            />
          ))}
        </div>

        <SelectCategory
          value={formData.categoryId}
          handleChange={handleChange}
        />

        <div className="flex flex-col gap-1">
          <label htmlFor="">Gendre</label>

          <select
            name="gendre"
            onChange={handleChange}
            id=""
            value={formData.gendre}
            className="flex h-10 w-full items-center justify-between focus:border-none rounded-md border border-slate-600 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
          >
            <option value="">Select</option>
            <option value="WOMEN">WOMEN</option>
            <option value="MEN">MEN</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <Textarea
            onChange={handleChange}
            value={formData.description}
            name="description"
          ></Textarea>
        </div>

        <div className="flex flex-col gap-1">
          <label>Image</label>
          {tempImage.length > 0 ? (
            <div className="flex flex-col min-h-56 w-full items-center justify-center focus:border-none rounded-md border border-slate-600 bg-white text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300 relative">
              <FaPenToSquare
                className="text-4xl text-[#222] absolute top-0 right-0 cursor-pointer"
                onClick={() =>
                  document.getElementById("file-uploader")?.click()
                }
              />
              <Image
                src={tempImage}
                width={100}
                height={100}
                alt="///"
                className="w-auto h-72 object-cover "
              />
            </div>
          ) : (
            <div className="flex flex-col min-h-72 w-full items-center justify-center focus:border-none rounded-md border border-slate-600 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300">
              <div
                className="flex flex-col justify-center items-center cursor-pointer"
                onClick={() =>
                  document.getElementById("file-uploader")?.click()
                }
              >
                <FaCloudArrowUp className="text-6xl text-[#222]" />
                <p>Upload image</p>
              </div>
            </div>
          )}
        </div>
        <input
          type="file"
          name="image"
          accept="image/*"
          id="file-uploader"
          className="hidden"
          onChange={({ target: { files } }) => {
            if (files && files[0]) {
              console.log(files[0]);
              if (files[0].size > 1000000) {
                setFile("");
              } else {
                setFile(files[0]);
                setTempImage(URL.createObjectURL(files[0]));
              }
            }
          }}
        />
        <Button className="w-fit">{isLoading ? "Loading.." : "Submit"}</Button>
      </form>
    </div>
  );
};

export default CreateForm;
