"use client";
import clsx from "clsx";
import { ChevronDown, X } from "lucide-react";
import React, { useState } from "react";

export const PromoDropDown = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleDropDown = () => {
    setOpenDropDown(true);
  };
  const handleCloseDropDown = () => {
    setOpenDropDown(false);
  };

  return (
    <>
      <section
        className="bg-redPrimary sticky top-0 z-40 w-full py-2"
        onClick={handleDropDown}
      >
        <div className="flex justify-center items-center text-white font-bold">
          <p className=" text-sm">SAVE UP TO 50% OFF + FREE SHIPPING</p>
          <div>
            <ChevronDown size={16} />
          </div>
        </div>
      </section>
      <div
        className={clsx(
          "fixed z-30 bg-white h-[50vh] p-8 mt-8 transition-all",
          openDropDown ? "top-0" : "-top-[200%]"
        )}
      >
        <div className="flex justify-end pb-4">
          <div className="border-2 border-black">
            <X onClick={handleCloseDropDown} />
          </div>
        </div>
        <div>
          <h1 className="text-center font-semibold">
            this part will be added custom promo with link product, description
            promo etc{" "}
          </h1>
        </div>
      </div>
    </>
  );
};
