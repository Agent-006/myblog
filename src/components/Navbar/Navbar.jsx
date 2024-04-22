"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { LogOut, Plus, Settings, User, Users, Home } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/store/authSlice";

export default function Navbar() {
  const [userData, setUserData] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        const response = await axios.post("/api/users/profile");
        const userData = response.data.data;
        setUserData(userData);
        if (userData) dispatch(login({ userData }));
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [dispatch, setUserData]);

  const router = useRouter();

  const logout = async () => {
    try {
      await axios.post("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <nav className="sticky flex justify-between items-center h-14 w-full px-5 py-2 border-b-[1px] border-slate-500">
      <Link href={"/"} className="logo font-bold">
        My Blogx
      </Link>
      {/* TODO: may add gradient text*/}
      <div className="profile">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-slate-950 text-slate-200">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href={`/profile/id=${userData._id}`}>
                <DropdownMenuItem className="focus:bg-slate-700 focus:text-slate-200">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <Link href={"/settings"}>
                <DropdownMenuItem className="focus:bg-slate-700 focus:text-slate-200">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href={"/"}>
                <DropdownMenuItem className="focus:bg-slate-700 focus:text-slate-200">
                  <Home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </DropdownMenuItem>
              </Link>
              <Link href={"/addpost"}>
                <DropdownMenuItem className="focus:bg-slate-700 focus:text-slate-200">
                  <Plus className="mr-2 h-4 w-4" />
                  <span>Add post</span>
                </DropdownMenuItem>
              </Link>
              <Link href={"/groups"}>
                <DropdownMenuItem className="focus:bg-slate-700 focus:text-slate-200">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Groups</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={logout}
              className="focus:bg-slate-700 focus:text-slate-200"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
