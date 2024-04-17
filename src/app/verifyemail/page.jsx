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
import { Input } from "@/components";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit } = useForm();

  const verifyUserEmail = async (data) => {
    try {
      setError(false);
      setIsLoading(true);
      const res = await axios.post("/api/users/verifyemail", { data });
      console.log(res);
      toast({
        description: "Successfully verified !",
      });
      setIsLoading(false);
      setVerified(true);
    } catch (err) {
      setError(true);
      console.log(err.message);
      toast({
        title: "Something went wrong !",
        description: error,
      });
    }
  };

  useEffect(() => {
    try {
      setError(false);
      const urlToken = window.location.search.split("=")[1];
      const decodedToken = decodeURIComponent(urlToken);
      setToken(decodedToken || "");
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  }, [setToken, setVerified]);

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
                  <>
                    {isLoading ? (
                      <Button type="submit" size="lg">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verify
                      </Button>
                    ) : (
                      <Button type="submit" size="lg">
                        Verify
                      </Button>
                    )}
                  </>
                )}
              </CardFooter>
            </form>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
