"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const PaymentBtn = ({ order, items }: { order: any; items: any }) => {
  // console.log({ order, items });
  const handlePayment = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.snap.pay(order.snapToken, {
      // Optional
      onSuccess: async function (result: any) {
        await fetch(`${process.env.NEXT_PUBLIC_API}/order/result`, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({ id: order.id }),
        });
      },

      onError: function (result: any) {
        document.getElementById("result-json")!.innerHTML += JSON.stringify(
          result,
          null,
          2
        );
      },
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", `${process.env.NEXT_PUBLIC_CLIENT}`);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <div id="result-json"></div>
      <button
        onClick={handlePayment}
        className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
      >
        Pay
      </button>
    </div>
  );
};

export default PaymentBtn;
