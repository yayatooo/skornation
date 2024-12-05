"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { DropdownSwitch } from "./DropdownSwitch";
import { SideMenu } from "./SideMenu";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  return (
    <>
      <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <nav className="bg-white sticky top-0 p-3 shadow-sm z-40">
        <div className="w-10/12 mx-auto flex justify-between items-center ">
          <div>
            <Menu onClick={handleOpenMenu} />
          </div>
          <div>
            <Image
              src="/assets/skor-logo-navbar.png"
              width={62}
              height={30}
              alt="navbar logo"
            />
          </div>
          <div>
            <DropdownSwitch />
          </div>
        </div>
      </nav>
    </>
  );
};
