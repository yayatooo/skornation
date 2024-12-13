import React from "react";
import { TittleHeading } from "../common/ui/TittleHeading";
import { DescriptionHeading } from "../common/ui/DescriptionHeading";
import { Facebook, Instagram, Send } from "lucide-react";
import { Address } from "./components/Address";
import { Promo } from "./components/Promo";
import { useTranslations } from "next-intl";
// import { GalleryInspired } from "./components/GalleryInspired";

export default function StorePage() {
  const t = useTranslations("GetInspiredPage");

  return (
    <>
      <section className="sm:py-8 mt-[20rem] w-10/12 mx-auto">
        <TittleHeading>{t("Title")}</TittleHeading>
        <DescriptionHeading>{t("Description")}</DescriptionHeading>
        {/* <GalleryInspired /> */}
        <div className="flex justify-center gap-8 py-8 mb-4 mt-[8rem] sm:mt-[28rem] lg:mt-[40rem] border-y-2 border-darkThird">
          <Facebook />
          <Instagram />
          <Send />
        </div>
      </section>
      <div>
        <Address />
        <Promo />
      </div>
    </>
  );
}
