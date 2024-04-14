"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dynamic from "next/dynamic";
import { Input } from "@/components";
import { useForm } from "react-hook-form";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm();

  const verifyUserEmail = async (data) => {
    try {
      setError(false);
      console.log(data);
      const res = await axios.post("/api/users/verifyemail", { data });
      console.log(res.data);
      setVerified(true);
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  };

  useEffect(() => {
    try {
      setError(false);
      const urlToken = window.location.search.split("=")[1];
      setToken(urlToken || "");
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  });

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="min-w-[350px]">
        <CardHeader className="text-2xl">Verify Email</CardHeader>
        {error ? (
          <CardContent>
            <CardTitle className="flex flex-col items-center h-16">
              Something went wrong !
            </CardTitle>
          </CardContent>
        ) : (
          <CardContent className="flex flex-col justify-center">
            <form onSubmit={handleSubmit(verifyUserEmail)}>
              {verified ? (
                <CardTitle className="flex flex-col items-center h-16">
                  Email verified successfully
                </CardTitle>
              ) : (
                <CardDescription className="flex flex-col items-center h-16">
                  {token ? (
                    <Input value={token} {...register("token")} />
                  ) : (
                    "No token"
                  )}
                </CardDescription>
              )}
              <CardFooter className="flex flex-col items-center">
                {verified ? (
                  <Button>
                    <Link href="/login">Go to login</Link>
                  </Button>
                ) : (
                  <Button type="submit">Verify</Button>
                )}
              </CardFooter>
            </form>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
