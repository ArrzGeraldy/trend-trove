"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "This field has to be filled.",
    })
    .email({ message: "This is not a valid email." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

const SignInForm = () => {
  const [errMessage, setErrMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const callbackUrl = params.get("callbackUrl")
    ? `${params.get("callbackUrl")}`
    : "/";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: callbackUrl,
      });

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setIsLoading(false);
        console.log(res.error);
        if (res.status === 401) {
          setErrMessage("Invalid email or password");
        }
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }
  return (
    <div
      className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-8 lg:px-16 xl:px-12
        flex items-center justify-center"
    >
      <div className="w-full h-100">
        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-center">
          Log in to your account
        </h1>
        {errMessage && (
          <div className="w-full py-2 bg-red-200 text-red-700 border border-red-700 text-center rounded-md mt-6">
            {errMessage}
          </div>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Emai Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Email Address" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="text-gray-700">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Password"
                      {...field}
                      type="password"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading} className="mt-6 w-full">
              Login
            </Button>
          </form>
        </Form>

        <hr className="my-6 border-gray-300 w-full" />

        <p className="mt-8">
          Need an account?{" "}
          <Link
            href={"/sign-up"}
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
