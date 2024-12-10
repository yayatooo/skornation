"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { DropdownSwitch } from "./DropdownSwitch";
import { SideMenu } from "./SideMenu";
import { Navlink } from "@/app/utils/data";
import Link from "next/link";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <nav className="bg-white sticky top-[36px] m-0 z-20 w-full py-3 lg:py-5 shadow-sm">
        <div className="w-10/12 mx-auto flex justify-between items-center ">
          <div className="lg:hidden">
            <Menu onClick={handleOpenMenu} />
          </div>
          <div className="relative w-[62px] h-[30px] lg:w-[82px] lg:h-[40px]">
            <Link href="/">
              <Image
                src="/assets/skor-logo-navbar.png"
                fill
                alt="navbar logo"
              />
            </Link>
          </div>
          <div className="hidden lg:flex gap-4 font-semibold">
            {Navlink.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => scrollToSection(item.href.replace("#", ""))}
                  className="hover:text-red-700 transition-colors"
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
          <div>
            <DropdownSwitch />
          </div>
        </div>
      </nav>
    </>
  );
};
