"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname.startsWith("/auth/login");

  return (
    <main className=" flex flex-row h-screen align-items-center justify-content-center  p-0  m-auto">
      <div
        className="flex  flex-column border-1 shadow-3  w-5 border-gray-300 border-round-xl overflow-hidden"
        style={{ height: "80vh" }}
      >
        <div className="w-full p-5 gap-1 h-auto  flex flex-column align-items-start justify-content-start">
          <p className="text-4xl font-bold">Welcome Back 👋🏻</p>
          {isLoginPage ? (
            <p className="text-lg text-black-alpha-50 ">
              Don't have a account
              <Link className="underline" href={"/auth/register"}>
                &nbsp; Register
              </Link>
            </p>
          ) : (
            <p className="text-lg text-black-alpha-50 ">
              Do have a account{" "}
              <Link className="underline" href={"/auth/login"}>
                &nbsp; Login
              </Link>
            </p>
          )}
        </div>
        {children}
      </div>
    </main>
  );
}
