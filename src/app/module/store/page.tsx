import React from "react";
import { TittleHeading } from "../common/ui/TittleHeading";
import { DescriptionHeading } from "../common/ui/DescriptionHeading";
// import { Facebook, Instagram, Send } from "lucide-react";
import { Address } from "./components/Address";
import { Promo } from "./components/Promo";
import { useTranslations } from "next-intl";
import { Comments } from "./components/Comments";
// import { GalleryInspired } from "./components/GalleryInspired";

export default function StorePage() {
  const t = useTranslations("GetInspiredPage");

  return (
    <>
      <section className="sm:py-8 w-10/12 mx-auto">
        <TittleHeading>{t("Title")}</TittleHeading>
        <DescriptionHeading>{t("Description")}</DescriptionHeading>
        <Comments />
      </section>
      {/* <div className="flex justify-center gap-8 py-8 mb-4 border-y-2 border-darkThird">
        <Facebook />
        <Instagram />
        <Send />
      </div> */}
      <div>
        <Address />
        <Promo />
      </div>
    </>
  );
}
