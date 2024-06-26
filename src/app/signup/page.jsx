"use client";

import Link from "next/link";
import { Input, TextArea } from "@/components";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function SignupPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const signUp = async (data) => {
    try {
      setError("");
      setIsLoading(true);
      const res = await axios.post("/api/users/signup", data);
      dispatch(login(res.data));
      toast({
        title: "Verfication Mail Sent !",
        description: "Verfication mail has been send, please verify you email",
      });
      setIsLoading(false);
      router.push("/login");
    } catch (error) {
      console.error("Sign up failed", err.message);
      setError(err.message);
      setIsLoading(false);
      toast({
        title: "Error",
        description: error,
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <ScrollArea className="w-full min-h-screen flex flex-col justify-center lg:justify-center md:justify-start items-center gap-1 lg:p-4 md:p-4">
        <div className="h-full w-full flex flex-col items-center justify-center p-10 rounded-lg">
          <h1 className="text-2xl font-semibold pb-5">Sign up</h1>
          <div className="w-full">
            <form
              onSubmit={handleSubmit(signUp)}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <div className="pb-5 flex flex-col items-center justify-center">
                <div className="w-full flex flex-col lg:flex-row lg:gap-2 md:gap-2">
                  <Input
                    type="text"
                    label="fullname"
                    description="Enter your fullname"
                    {...register("fullname", {
                      required: true,
                    })}
                  />
                  <Input
                    type="text"
                    label="username"
                    description="Enter your username"
                    {...register("username", {
                      required: true,
                    })}
                  />
                </div>
                <div className="w-full flex flex-col lg:flex-row lg:gap-2 md:gap-2">
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
                <TextArea
                  rows="2"
                  label="bio"
                  description="Set a profile bio"
                  {...register("bio", {
                    required: true,
                  })}
                />
              </div>
              {isLoading ? (
                <Button type="submit" size="lg">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sign up
                </Button>
              ) : (
                <Button type="submit" size="lg">
                  Sign up
                </Button>
              )}
              <p className="py-5 text-slate-200">
                Already have an account ?{" "}
                <Link className="text-slate-500" href="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
