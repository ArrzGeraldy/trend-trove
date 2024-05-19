import React from "react";

interface InputFormI {
  label: string;
  data: string | number;
  name: string;
  handleChange: (e: any) => void;
  type: string;
}

const InputForm = ({ label, data, name, handleChange, type }: InputFormI) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={data}
        onChange={handleChange}
        className="flex h-10  rounded-md border border-slate-600 focus:border-none bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
      />
    </div>
  );
};

export default InputForm;
