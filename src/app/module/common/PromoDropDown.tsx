"use client";
import { socialLinks } from "@/app/utils/data";
import { Button } from "./ButtonUi";
import clsx from "clsx";
import { ChevronDown, Facebook, Instagram, Send, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export const PromoDropDown = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleDropDown = () => {
    setOpenDropDown(true);
  };
  const handleCloseDropDown = () => {
    setOpenDropDown(false);
  };
  const iconClasses = "w-8 h-8 stroke-black";

  return (
    <>
      <section
        className="bg-redPrimary sticky top-0 z-40 w-full py-2"
        onClick={handleDropDown}
      >
        <div className="w-10/12 mx-auto">
          <div className="flex justify-center items-center text-white font-bold">
            <p className=" text-sm xl:text-lg">
              SAVE UP TO 50% OFF + FREE SHIPPING
            </p>
            <div>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </section>
      <div
        className={clsx(
          "fixed z-30 bg-white h-screen w-full p-8 mt-8 transition-all",
          openDropDown ? "top-0" : "-top-[200%]"
        )}
      >
        <div className="flex justify-between pb-4">
          <div className=" w-[147px] h-[71px]">
            <Image
              src="/assets/skor-logo-navbar.png"
              width={102}
              height={50}
              alt="navbar logo"
              // sizes="(max-width: 1024px) 62px, 102px"
            />
          </div>
          <div className="border-2 border-black w-8 h-8 flex justify-center items-center">
            <X onClick={handleCloseDropDown} />
          </div>
        </div>
        <div className="py-8 w-full lg:w-6/12 mx-auto">
          <h1 className="text-start font-medium">
            Get free shipping, discount vouchers and members only products when
            you’re in Skor Club
          </h1>
          <h1 className="text-start font-bold">
            Log in or sign up (IT’S FREE)
          </h1>
          <div className="flex gap-6 lg:gap-8 py-4 justify-start">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                      aria-label={label}
                    >
                      <Icon className={iconClasses} />
                    </a>
                  ))}
                </div>
          <input
            placeholder="Email Address..."
            className="border-2 border-black w-full p-1 lg:p-3 font-semibold mb-4"
          />
          
          <Button href="/development" target="_blank">
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};
