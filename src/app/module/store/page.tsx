import React from "react";
import { TittleHeading } from "../common/ui/TittleHeading";
import { DescriptionHeading } from "../common/ui/DescriptionHeading";
// import Image from "next/image";
import { Facebook, Instagram, Send } from "lucide-react";
import { Address } from "./components/Address";
import { Promo } from "./components/Promo";

export default function StorePage() {
  return (
    <>
      <section className="py-10 w-10/12 mx-auto">
        <TittleHeading>Get Inspired</TittleHeading>
        <DescriptionHeading>
          All the categories you need are in the SKOR which is ready to provide
          products according to your needs
        </DescriptionHeading>
        <div className="w-full h-[405px] bg-darkThird mt-2 mb-8"></div>
        <div className="flex justify-center gap-8 py-8 border-y-2 border-darkThird">
          <Facebook />
          <Instagram />
          <Send />
        </div>
      </section>
     <Address />
     <Promo />
    </>
  );
}
