"use client";

import Link from "next/link";
import { Input } from "@/components";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const onLogin = async (data) => {
    try {
      setError("");
      setIsLoading(true);
      await axios.post("/api/users/login", data);
      setIsLoading(false);
      toast({
        description: "Login Successfull !",
      });
      router.push("/");
    } catch (err) {
      console.error("Login failed", err);
      setError(err.message);
      toast({
        title: "Something went wrong !",
        description: error,
      });
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
                {isLoading ? (
                  <Button type="submit" size="lg">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Login
                  </Button>
                ) : (
                  <Button type="submit" size="lg">
                    Login
                  </Button>
                )}
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
