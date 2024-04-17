"use client";

import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Provider } from "react-redux";
import store from "@/store/store";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en" className="dark">
        <body className={inter.className}>
          <main className="relative min-h-screen flex flex-col w-full dark:bg-slate-950  dark:text-slate-200 bg-slate-200 text-slate-950">
            {children}
          </main>
          <Toaster />
        </body>
      </html>
    </Provider>
  );
}
