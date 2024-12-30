"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { DropdownSwitch } from "./DropdownSwitch";
import { SideMenu } from "./SideMenu";
import { Navlink } from "@/app/utils/data";
import { Link } from "@/i18n/routing";
import * as motion from "motion/react-client";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const scrollToSection = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = offset;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <motion.nav
        className="bg-white sticky top-0 m-0 z-20 w-full py-3 lg:py-5 shadow-sm"
        animate={{ y: 0 }}
        initial={{ y: -140 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-10/12 mx-auto flex justify-between items-center ">
          <div className="lg:hidden">
            <Menu onClick={handleOpenMenu} />
          </div>
          <div className=" w-[62px] h-[30px] lg:w-[102px] lg:h-[50px]">
            <Link href="/">
              <Image
                src="/assets/skor-logo-navbar.png"
                width={102}
                height={50}
                alt="navbar logo"
                // sizes="(max-width: 1024px) 62px, 102px"
              />
            </Link>
          </div>

          <div className="hidden lg:flex gap-12 font-semibold text-2xl">
            {Navlink.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() =>
                    scrollToSection(item.href.replace("#", ""), -125)
                  }
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
      </motion.nav>
    </>
  );
};
