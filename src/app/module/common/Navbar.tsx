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
      <nav className="flex justify-between items-center p-3 shadow-sm">
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
      </nav>
    </>
  );
};
