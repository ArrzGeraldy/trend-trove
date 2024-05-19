"use client";
import React, { useEffect } from "react";

const page = () => {
  const fetchOrder = async () => {
    const response = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({ name: "gerrt" }),
    });
    const json = await response.json();
    console.log(json);
  };

  useEffect(() => {
    fetchOrder();
  }, []);
  return <div>Coba</div>;
};

export default page;
