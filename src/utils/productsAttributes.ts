interface formDataI {
  name: string;
  price: number;
  stock: number;
}
export const productAttributes = (formData: formDataI) => {
  return [
    {
      name: "name",
      label: "Name",
      type: "text",
      data: formData.name,
    },

    {
      name: "price",
      label: "Price",
      type: "number",
      data: formData.price,
    },
    {
      name: "stock",
      label: "Stock",
      type: "number",
      data: formData.stock,
    },
  ];
};
