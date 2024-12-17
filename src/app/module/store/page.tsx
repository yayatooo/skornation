import React from "react";
import { TittleHeading } from "../common/ui/TittleHeading";
import { DescriptionHeading } from "../common/ui/DescriptionHeading";
import { Address } from "./components/Address";
import { useTranslations } from "next-intl";
import { Comments } from "./components/Comments";
import { Facebook, Instagram, Send } from "lucide-react";

export default function StorePage() {
  const t = useTranslations("ReviewPage");

  return (
    <>
      <section className="sm:py-8 w-10/12 mx-auto">
        <div className="xl:py-12">
          <TittleHeading>{t("Title")}</TittleHeading>
          <DescriptionHeading>{t("Description")}</DescriptionHeading>
        </div>
        <Comments />
      </section>
      <div className="flex w-10/12 mx-auto my-8 gap-6 lg:gap-20 justify-center py-6 border-y-2 border-y-black">
        <Facebook className="w-6 h-6 md:w-8 md:h-8 lg:w-14 lg:h-14" />
        <Instagram className="w-6 h-6 md:w-8 md:h-8 lg:w-14 lg:h-14" />
        <Send className="w-6 h-6 md:w-8 md:h-8 lg:w-14 lg:h-14" />
      </div>

      <div className="mb-8">
        <Address />
      </div>
    </>
  );
}
