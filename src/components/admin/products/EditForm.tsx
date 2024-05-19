"use client";
import InputForm from "@/components/InputForm";
import { Textarea } from "@/components/ui/textarea";
import { fetchDataById } from "@/lib/getProduct";
import { ProductType } from "@/types";
import { productAttributes } from "@/utils/productsAttributes";
import React, { useEffect, useState } from "react";
import SelectCategory from "./SelectCategory";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaPenToSquare } from "react-icons/fa6";
import useProduct from "@/hooks/useProduct";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
const notify = () => toast.success("Update product successfully");

const EditForm = ({ id }: any) => {
  const router = useRouter();
  const [image, setFile] = useState<File | "">("");
  const [tempImage, setTempImage] = useState("");
  const [product, setProduct] = useState<ProductType | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    gendre: "",
    price: 0,
    stock: 0,
    description: "",
    categoryId: 0,
    imageurl: "",
  });

  const { isLoading, success, error, setError, update } = useProduct();

  const attributtes = productAttributes(formData);

  const fetchData = async () => {
    const data = await fetchDataById("product", id);
    setProduct(data);
    setFormData({
      name: data.name,
      gendre: data.gendre,
      price: data.price,
      stock: data.stock,
      description: data.description,
      categoryId: data.categoryId,
      imageurl: data.imageUrl,
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
    await update(formData, image, id);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (success) {
      notify();
      setTimeout(() => {
        router.push("/dashboard/products");
      }, 700);
    }
  }, [router, success]);

  return (
    <form
      className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      onSubmit={handleSubmit}
    >
      <Toaster />
      <div className="flex gap-4 col-span-2 w-full "></div>
      <div className="flex gap-4 col-span-2 w-full ">
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
      </div>
      <SelectCategory value={formData.categoryId} handleChange={handleChange} />

      <div className="flex flex-col gap-1">
        <label htmlFor="">Gendre</label>

        <select
          name="gendre"
          id=""
          className="flex h-10 w-full items-center justify-between focus:border-none rounded-md border border-slate-600 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
          value={formData.gendre}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="WOMEN">WOMEN</option>
          <option value="MEN">MEN</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description">Description</label>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></Textarea>
      </div>

      <div className="flex flex-col gap-1">
        <label>Image</label>

        <div className="flex flex-col min-h-56 w-full items-center justify-center focus:border-none rounded-md border border-slate-600 bg-white text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300 relative">
          <FaPenToSquare
            className="text-4xl text-[#222] absolute top-0 right-0 cursor-pointer"
            onClick={() => document.getElementById("file-uploader")?.click()}
          />
          {tempImage.length <= 0 ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_API}/${formData.imageurl}`}
              alt="..."
              width={200}
              height={400}
              className="w-auto h-72 object-cover "
              unoptimized={true}
            />
          ) : (
            <Image
              src={tempImage}
              alt="..."
              width={100}
              height={100}
              className="w-auto h-72 object-cover "
            />
          )}
        </div>
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
      <Button className="w-fit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Save"}
      </Button>
    </form>
  );
};

export default EditForm;
