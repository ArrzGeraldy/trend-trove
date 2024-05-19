import { RegisterUserType } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const useAuth = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const create = async (values: RegisterUserType) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const json = await response.json();
      if (!response.ok) {
        setErrMessage(json.message);
      }

      if (response.ok) {
        setIsLoading(false);
        router.push("/sign-in");
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return { isLoading, errMessage, create };
};

export default useAuth;
