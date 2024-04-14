"use client";

import Link from "next/link";
import { Input } from "@/components";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const router = useRouter();

  const onLogin = async (data) => {
    try {
      setError("");
      console.log(data);
      const res = await axios.post("/api/users/login", data);
      console.log(res);
      router.push("/");
    } catch (error) {
      console.error("Login failed", error);
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="h-[calc(100vh-56px)] w-full flex items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center gap-1 p-4">
          <div className="flex flex-col items-center justify-center p-10 rounded-lg">
            <h1 className="text-2xl font-semibold pb-5">Login</h1>
            <div className="w-full">
              <form
                onSubmit={handleSubmit(onLogin)}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <div className="pb-5 flex flex-col items-center justify-center">
                  <Input
                    type="text"
                    label="username"
                    description="Enter your username"
                    {...register("username", {
                      required: true,
                    })}
                  />
                  <Input
                    type="email"
                    label="email"
                    description="Enter your email address"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  <Input
                    type="password"
                    label="password"
                    description="Enter your password"
                    {...register("password", {
                      required: true,
                    })}
                  />
                </div>
                <Button type="submit" size="lg">
                  Login
                </Button>
                <p className="py-5 text-slate-200">
                  Don&apos;t have an account ?{" "}
                  <Link className="text-slate-500" href="/signup">
                    Signup
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
