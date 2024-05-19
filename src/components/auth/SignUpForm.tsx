"use client";
import React from "react";
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
import useAuth from "@/hooks/useAuth";

const formSchema = z.object({
  username: z.string().min(4, {
    message: "Password must be at least 4 characters long.",
  }),
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

const SignUpForm = () => {
  const { isLoading, errMessage, create } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await create(values);
  };

  return (
    <div
      className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-8 lg:px-16 xl:px-12
        flex items-center justify-center"
    >
      <div className="w-full h-100">
        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-center">
          Sign Up
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Username" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-4">
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
                      type="password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {isLoading ? (
              <Button
                type="submit"
                disabled={isLoading}
                className="mt-6 w-full cursor-not-allowed"
              >
                Loading...
              </Button>
            ) : (
              <Button type="submit" className="mt-6 w-full">
                Sign Up
              </Button>
            )}
          </form>
        </Form>

        <hr className="my-6 border-gray-300 w-full" />

        <p className="mt-8">
          Already have an account?{" "}
          <Link
            href={"/sign-in"}
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
