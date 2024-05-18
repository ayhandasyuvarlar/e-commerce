"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import icons from "../constants/icons";
import Link from "next/link";
import PersonalNav from "./PersonalNav";

export default function Header() {
  const pathname = usePathname();
  const [useControl, setControl] = useState(false);
  // "/auth/login" veya "/auth/register" için aynı header yapısını kullanın
  const isAuthPage = pathname.startsWith("/auth");

  useEffect(() => {
    const checkUser = localStorage.getItem("username");
    checkUser ? setControl(true) : setControl(false);
  }, []);

  if (isAuthPage) {
    return null; // Eğer auth sayfasındaysak hiçbir şey gösterme
  } else {
    return (
      <header className="w-full p-5 grid ">
        <main className="flex flex-row justify-content-around gap-4 w-full">
          <h1 className="text-2xl flex w-30rem">
            <Link href="/" className="text-blue-900">
              E-commerce
            </Link>
          </h1>
          <nav className="flex w-30rem flex flex-row justify-content-end align-items-center">
            <ul className="flex flex-row align-items-center gap-3">
              <li className="">
                <Link
                  href="/basket"
                  className="p-2 bg-transparent border-bluegray-200 border-round flex justify-content-center align-items-center border-1"
                >
                  <icons.TbBasketCheck size={20} color="black" />
                </Link>
              </li>
              {/* Auth sayfaları için login ve register aynı şekilde görüntülensin */}
              <li>
                {useControl ? (
                  <Link
                    href="/personal"
                    className="p-2 bg-transparent border-bluegray-200 border-round flex justify-content-center align-items-center border-1"
                  >
                    <icons.FaUser size={20} color="black" />
                  </Link>
                ) : (
                  <Link
                    href="/auth/login"
                    className="p-2 bg-transparent border-bluegray-200 border-round flex justify-content-center align-items-center border-1"
                  >
                    <icons.AiOutlineLogin size={20} color="black" />
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </main>
      </header>
    );
  }
}
